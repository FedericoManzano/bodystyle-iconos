const path = require('path');

module.exports = {
  entry: './src/iconos.js',
   
  output: {
    path: path.join(__dirname, 'iconos'),
    filename: 'iconos.bunble.js'
  },
  module: {
    rules: [
      { test: /\.scss$/, loader: 'style-loader!sass-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath:  'fonts'
            }
          }
        ]
      }
    ]
  },

  mode: "development"
};