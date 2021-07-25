const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const devServer = {
  port : 4001,
  open : 'Google Chrome',
  disableHostCheck : true,
  historyApiFallback : true,
  hot: true,
  overlay : true,
  stats : 'minimal',
  inline : true,
  compress : true
};

const config = {
    entry: {
      bundle: './src/index.js'
    },
    mode: 'development',
    output: {
        filename: '[name].[hash].js',
        path : path.resolve(__dirname, '../public')
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {}
                  },
                  "css-loader"
                ]
            },
            {
              use: "file-loader",
              test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        }),
        new webpack.ProvidePlugin({
          '$' : 'jquery',
          'jQuery' : 'jquery',
          'window.$' : 'jquery',
          'window.jQuery' : 'jquery'
        }),
        new HtmlWebpackPlugin({
          template : 'src/index.html',
          favicon: 'src/assets/favicon.png'
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new BundleAnalyzerPlugin()
    ],
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    devServer
}
module.exports = config;