module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    `eslint:recommended`,
    `plugin:import/recommended`,
    `plugin:jsx-a11y/recommended`,
    `plugin:react/recommended`,
    `plugin:react-hooks/recommended`,
  ],
  parser: `babel-eslint`,
  plugins: [`prettier`, `jsx-a11y`, `react`],
  rules: {
    "jsx-a11y/anchor-is-valid": [`OFF`],
    "jsx-a11y/click-events-have-key-events": [`OFF`],
    "jsx-a11y/no-noninteractive-element-interactions": [`OFF`],
    "linebreak-style": [`error`, `unix`],
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
