import type { Linter } from "eslint"
import eslintPluginUnicorn from "eslint-plugin-unicorn"

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
      "unicorn/prefer-single-call": "warn",
      "unicorn/no-array-reduce": ["warn", { allowSimpleOperations: true }],
      "unicorn/no-await-in-promise-methods": "warn",
      "unicorn/no-instanceof-array": "warn",
      "unicorn/no-typeof-undefined": "warn",
      "unicorn/no-unnecessary-array-flat-depth": "warn",
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
      "unicorn/prefer-import-meta-properties": "warn",
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
