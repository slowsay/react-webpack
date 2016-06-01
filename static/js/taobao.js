/**
 * @author slowsay
 */
'use strict';
var _body = document.getElementById('webpage');
/**
 * @description react库
 */
var React = require('react');
var ReactDOM = require('react-dom');
var Reactone = require('react-addons');
/**
 * @description 其他页面标签载入
 */
var Header = require('jsx!./app/header')(_body, React);
 var Home = require('jsx!./app/home')(_body, React);
 var Jeans = require('jsx!./app/jeans')(_body, React);
 var $=require('jquery');
// 数组
var arr = ['jack'];


/**
 * @description 异步加载
 */
require.ensure(['./app/about.js'],function(e){
	/**
	 * @description 图片载入
	 */
	var _logo=document.getElementsByClassName('banner');
	var img=document.createElement('img');
	img.src=require('url!./../images/logo.jpg');
	img.width=50,img.height=50;
	_body.appendChild(img);
});
/**
 * @description 自适应布局
 */

// <div className='l'></div>
// <div className='r'></div>
// <div className='c'></div>
/**
 * @description 关于Mixin方法，封装onchange及当前表单值,双向绑定技术
 */
var WithLink = React.createClass({
	mixins:[Reactone.LinkedStateMixin],
    getInitialState: function() {
      return {msg: 'Hello!'};
    },
    render: function() {
      return <div>{this.state.msg}<p>输入改变上面内容：<input type="text" valueLink={this.linkState('msg')} /></p></div>;
    }
  });
/**
 * @description main主输出标签
 */
var Treenode = React.createClass({
  render: function() {
    return <div>
               <Header />
				 <Home />
				 <Jeans />
               <WithLink />
          </div>;
  }
});
/**
 * @descripton 实时渲染页面
 * 
 */
ReactDOM.render(<Treenode url='https://api.github.com/search/repositories?q=javascript&sort=stars' />,_body);  