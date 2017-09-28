const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /.jsx?$/, use: 'babel-loader'}
    ]
  },
  resolve: {
    modules: ['node_modules']
  }
}