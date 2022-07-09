module.exports = {
  plugins: [
    "tailwindcss/nesting",
    "tailwindcss",
    "autoprefixer",
    "postcss-flexbugs-fixes",
    "postcss-100vh-fix",
    "postcss-hover-media-feature",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
  ],
};
