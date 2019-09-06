var path = require('path');
module.exports = {
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/main.js')],
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    rules: [{
      loaders: 'babel-loader'
    }]
  },
  devtool: 'source-map'
};
