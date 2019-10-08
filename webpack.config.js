var path = require('path');
// declare var require: any;

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: 'src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.tsx?$/,
			use: 'ts-loader',
			// exclude: /node_modules/,
		}, ],
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js'],
	},
};