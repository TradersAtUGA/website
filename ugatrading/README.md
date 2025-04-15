This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First for dependicies run
npm install

Second, run the development server:

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy to Netlify

Deploying a Next.js app to Netlify is pretty smooth, especially with the Netlify Next.js plugin. Here's a step-by-step guide to get you from build to live:

✅ Step 1: Build Your Next.js App
If you haven’t already:

bash
Copy
Edit
npx create-next-app@latest
Then build your app locally to test:

bash
Copy
Edit
npm run build
npm run start
✅ Step 2: Install Netlify CLI (optional but helpful)
This lets you test Netlify builds locally.

bash
Copy
Edit
npm install -g netlify-cli
✅ Step 3: Setup for Netlify
Install the Netlify Next.js Adapter Plugin:

bash
Copy
Edit
npm install @netlify/plugin-nextjs
Create a netlify.toml file in the root of your project:

toml
Copy
Edit
[build]
command = "npm run build"
publish = ".next"

[functions]
directory = "netlify/functions"

[[plugins]]
package = "@netlify/plugin-nextjs"
✅ The plugin handles dynamic routes, ISR, SSR, etc.

✅ Step 4: Connect to Netlify
You have 2 options:

Option A: Use the Netlify CLI
bash
Copy
Edit
netlify init
It will guide you through linking the project to your Netlify account.

Option B: Use the Netlify UI
Push your code to GitHub/GitLab/Bitbucket.

Go to Netlify and click "Add new site" → "Import from Git".

Select your repo.

Set build settings:

Build command: npm run build

Publish directory: .next

Netlify will detect it’s a Next.js site if the plugin is installed and handle everything.

✅ Step 5: Deploy
Every push to your repo will trigger a Netlify deploy. Or you can manually trigger it with:

bash
Copy
Edit
netlify deploy
Use --prod for a production deploy.

✅ Bonus: Add Environment Variables
In the Netlify UI:

Go to your site → Site settings → Environment variables

Add anything like NEXT_PUBLIC_API_KEY, DATABASE_URL, etc.

🔄 TL;DR Build Summary
✅ Install @netlify/plugin-nextjs

✅ Add netlify.toml

✅ Use netlify init or connect through the UI

✅ Push to Git → Netlify auto-deploys
