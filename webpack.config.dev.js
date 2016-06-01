/**
 * @author slowsay
 */
'use strict';
var path = require('path');
var webpack = require('webpack');
// html模块
var htmltpl = require('html-webpack-plugin');
// 独立css
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// 公共部分代码
var commonjs = new webpack.optimize.CommonsChunkPlugin('o', '[name].min.js');
// 压缩,排除一些关键字，防止混淆
var uglify = new webpack.optimize.UglifyJsPlugin();

var srcdir = process.cwd();

// module开始
module.exports = {
	// 生成副本
	// devtool : 'source-map',
	context : path.join(__dirname, '/static'),
	loaders : [ {
		test : /\.css$/,
		loader : 'style-loader!css-loader'
	}, {
		test : /\.js$/,
		loader : 'react-hot-loader!jsx-loader?harmony'
	}, {
		test : /(\.scss)$/,
		loader : "style-loader!css-loader"
	}, {
		test : /\.(png|jpg)$/,
		loader : 'url-loader?limit=8192'
	} ],
	plugins : [ new htmltpl({
		name : 'test',
		template : './tpl/index.html',
		inject : true,
		minify : {
			removeComments : true,
			collapseWhitespace : true
		}
	}), commonjs ],
	entry : {
		index : 'jsx!./js/tmall'
	},
	output : {
		path : path.join(__dirname, 'dist'),
		filename : '[name].min.js',
		chunkFilename : '[id].chunk.js'
	},
	resolve : {
		extensions : [ '', '.js', '.jsx', '.png', '.jpg', '.css', '.scss' ],
		alias : {}
	},
	watch : true
};