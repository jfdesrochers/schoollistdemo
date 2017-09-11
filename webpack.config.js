const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'js'),
        publicPath: '/js/',
        filename: 'app.min.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env']
              }
            }
          }
        ]
      },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        })
    ]
}