var webpack = require('webpack');
var path = require('path');

module.exports = {
   context: path.join(__dirname, "/app"),
   entry: path.join(__dirname, "/app/index.js"),
   output: {
      path: path.join(__dirname, "/app"),
      publicPath: path.join(__dirname, "/app/"),
      filename: "bundle.js"
   },
   plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
   ],
   devServer: {
      headers: {
         "Access-Controll-Allow-Origin": "*",
         "Access-Controll-Allow-Credentials": "true"
      }
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
   }
};