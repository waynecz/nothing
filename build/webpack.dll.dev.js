/**
 * Dll 库打包
 */
const webpack = require('webpack');
const conf = require('./config');

let vendors = conf.devDllPackage;

DllPackConfig = {
  entry: {
    "lib": vendors
  },
  output: {
    path: conf.DLLPath,
    filename: '[name].js',
    library: '[name]',
  },
  resolve: {
    alias:{
      'ivew': 'ivew'
    }
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]',
      context: __dirname
    })
  ]
};


module.exports = DllPackConfig;