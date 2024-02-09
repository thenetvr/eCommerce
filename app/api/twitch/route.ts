// pages/api/eventsub.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

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

      const secret = getSecret(); // Needs to be implemented (securely retrieves secret)
      const message = getHmacMessage(req.headers, rawBody);
      const hmac = `sha256=` + getHmac(secret, message);

      if (verifyMessage(hmac, req.headers[TWITCH_MESSAGE_SIGNATURE] || '')) {
        console.log("Signatures match");

        const notification = JSON.parse(rawBody);

        switch (req.headers[MESSAGE_TYPE]) {
          case 'notification':
            console.log(`Event type: ${notification.subscription.type}`);
            console.log(JSON.stringify(notification.event, null, 4));
            res.status(204).end();
            break;
          case 'webhook_callback_verification':
            res.status(200).send(notification.challenge);
            break;
          case 'revocation':
            console.log(`${notification.subscription.type} notifications revoked!`);
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
  // Implement secure retrieval of your secret
  return 'secret goes here';
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









/*
import { buffer } from 'micro'
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) {
    const rawBody = (await buffer(req)).toString()
    const data = JSON.parse(rawBody)
    const signature = req.headers['x-kc-signature']?.toString()
  
    if (!signature
          && !signatureHelper.isValidSignatureFromString(rawBody, process.env.WEBHOOK_SECRET, signature) {
      return res.status(401)

    }
}

export const config = {
    api: {
      bodyParser: false,
    },
  }

  */