/**
 * @author slowsay
 */
'use strict';
var _body = document.getElementById('webpage');
var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('jsx!./app/header')(_body, React);
var Home = require('jsx!./app/home')(_body, React);
var Jeans = require('jsx!./app/jeans')(_body, React);
var $=require('jquery');
/**
 * @description 载入css
 */
require('style!css!./../css/main.css');
/**
 * @description 异步加载
 */
require.ensure(['./app/about.js'],function(e){
	console.log(e);
});
var Treemap=React.createClass({
	getInitialState: function() {
		return {msg:'ok',data:[],loading:!1};
	},
	componentDidMount:function(){
		$.getJSON(this.props.url,function(e){
			if(this.isMounted()){
				this.setState({loading:!0,data:e.items})
			}
				
		}.bind(this));
	},
	update:function(){
		
	},
	render:function(){
		return <div>
			<Header />
			<Home />
			<Jeans />
			<p>加载进度:{this.state.loading}</p>
			{
				this.state.data.map(function(e,i){
					return <div key={i}>{e.name}</div>;
				})	
			}
		</div>;
	}
});
ReactDOM.render(<Treemap url='https://api.github.com/search/repositories?q=javascript&sort=stars' />,_body);