import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';


if (!process.env.TWITCH_SECRET) {
  console.error("The TWITCH_SECRET environment variable is not set.");
  process.exit(1); // Exit the process with an error code
}

// Disables automatic body parsing to access the raw body
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const buffers: Buffer[] = [];
    req.on('data', (chunk: Buffer) => {
      buffers.push(chunk);
    });

    req.on('end', () => {
      const rawBody = Buffer.concat(buffers).toString();

      const TWITCH_MESSAGE_ID = 'Twitch-Eventsub-Message-Id'.toLowerCase();
      const TWITCH_MESSAGE_TIMESTAMP = 'Twitch-Eventsub-Message-Timestamp'.toLowerCase();
      const TWITCH_MESSAGE_SIGNATURE = 'Twitch-Eventsub-Message-Signature'.toLowerCase();
      const MESSAGE_TYPE = 'Twitch-Eventsub-Message-Type'.toLowerCase();

      const secret = getSecret(); 
      const message = getHmacMessage(req.headers, rawBody);
      const hmac = `sha256=` + getHmac(secret, message);

      // Extract the signature header and ensure it's treated as a string (not string array)
      const signatureHeader = req.headers[TWITCH_MESSAGE_SIGNATURE];
      const signature = Array.isArray(signatureHeader) ? signatureHeader[0] : signatureHeader;

      if (verifyMessage(hmac, signature || '')) {
        console.log("Signatures match");

        const notification = JSON.parse(rawBody);

        switch (req.headers[MESSAGE_TYPE]) {
          case 'notification':
            console.log(`Event type: ${notification.subscription.type}`);
            console.log(JSON.stringify(notification.event, null, 4));

            // TODO: Need to handle notification when it comes in

            // "The type field in the body of the request identifies the type of event, 
            //  and the event field contains the event’s data."

            res.status(204).end();
            break;
          case 'webhook_callback_verification':

            // Might need to use this instead: res.set('Content-Type', 'text/plain').status(200).send(notification.challenge);
            res.status(200).send(notification.challenge);
            break;
          case 'revocation':
            console.log(`${notification.subscription.type} notifications revoked!`);
            console.log(`reason: ${notification.subscription.status}`);
            console.log(`condition: ${JSON.stringify(notification.subscription.condition, null, 4)}`);
            res.status(204).end();
            break;
          default:
            console.log(`Unknown message type: ${req.headers[MESSAGE_TYPE]}`);
            res.status(204).end();
        }
      } else {
        console.log('403 - Signatures did not match');
        res.status(403).end();
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

function getSecret(): string {
  return process.env.TWITCH_SECRET || '';
}

function getHmacMessage(headers: NodeJS.Dict<string | string[]>, body: string): string {
  return `${headers['twitch-eventsub-message-id']}${headers['twitch-eventsub-message-timestamp']}${body}`;
}

function getHmac(secret: string, message: string): string {
  return crypto.createHmac('sha256', secret).update(message).digest('hex');
}

function verifyMessage(hmac: string, verifySignature: string): boolean {
  return crypto.timingSafeEqual(Buffer.from(hmac), Buffer.from(verifySignature));
}