var path = require('path');
module.exports = {
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/main.js')],
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
  },
  devtool: 'source-map'
};
