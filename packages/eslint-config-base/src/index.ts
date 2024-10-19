import "eslint-plugin-only-warn"
import eslintPluginUnicorn from "eslint-plugin-unicorn"
import gitignore from "eslint-config-flat-gitignore"
import globals from "globals"
import js from "@eslint/js"
import type { Linter } from "eslint"
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort"
import pluginPromise from "eslint-plugin-promise"
import jsdocPlugin from "eslint-plugin-jsdoc"
import eslintConfigPrettier from "eslint-config-prettier"

export const commonIgnores: Linter.Config[] = [
  {
    name: "lehoczky/ignores/common",
    ignores: [
      "**/node_modules",
      "**/dist",
      "**/package-lock.json",
      "**/yarn.lock",
      "**/pnpm-lock.yaml",
      "**/bun.lockb",

      "**/output",
      "**/coverage",
      "**/temp",
      "**/.temp",
      "**/tmp",
      "**/.tmp",
      "**/.history",
      "**/.vitepress/cache",
      "**/.nuxt",
      "**/.next",
      "**/.svelte-kit",
      "**/.vercel",
      "**/.changeset",
      "**/.idea",
      "**/.cache",
      "**/.output",
      "**/.vite-inspect",
      "**/.yarn",
      "**/vite.config.*.timestamp-*",

      "**/CHANGELOG*.md",
      "**/*.min.*",
      "**/LICENSE*",
      "**/__snapshots__",
      "**/auto-import?(s).d.ts",
      "**/components.d.ts",
    ],
  },
]

export const javascript: Linter.Config[] = [
  js.configs.recommended,
  {
    name: "lehoczky/javascript/eslint",
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2024,
        ...globals.node,
      },
    },
    rules: {
      complexity: ["warn", { max: 13 }],
      "default-case-last": "warn",
      "dot-notation": "warn",
      eqeqeq: ["warn", "smart"],
      "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
      "grouped-accessor-pairs": ["warn", "getBeforeSet"],
      "max-depth": ["warn", 6],
      "max-params": ["warn", { max: 8 }],
      "no-caller": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-constructor-return": "warn",
      "no-extend-native": "warn",
      "no-implicit-coercion": ["warn", { boolean: false }],
      "no-lonely-if": "warn",
      "no-multi-str": "warn",
      "no-nested-ternary": "warn",
      "no-promise-executor-return": "warn",
      "no-return-assign": "warn",
      "no-throw-literal": "warn",
      "no-unneeded-ternary": "warn",
      "no-unreachable-loop": "warn",
      "no-useless-concat": "warn",
      "no-useless-return": "warn",
      "no-var": "warn",
      "object-shorthand": "warn",
      "prefer-arrow-callback": "warn",
      "prefer-const": "warn",
      "prefer-exponentiation-operator": "warn",
      "prefer-object-spread": "warn",
      "prefer-rest-params": "warn",
      "prefer-template": "warn",
      radix: "warn",
      "require-await": "warn",
      yoda: ["warn", "never", { exceptRange: true }],
    },
  },
  {
    files: ["**/*.cjs"],
    name: "lehoczky/javascript/commonjs-globals",
    languageOptions: {
      globals: {
        ...globals.es2024,
        ...globals.node,
        ...globals.commonjs,
      },
    },
  },
]

export const unicorn: Linter.Config[] = [
  {
    name: "lehoczky/javascript/unicorn",
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      "unicorn/catch-error-name": "warn",
      "unicorn/error-message": "warn",
      "unicorn/new-for-builtins": "warn",
      "unicorn/no-array-for-each": "warn",
      "unicorn/no-array-push-push": "warn",
      "unicorn/no-array-reduce": ["warn", { allowSimpleOperations: true }],
      "unicorn/no-await-in-promise-methods": "warn",
      "unicorn/no-instanceof-array": "warn",
      "unicorn/no-typeof-undefined": "warn",
      "unicorn/no-unreadable-array-destructuring": "warn",
      "unicorn/no-unreadable-iife": "warn",
      "unicorn/no-useless-fallback-in-spread": "warn",
      "unicorn/no-useless-length-check": "warn",
      "unicorn/no-useless-promise-resolve-reject": "warn",
      "unicorn/no-useless-spread": "warn",
      "unicorn/numeric-separators-style": "warn",
      "unicorn/prefer-array-find": "warn",
      "unicorn/prefer-array-flat": "warn",
      "unicorn/prefer-array-flat-map": "warn",
      "unicorn/prefer-array-some": "warn",
      "unicorn/prefer-blob-reading-methods": "warn",
      "unicorn/prefer-code-point": "warn",
      "unicorn/prefer-date-now": "warn",
      "unicorn/prefer-default-parameters": "warn",
      "unicorn/prefer-dom-node-append": "warn",
      "unicorn/prefer-dom-node-remove": "warn",
      "unicorn/prefer-dom-node-text-content": "warn",
      "unicorn/prefer-includes": "warn",
      "unicorn/prefer-keyboard-event-key": "warn",
      "unicorn/prefer-logical-operator-over-ternary": "warn",
      "unicorn/prefer-math-min-max": "warn",
      "unicorn/prefer-modern-dom-apis": "warn",
      "unicorn/prefer-modern-math-apis": "warn",
      "unicorn/prefer-negative-index": "warn",
      "unicorn/prefer-node-protocol": "warn",
      "unicorn/prefer-number-properties": "warn",
      "unicorn/prefer-object-from-entries": "warn",
      "unicorn/prefer-optional-catch-binding": "warn",
      "unicorn/prefer-spread": "warn",
      "unicorn/prefer-string-raw": "warn",
      "unicorn/prefer-ternary": "warn",
      "unicorn/throw-new-error": "warn",
    },
  },
]

export const simpleImportSort: Linter.Config[] = [
  {
    name: "lehoczky/javascript/simple-import-sort",
    plugins: {
      "simple-import-sort": simpleImportSortPlugin,
    },
    rules: {
      "simple-import-sort/imports": "error",
    },
  },
]

export const promises: Linter.Config[] = [
  {
    name: "lehoczky/javascript/promise",
    plugins: {
      promise: pluginPromise,
    },
    rules: {
      "promise/no-nesting": "warn",
      "promise/no-return-wrap": "warn",
      "promise/param-names": "warn",
      "promise/prefer-await-to-then": "warn",
    },
  },
]

export const jsdoc: Linter.Config[] = [
  {
    name: "lehoczky/javascript/jsdoc",
    plugins: {
      jsdoc: jsdocPlugin,
    },
    rules: {
      "jsdoc/check-alignment": "warn",
      "jsdoc/check-param-names": "warn",
      "jsdoc/check-property-names": "warn",
      "jsdoc/tag-lines": [
        "warn",
        "always",
        {
          startLines: 1,
          applyToEndTag: false,
          tags: {
            param: {
              lines: "never",
            },
          },
        },
      ],
      "jsdoc/no-defaults": "warn",
    },
  },
]

const config: Linter.Config[] = [
  gitignore({ name: "lehoczky/ignores/gitignore", strict: false }),
  ...commonIgnores,
  ...javascript,
  ...unicorn,
  ...simpleImportSort,
  ...promises,
  ...jsdoc,
  eslintConfigPrettier,
]

export default config
