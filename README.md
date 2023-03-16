# 🚙 chrome-extension-ts-starter

A starter for developing a Chrome Extension with __TypeScript (only, without React)__ + Webpack + TailwindCSS + ESLint + Prettier.

## Getting Started

**Requirements**: [node+npm](https://github.com/nvm-sh/nvm), [yarn](https://classic.yarnpkg.com/lang/en/docs/install/).

```bash
# Insatll
npm i -g nodemon
npm i -g yarn

yarn

# Build -> dist/
yarn build

# Watch mode
yarn watch
```

## Install extension

Open Chromium based browser's extension manager page > Enable "**Developer mode**" > "**Load unpackaged**" > Choose folder `dist/`. Don't forget to "pin" this extension in the extension bar.

