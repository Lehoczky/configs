import config from "@lehoczky/prettier-config"

/**
 * @type {import("prettier").Options}
 */
export default {
  ...config,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
