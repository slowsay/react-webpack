/**
 * @author slowsay
 */
'use strict';
define(function(require) {
	return function(id, React) {
		return React.createClass({
			getDefaultProps : function() {
				return {
					title : '亲，请登录',
					link : 'https://www.taobao.com/m?spm=a21bo.50862.1997563273.1.HZIJf8',
					data:[
					                                                				  			{
					                                                								t : '我的淘宝',
					                                                								link : 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
					                                                							},
					                                                							{
					                                                								t : '购物车',
					                                                								link : 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
					                                                							},
					                                                							{
					                                                								t : '收藏夹',
					                                                								link : 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
					                                                							},
					                                                							{
					                                                								t : '商品分类',
					                                                								link : 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
					                                                							},
					                                                							{
					                                                								t : '卖家中心',
					                                                								link : 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
					                                                							},
					                                                							{
					                                                								t : '联系客服',
					                                                								link : 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
					                                                							},
					                                                							{
					                                                								t : '网站导航',
					                                                								link : 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
					                                                							} ],
				};
			},
			getInitialState:function(){
				return {title:''};
			},
			render : function() {
				return <div className='header'>
						<div className='l'></div>
						<div className='r'></div>
						<div className='c'>
							<ul className='header_l'>
								<li><b>{this.props.title}</b><a>免费注册</a></li>
								<li><a href={this.props.link}>手机逛淘宝</a></li>
							</ul>
							<ul className='header_r'>
							{
								this.props.data.map(function(e,i){
									return <li key={i}><a href={e.link}>{e.t}</a></li>;
								})
							}
							</ul>
						</div>
				</div>
			}
		});
	};

});
