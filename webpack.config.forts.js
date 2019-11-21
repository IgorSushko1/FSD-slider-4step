const path = require('path');

module.exports = {
	mode: 'development',
  entry: './src/is_slider/is_slider.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'index.js',
    path: '/Projects/FSD-slider-4step/src/is_slider/js/',
  },
};