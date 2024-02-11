import "@rushstack/eslint-patch/modern-module-resolution"

import type { Linter } from "eslint"

const config: Linter.Config = {
  plugins: [
    "only-warn",
    "unicorn",
    "sonarjs",
    "simple-import-sort",
    "promise",
    "jsdoc",
    "import",
  ],
  extends: ["eslint:recommended", "prettier"],
  rules: {
    // Possible Problems
    "no-constant-binary-expression": "warn",
    "no-constructor-return": "warn",
    "no-promise-executor-return": "warn",
    "no-unreachable-loop": "warn",

    // Suggestions
    complexity: ["warn", 13],
    "default-case-last": "warn",
    "dot-notation": "warn",
    eqeqeq: ["warn", "smart"],
    "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
    "grouped-accessor-pairs": ["warn", "getBeforeSet"],
    "max-depth": ["warn", 6],
    "max-params": ["warn", { max: 8 }],
    "no-bitwise": "warn",
    "no-caller": "warn",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-extend-native": "warn",
    "no-implicit-coercion": ["warn", { boolean: false }],
    "no-lonely-if": "warn",
    "no-multi-str": "warn",
    "no-negated-condition": "warn",
    "no-nested-ternary": "warn",
    "no-return-assign": "warn",
    "no-throw-literal": "warn",
    "no-unneeded-ternary": "warn",
    "no-useless-concat": "warn",
    "no-var": "warn",
    "no-useless-return": "warn",
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

    // Unicorn
    "unicorn/catch-error-name": "warn",
    "unicorn/consistent-destructuring": "warn",
    "unicorn/error-message": "warn",
    "unicorn/new-for-builtins": "warn",
    "unicorn/no-array-push-push": "warn",
    "unicorn/no-array-reduce": ["warn", { allowSimpleOperations: true }],
    "unicorn/no-instanceof-array": "warn",
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
    "unicorn/prefer-ternary": "warn",
    "unicorn/throw-new-error": "warn",
    "unicorn/no-typeof-undefined": "warn",
    "unicorn/prefer-logical-operator-over-ternary": "warn",

    // Sonar
    "sonarjs/no-identical-conditions": "warn",
    "sonarjs/no-collapsible-if": "warn",
    "sonarjs/prefer-immediate-return": "warn",
    "sonarjs/prefer-object-literal": "warn",

    // Promise
    "promise/prefer-await-to-then": "warn",

    // JSdoc
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
    "jsdoc/no-types": "warn",

    // Import
    "import/no-useless-path-segments": "warn",
    "import/newline-after-import": "warn",

    // Simple import sort
    "simple-import-sort/imports": "warn",
  },
  ignorePatterns: [
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
}

export = config
