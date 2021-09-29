/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new Dotenv({
      ignoreStub: true,
      path: path.resolve(__dirname, '..', './.env.production'),
    }),
  ],
  devtool: 'source-map',
};
