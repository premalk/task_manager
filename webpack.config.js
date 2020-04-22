const htmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new htmlWebPackPlugin(
      {
        template: './src/index.html',
        filename: './index.html',
      }
    )
  ]
};