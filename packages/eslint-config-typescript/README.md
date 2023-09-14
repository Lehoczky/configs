# Eslint Config TypeScript

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
