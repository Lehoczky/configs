# Eslint Config Base

[![npm version](https://badge.fury.io/js/@lehoczky%2Feslint-config-base.svg)](https://badge.fury.io/js/@lehoczky%2Feslint-config-base)

ESLint configuration for JavaScript projects. Supports [prettier](https://prettier.io/) by default.

## 💿 Installation

```sh
pnpm add -D eslint @lehoczky/eslint-config-base
```

## 💻 Usage

`eslint.config.mjs`:

```js
import { configLehoczkyJavascript } from "@lehoczky/eslint-config-base"

/** @type {import("eslint").Linter.Config[]} */
export default configLehoczkyJavascript()
```

## 📢 Commands

`package.json`:

```json
{
  "scripts": {
    "eslint:check": "eslint --max-warnings=0",
    "eslint:fix": "eslint --max-warnings=0 --fix"
  }
}
```
