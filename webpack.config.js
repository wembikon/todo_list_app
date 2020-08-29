const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  // here we define the loaders that we want to execute
  module: {
    rules: [
      // this will transpile js and jsx codes to es6 syntax using babel webpack loader
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ["@babel/env"] }
      },
      // enables us to import css in our js file and make use of it
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  // a server to host our app
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 4001,
    publicPath: 'http://localhost:4001/dist/',
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};