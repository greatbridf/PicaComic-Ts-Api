const path = require('path')

const config = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src/main.ts')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        loader: 'ts-loader'
      }
    ],
  },
  resolve: {
    alias: {
      src: path.join(__dirname, 'src')
    },
    extensions: ['.ts', '.js']
  },
  target: 'node'
}

module.exports = config