/** @type {import("eslint").Linter.Config} */
module.exports = {
  rules: {
    "@typescript-eslint/no-confusing-void-expression": [
      "warn",
      { ignoreArrowShorthand: true },
    ],
    "@typescript-eslint/no-for-in-array": "warn",
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
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "warn",
    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": [
      "warn",
      {
        allowThrowingUnknown: true,
      },
    ],
    "require-await": "off",
    "@typescript-eslint/require-await": "warn",
    "no-return-await": "off",
    "@typescript-eslint/return-await": ["warn", "always"],
    camelcase: "off",
    "@typescript-eslint/naming-convention": [
      // Ignore properties that require quotes
      "warn",
      {
        selector: "property",
        format: ["camelCase"],
        filter: {
          // you can expand this regex as you find more cases that require quoting that you want to allow
          regex: "^[{A-Z} | {0-9}]|[- ]",
          match: false,
        },
      },
    ],

    // Conflict with unicorn
    "unicorn/prefer-includes": "off",
    "@typescript-eslint/prefer-includes": "warn",
  },
}
