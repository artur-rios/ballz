// ESLint's configuration (`npm run lint`): the recommended JavaScript rules over the game's own scripts. public/main.js
// is a classic browser script (index.html loads it with a plain script tag) that uses the Phaser global of
// public/phaser.min.js, which is a vendored, minified library and is not linted, nor is the build's output.
import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["dist/", "public/phaser.min.js"] },
  js.configs.recommended,
  {
    files: ["public/**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: { ...globals.browser, Phaser: "readonly" },
    },
  },
];
