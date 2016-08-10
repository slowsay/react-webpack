# react-webpack

> 用react/webpack基本功能构建淘宝首页
> 根据webpack的打包功能，对react所写的脚本进行打包，并且编译。
> 再次引用淘宝首页，进行测试

## Example

```
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
		template : './tpl/index.html'
	}), commonjs, new ExtractTextPlugin('[name].css') ],
	entry : {
		index : [ 'jsx!./js/taobao', 'style!css!./css/main' ]
	},
	output : {
		path : path.join(__dirname, 'dist'),
		filename : '[name].min.js',
		chunkFilename : '[id].min.js'
	// publicPath : '/dist/'//用于cdn，外网使用
	},
	resolve : {
	  //文件索引目录
		root : [ process.cwd() + '/', process.cwd() + '/node_modules' ],
		//省去后缀文件名
		extensions : [ '', '.js', '.jsx', '.json', '.css', '.png', '.jpg', ],
		alias : {}
	},
	//实时查看
	watch : true
};
```

## Install

```
step 1
npm install init

step 2
npm install webpack --save-dev

step 3 下载一系列插件
npm install style-loader css-loader

step 4
webpack/npm start
```

## Features

- 登录,菜单布局
- 搜索布局
- 联动表单,可以为未来表单监测作前提
- add es6 version
