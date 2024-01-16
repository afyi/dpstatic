const path = require('path');
module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'upper.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'upper',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
};