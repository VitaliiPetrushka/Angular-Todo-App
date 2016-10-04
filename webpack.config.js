var path = require("path");

module.exports = {
   entry: path.join(__dirname, "app/index.js"),
   output: {
      path: path.join(__dirname, "app"),
      publicPath: "/app/",
      filename: "bundle.js"
   },
   module: {
      loaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
         },
         {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: ["style", "css", "sass"]
         },
         {
            test: /\.json$/,
            exclude: /node_modules/,
            loader: "json-loader"
         }
      ]
   },
   devtool: "eval"
};