const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

const devMode = process.env.NODE_ENV !== 'production';
const PORT = 3000

const config = {
  entry: './src/js/app.js',
  output: {
    filename: devMode ? 'app.js' : 'app.[hash].js',
    path: path.resolve(__dirname, 'dist/')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { modules: { localIdentName: '[name]__[local]--[hash:base64:8]' } }
          },
          { loader: 'sass-loader' },
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    port: PORT
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    })
  ]
}

module.exports = config
