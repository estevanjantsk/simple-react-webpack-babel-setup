/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new Dotenv({
      ignoreStub: true,
      path: path.resolve(__dirname, '..', './.env.development'),
    }),
  ],
  devtool: 'eval-source-map',
};
