// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  devtool: 'eval-source-map',
};
