var webpack = require('webpack');
var jquery = require('jquery');

module.exports = {
  entry: {
    account_create: "./web/static/js/account_create.js",
    account_index: "./web/static/js/account_index.js",
    account_show: "./web/static/js/account_show.js",
  },
  output: {
    path: "./priv/static/js",
    filename: "[name].js"
  },
  resolve: {
    extensions: ['', '.js', 'css', 'ttf', 'woff', 'woff2', 'eot'],
  },
  module:{
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(ttf|otf|eot|woff(2)?|jpe?g|png|gif|svg)$/i,
        loader: "url-loader"
      },
      { 
        test: require.resolve("jquery"), 
        loader: "expose?$!expose?jQuery" 
      }
    ]
  }
}
