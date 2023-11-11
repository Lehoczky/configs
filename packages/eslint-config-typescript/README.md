# Eslint Config TypeScript

[![npm version](https://badge.fury.io/js/@lehoczky%2Feslint-config-typescript.svg)](https://badge.fury.io/js/@lehoczky%2Feslint-config-typescript)

ESLint configuration for TypeScript projects with [prettier](https://prettier.io/).

## 💿 Installation

```sh
pnpm add -D eslint typescript prettier @lehoczky/eslint-config-typescript
```

## 💻 Usage

`.eslintrc.cjs`:

```js
module.exports = {
  root: true,
  extends: ["@lehoczky/eslint-config-typescript"],
}
```

Example command:

```json
{
  "scripts": {
    "eslint:fix": "eslint . --ext .js,.ts --max-warnings=0 --fix"
  }
}
```

## 🛠 TSConfig

If your `tsconfig.json` file does not [include](https://www.typescriptlang.org/tsconfig#include) every TypeScript file in the project, you can create a new `tsconfig.eslint.json` file and include every file in that.

This config will automatically use `tsconfig.eslint.json` file if it finds one in the root of your repository:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "allowJs": true
  },
  "include": ["src/**/*", "./*.ts"]
}
```
