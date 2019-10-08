var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
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
			test: /\.css$/,
			use: [
				{loader: "style-loader"},
				{	loader: "css-loader"},
				// {loader: "sass-loader"}
			]
		},
	// 	{
	// 		test: /\.scss$/,
	// 		loader: 'typed-css-modules-loader'
	// },
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
		})
  ]
};