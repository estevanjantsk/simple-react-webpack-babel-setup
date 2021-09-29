/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/extensions */
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

module.exports = ({ env }) => {
  const envConfig = require(`./webpack.${env}.js`);

  return merge(commonConfig, envConfig);
};
