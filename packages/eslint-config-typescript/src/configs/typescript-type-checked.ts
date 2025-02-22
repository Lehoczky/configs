import type { Linter } from "eslint"

import type { ParserOptions } from "../types/parserOptions.js"

export const typescriptTypeChecked = (
  parserOptions: ParserOptions,
): Linter.Config[] =>
  [
    {
      name: "lehoczky/typescript/type-checked-parser-options",
      ignores: ["**/*.astro", "**/*.?([cm])js"],
      languageOptions: { parserOptions },
    },
    {
      name: "lehoczky/typescript/type-checked",
      ignores: ["**/*.astro", "**/*.?([cm])js"],
      rules: {
        "@typescript-eslint/no-confusing-void-expression": [
          "warn",
          { ignoreArrowShorthand: true },
        ],
        "@typescript-eslint/no-deprecated": "warn",
        "@typescript-eslint/no-misused-promises": [
          "warn",
          { checksVoidReturn: false },
        ],
        "@typescript-eslint/non-nullable-type-assertion-style": "warn",
        "@typescript-eslint/prefer-return-this-type": "warn",
        "@typescript-eslint/prefer-string-starts-ends-with": "warn",
        "@typescript-eslint/prefer-optional-chain": "warn",
        "@typescript-eslint/promise-function-async": [
          "warn",
          { checkArrowFunctions: false },
        ],

        // Conflict with ESLint
        "no-throw-literal": "off",
        "@typescript-eslint/only-throw-error": [
          "warn",
          {
            allowThrowingUnknown: true,
          },
        ],
        "require-await": "off",
        "@typescript-eslint/require-await": "warn",
        "no-return-await": "off",
        "@typescript-eslint/return-await": ["warn", "always"],
        "prefer-promise-reject-errors": "off",
        "@typescript-eslint/prefer-promise-reject-errors": "warn",

        // Conflict with unicorn
        "unicorn/prefer-includes": "off",
        "@typescript-eslint/prefer-includes": "warn",
      },
    },
  ] as Linter.Config[]
