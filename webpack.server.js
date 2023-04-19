const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // build a bundle for nodeJS rather than for the browser
  target: 'node',
  // Tell webpack the root file of server application
  entry: './src/server/index.js',
  // Tell webpack where to put output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  // node_modules folder will not be included in the server side bundle
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);