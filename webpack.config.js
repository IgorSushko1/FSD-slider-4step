var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// declare var require: any;

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		},
		{
			test: /\.scss$/,
			use: [
				{	loader: MiniCssExtractPlugin.loader},
				{	loader: "css-loader"},
				{loader: "sass-loader"}
			]
		}
	],
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js'],
	},
	plugins: [
    new HtmlWebpackPlugin({
			title: 'My App',
			template: 'src/index.html',
      filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ]
};