const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
  },
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              loader: 'babel-loader',
              exclude: /node_modules/
          },
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: __dirname + '/public/index.html',
          filename: 'index.html',
          inject: 'body'
      })
  ]
}
