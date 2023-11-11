# Eslint Config Base

[![npm version](https://badge.fury.io/js/@lehoczky%2Feslint-config-base.svg)](https://badge.fury.io/js/@lehoczky%2Feslint-config-base)

ESLint configuration for JavaScript projects with [prettier](https://prettier.io/).

## 💿 Installation

```sh
pnpm add -D eslint prettier @lehoczky/eslint-config-base
```

## 💻 Usage

`.eslintrc.cjs`:

```js
module.exports = {
  root: true,
  env: {
    // Or other environments you use
    node: true,
  },
  extends: ["@lehoczky/eslint-config-base"],
}
```

Example command:

```json
{
  "scripts": {
    "eslint:fix": "eslint . --ext .js --max-warnings=0 --fix"
  }
}
```
