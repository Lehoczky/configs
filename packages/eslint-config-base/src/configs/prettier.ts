import type { Linter } from "eslint"
import eslintConfigPrettier from "eslint-config-prettier"

export const prettier: Linter.Config = {
  name: "lehoczky/prettier",
  ...eslintConfigPrettier,
}
