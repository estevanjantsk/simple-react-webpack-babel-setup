/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  plugins: [
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
