module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true
  },
  extends: [
    "plugin:react/recommended",
    "standard",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
