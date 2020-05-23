module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    `eslint:recommended`,
    `plugin:import/recommended`,
    `plugin:react/recommended`,
    `plugin:react-hooks/recommended`,
  ],
  parser: `babel-eslint`,
  plugins: [`prettier`, `react`],
  rules: {
    "prettier/prettier": `error`,
    quotes: [`error`, `backtick`],
    "react/jsx-sort-props": [`error`],
  },
  settings: {
    react: {
      version: `detect`,
    },
  },
};
