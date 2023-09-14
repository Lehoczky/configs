# Prettier Config

Shared [prettier](https://prettier.io/) configuration.

## 💿 Installation

```sh
pnpm add -D prettier @lehoczky/prettier-config
```

## 💻 Usage

`.prettierrc.json`:

```json
"@lehoczky/prettier-config"
```

Example command:

```json
{
  "scripts": {
    "format:fix": "prettier . --write --ignore-unknown"
  }
}
```
