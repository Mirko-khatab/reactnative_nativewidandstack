module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: ["nativewind/babel"],
    //add fonts to the project
  }
}
