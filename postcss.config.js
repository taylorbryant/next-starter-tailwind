/* eslint-env node */
module.exports = {
  plugins: {
    tailwindcss: {},
    ...(process.env.NODE_ENV === `production`
      ? {
          "@fullhuman/postcss-purgecss": {
            content: [`./src/**/*.js`],
            defaultExtractor: content =>
              content.match(/[A-Za-z0-9-_:/]+/g) || []
          },
          autoprefixer: {}
        }
      : {})
  }
};
