var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry:'./main.jsx',
	output:{ path: __dirname.concat('/build'), filename: 'bundle.js' },
	module:{
		rules:[
			{
				test:/.jsx?$/,
				loader:'babel-loader',
				exclude:/node_modules/,
				query:{
					presets:['@babel/react']
				}
			},
			{
				test:/.js?$/,
				loader:'babel-loader',
				exclude:/node_modules/,
				query:{
					presets:['@babel/env']
				}
			},
			
		]
	}
}