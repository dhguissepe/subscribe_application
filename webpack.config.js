const path = require('path')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'index.tsx')
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin(),
      new OptimizeCssAssetsPlugin()
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: [
          {loader: 'babel-loader'},
          {loader: 'ts-loader'}
        ],
        exclude: /node-modules/
      },
      {
        test: /\.styl$/,
        use: [
          {loader: MiniCSSExtractPlugin.loader},
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
    new MiniCSSExtractPlugin({
      filename: 'css/[name].[hash].css'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/app.**']
    })
  ]
}