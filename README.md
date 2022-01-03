# Next-Greg

Hello, this is a next application that I am using to help my friend Greg learn more about
software engineering!

## Setup
Once you clone this app, you will need to create a `.env.local` file within the root dir
of this applicaiton using this configurations (for now).
```
NEXT_PUBLIC_ENV=local
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```
[If you need more context about env variables in next.js](https://nextjs.org/docs/basic-features/environment-variables)


## Running
Just run `npm run dev`

## Deploying to prod
Any merge into main will deploy this app into production!