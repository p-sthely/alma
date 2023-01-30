## Get started

1. Clone this repository
```sh
git clone https://github.com/p-sthely/alma.git
```
2. Install dependencies
```sh
npm install
```
3. Build and start
```sh
npm run start
```

The server is available at localhost:1234

## Vercel

This project is delivered on Vercel https://alma-eosin.vercel.app/

## Description

- `index.pug`
  - extends:  `layouts/baseof.pug`
  - loads:    `sass/pages/_home.scss`
  - imports:  `{ render }` from `app.js`
  - imports:  `Home` from `pages/Home.js`
  - renders:  `render ( Home )` in `#app`

Another entry point, for exemple `contact.pug`, would be like :

- `contact.pug`
  - extends:  `layouts/baseof.pug`
  - loads:    `sass/pages/_contact.scss`
  - imports:  `{ render }` from `app.js`
  - imports:  `Contact` from `pages/Contact.js`
  - renders:  `render ( Contact )` in `#app`


