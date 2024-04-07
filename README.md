# eCommerce

- built with: npx create-next-app@latest a --typescript --tailwind --eslint
- added shadcn-ui with: npx shadcn-ui@latest init
  - docs: https://ui.shadcn.com/docs/installation/next
- primary DB == MongoDB: https://www.youtube.com/watch?v=a2oa0qL4CB8 & https://cloud.mongodb.com/v2/ (login is with google with nlicupfa)
- used next-auth, mongoose, & bcryptjs for authentication === https://www.youtube.com/watch?v=PEMfsqZ2-As

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel


The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Test out the stripe webhook.
1. _Optional_: download and run the [Stripe CLI](https://stripe.com/docs/stripe-cli)
~~~shell
$ stripe listen --forward-to localhost:3000/api/webhooks
~~~
2. Run the application
~~~shell
$ STRIPE_WEBHOOK_SECRET=$(stripe listen --print-secret) npm run dev
~~~

## Test on an HTTPS server
Need to download mkcert

mkcert using scoop from the github
```
https://github.com/FiloSottile/mkcert
```
run this command on the command line.
```
mkcert -key-file localhost-key.pem -cert-file localhost.pem localhost *.localhost
```
need to download next using 
```
npm install -g next
```
now run the following command in a cmd using admin privledges.
```
next dev --experimental-https
```