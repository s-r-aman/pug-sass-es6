const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => {
  return {
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'dist/bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.(sass|css)/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /\.pug/,
          use: [
            'file-loader?name=[name].html',
            'extract-loader',
            'html-loader',
            'pug-html-loader'
          ]
        },
        {
          test: /\.(png|jpg|jpeg)/,
          use: ['file-loader?name=assets/[name].[ext]']
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'dist/app.css',
        chunkFilename: 'id.css'
      })
    ],

    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      port: 6000
    }
  }
}
