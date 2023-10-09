// @ts-nocheck
module.exports = {
  plugins: [
    // require("postcss-import"),
    // require("postcss-url"),
    // require("postcss-combine-media-query"),
    // require("postcss-combine-duplicated-selectors")({
    //   removeDuplicatedProperties: true,
    //   removeDuplicatedValues: false,
    // }),
    require("autoprefixer"),
    require("cssnano")(),
    require("postcss-reporter"),
  ],
};
