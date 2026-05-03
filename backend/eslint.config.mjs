export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        // Node globals
        __dirname: "readonly",
        __filename: "readonly",
        module: "readonly",
        require: "readonly",

        // Jest globals
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeAll: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
    },
  },
  {
    ignores: ["node_modules", "migrations", "moels", "seeds"],
  },
];
