var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/main.ts',
  output: {
    path: './dist',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.css$/, loader: 'raw'},
       {test: /\.scss$/, exclude:/node_modules/, loader:'raw-loader!sass-loader'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.html', '.css']
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
      }),
      new webpack.DefinePlugin({
          app: {
              environment: JSON.stringify(process.env.APP_ENVIRONMENT)
          }
      })
  ]
  
};