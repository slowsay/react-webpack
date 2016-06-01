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
// 压缩
var uglify = new webpack.optimize.UglifyJsPlugin();

var srcdir = process.cwd();
// module开始
module.exports = {
	// 生成副本
	// devtool : 'source-map',
	context : __dirname + '/static',
	loaders : [ {
		test : /\.css$/,
		loader : ExtractTextPlugin.extract('style-loader', 'css-loader')
	}, {
		test : /\.js$/,
		loader : 'jsx-loader'
	}, {
		test : /\.(png|jpg)$/,
		loader : 'url-loader?limit=10000'
	} ],
	plugins : [ new htmltpl({
		title : '淘宝网',
		template : './tpl/index.html',
		minify : {
			removeComments : true,
			collapseWhitespace : true
		}
	}),uglify, commonjs, new ExtractTextPlugin('[name].css') ],
	entry : {
		index : [ 'jsx!./js/taobao', 'style!css!./css/main' ],
		vendors : [ 'react', 'react-dom', 'react-addons' ]
	},
	output : {
		path : path.join(__dirname, 'dist'),
		filename : '[name].min.js',
		chunkFilename : '[id].min.js'
	// publicPath : '/dist/'//用于cdn，外网使用
	},
	resolve : {
		root : [ process.cwd() + '/', process.cwd() + '/node_modules' ],
		extensions : [ '', '.js', '.jsx', '.json', '.css', '.png', '.jpg', ],
		alias : {}
	},
	watch : true
};