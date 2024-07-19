# Shared Configurations

Monorepo for shared tooling configurations.

Packages:

- [eslint-config-base](packages/eslint-config-base)
- [eslint-config-typescript](packages/eslint-config-typescript)
- [eslint-config-vue](packages/eslint-config-vue)
- [markdownlint-config](packages/markdownlint-config)
- [prettier-config](packages/prettier-config)

## Other Configuration Files

The following configuration files are used by most projects, but they cannot be shared as an `npm` package:

`.gitattributes`:

```ini
# Enforce Unix newlines
* text=auto eol=lf

# Fix syntax highlighting on GitHub to allow comments
.vscode/*.json linguist-language=JSON-with-Comments
```

`.editorconfig`:

```ini
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
end_of_line = lf
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true
indent_size = 2

[*.py]
indent_size = 4

[*.md]
max_line_length = off
trim_trailing_whitespace = false
```
