import "eslint-plugin-only-warn"
import eslintPluginUnicorn from "eslint-plugin-unicorn"
import globals from "globals"
import js from "@eslint/js"
import type { Linter } from "eslint"
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort"
import pluginPromise from "eslint-plugin-promise"
import jsdocPlugin from "eslint-plugin-jsdoc"
import eslintConfigPrettier from "eslint-config-prettier"

export const commonIgnores: Linter.Config[] = [
  {
    ignores: [
      "*.min.*",
      "CHANGELOG.md",
      "dist",
      "LICENSE*",
      "output",
      "coverage",
      "temp",
      "cache",
      "package-lock.json",
      "pnpm-lock.yaml",
      "yarn.lock",
      "__snapshots__",
      "!.github",
      "!.vscode",
    ],
  },
]

export const baseEslint: Linter.Config[] = [
  js.configs.recommended,
  {
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
]

export const unicorn: Linter.Config[] = [
  {
    languageOptions: {
      globals: globals.builtin,
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      "unicorn/catch-error-name": "warn",
      "unicorn/error-message": "warn",
      "unicorn/new-for-builtins": "warn",
      "unicorn/no-array-push-push": "warn",
      "unicorn/no-array-reduce": ["warn", { allowSimpleOperations: true }],
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
      "unicorn/prefer-default-parameters": "warn",
      "unicorn/prefer-includes": "warn",
      "unicorn/prefer-logical-operator-over-ternary": "warn",
      "unicorn/prefer-ternary": "warn",
      "unicorn/throw-new-error": "warn",
    },
  },
]

export const simpleImportSort: Linter.Config[] = [
  {
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
    plugins: {
      promise: pluginPromise,
    },
    rules: {
      "promise/prefer-await-to-then": "warn",
    },
  },
]

export const jsdoc: Linter.Config[] = [
  {
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
  ...commonIgnores,
  ...baseEslint,
  ...unicorn,
  ...simpleImportSort,
  ...promises,
  ...jsdoc,
  eslintConfigPrettier,
]

export default config
