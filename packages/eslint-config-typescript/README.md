# Eslint Config TypeScript

[![npm version](https://badge.fury.io/js/@lehoczky%2Feslint-config-typescript.svg)](https://badge.fury.io/js/@lehoczky%2Feslint-config-typescript)

ESLint configuration for TypeScript projects. Supports [prettier](https://prettier.io/) by default.

## 💿 Installation

```sh
pnpm add -D eslint typescript @lehoczky/eslint-config-typescript
```

## 💻 Usage

### With Type Checking

`eslint.config.mjs`:

```js
import { configLehoczkyTypescript } from "@lehoczky/eslint-config-typescript"

export default configLehoczkyTypescript({
  parserOptionsForTypeChecking: {
    projectService: true,
    tsconfigRootDir: import.meta.dirname,
  },
})
```

See more: [typescript-eslint | Linting with Type Information](https://typescript-eslint.io/getting-started/typed-linting)

### Without Type Checking

```js
import { configLehoczkyTypescript } from "@lehoczky/eslint-config-typescript"

export default configLehoczkyTypescript()
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
