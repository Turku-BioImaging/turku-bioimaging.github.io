const path = require("path")
const { VueLoaderPlugin } = require("vue-loader")
const webpack = require("webpack")

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            scss: ["vue-style-loader", "css-loader", "sass-loader"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "vue-style-loader","css-loader","sass-loader",
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
    extensions: ["*", ".js", ".vue", ".json"],
  },
}

if (process.env.NODE_ENV === "production") {
  module.exports.mode = "production"
}
