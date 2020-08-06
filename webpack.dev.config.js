const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'index.tsx')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:9000/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    port: 9000,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: 'ts-loader',
        exclude: /node-modules/
      },
      {
        test: /\.styl$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'resolve-url-loader'},
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: true,
              sourceMapContents: false
            }
          }
        ]
      },
      {
        test: /\.jpg|jpeg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            outputPath: 'assets/',
            name: '[hash].[ext]'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.jsx' ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      favicon: path.resolve(__dirname, 'public', 'favicon.ico')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}