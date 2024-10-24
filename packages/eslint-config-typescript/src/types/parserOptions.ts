import type { ConfigWithExtends } from "typescript-eslint"

export type ParserOptions = NonNullable<
  ConfigWithExtends["languageOptions"]
>["parserOptions"]
