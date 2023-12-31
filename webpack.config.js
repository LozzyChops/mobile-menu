const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
  mode: 'development',
  output: {
    clean: true,
  },
  devServer: {
    static: './dist',
    open: true,
  },
}
