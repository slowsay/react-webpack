/**
 * @author slowsay
 */
'use strict';
define(function(require) {
     // 童装玩具 / 孕产 / 用品 ➤
//  家电 / 数码 / 手机 ➤
//  美妆 / 洗护 / 保健品 ➤
//  珠宝 / 眼镜 / 手表 ➤
//  运动 / 户外 / 乐器 ➤
//  游戏 / 动漫 / 影视 ➤
//  美食 / 生鲜 / 零食 ➤
//  鲜花 / 宠物 / 农资 ➤
//  房产 / 装修 / 建材 ➤
//  家具 / 家饰 / 家纺 ➤
//  汽车 / 二手车 / 用品 ➤
//  办公 / DIY / 五金电子 ➤
//  百货 / 收纳 / 家庭保健 ➤
//  学习 / 卡券 / 本地服务;
    var arr = [[{
        t : '女装',
        link : 'https://www.taobao.com/market/nvzhuang/index.php?spm=a21bo.50862.201867-main.2.HZIJf8'
    },{
        t : '男装',
        link : 'https://www.taobao.com/market/nvzhuang/index.php?spm=a21bo.50862.201867-main.2.HZIJf8'
    },{
        t : '内衣',
        link : 'https://www.taobao.com/market/nvzhuang/index.php?spm=a21bo.50862.201867-main.2.HZIJf8'
    }],[{
        t : '美妆',
        link : 'https://www.taobao.com/market/nvzhuang/index.php?spm=a21bo.50862.201867-main.2.HZIJf8'
    },{
        t : '洗护',
        link : 'https://www.taobao.com/market/nvzhuang/index.php?spm=a21bo.50862.201867-main.2.HZIJf8'
    },{
        t : '保健品',
        link : 'https://www.taobao.com/market/nvzhuang/index.php?spm=a21bo.50862.201867-main.2.HZIJf8'
    }],[{
        t : '家电',
        link : 'https://www.taobao.com/market/nvzhuang/index.php?spm=a21bo.50862.201867-main.2.HZIJf8'
    },{
        t : '数码',
        link : 'https://www.taobao.com/market/nvzhuang/index.php?spm=a21bo.50862.201867-main.2.HZIJf8'
    },{
        t : '手机',
        link : 'https://www.taobao.com/market/nvzhuang/index.php?spm=a21bo.50862.201867-main.2.HZIJf8'
    }]];
    var _nlist=[{t:'宝贝',link:''},{t:'天猫',link:''},{t:'店铺',link:''}];
    return function(id, React) {
        return React.createClass({
            propTypes:{
              children:React.PropTypes.element.isRequired  
            },
            /**
             * @description 初始化props变量
             */
            getDefaultProps : function() {
                return {
                    title : 'hello world',name:'搜索'
                };
            },
            /**
             * @description 初始化state变量
             */
            getInitialState:function(){
              return {
                  isclick:!1,
                  flag:!0,
                  text:'欢迎来搜索！',opacity:1.0
                  };
            },
             /**
             * @description 点击搜索
             */
            clickHandle : function(e) {
                this.refs.filltxt.focus();
                this.setState({
                    isclick : !this.state.isclick
                },function(e){
                    console.log('callback');
                });
            },
            /**
             * @description 
             */
            componentDidMount:function(){
                setTimeout(function(){
                   var _alpha=this.state.opacity;
                    _alpha-=.08;
                    if(_alpha<0.1)
                      _alpha=1.0;
                    this.setState({opacity:_alpha});
                    this.componentDidMount();
                }.bind(this),100);
            },
            tick:function(){
                
            },
            /**
             * @description 单向绑定数据改变
             */
            changeHandle:function(e){
                this.setState({text:e.target.value});
            },
            render : function() {
                return <div className='home'>
	                <div className='banner'><img src='https://img.alicdn.com/tps/TB1to3vJFXXXXXMaXXXXXXXXXXX-1190-45.jpg' /></div>
	                <div className='Menus'>
	                	<div className='bannerL'></div>
	                	<ul className='menulist'>{
		                	arr.map(function(e,k){
		                		 return <li key={k}><i></i>{
		                			 e.map(function(e,i){
			                				return i>0&&i%2==0?<a key={i} href={e.link}>{e.t}</a>:<span key={i}><a href={e.link}>{e.t}</a></span>;
			                			 })
		                		 }</li>
		                	})
	                	}
	                	</ul>
	                </div>
	                <div className='searchbox'>
		                <ul className='searchnav'>
		                { _nlist.map(function(e,i){
		                	
		                	return i==0?<li key={i} className='s'>{e.t}</li>:<li key={i}>{e.t}</li>;
		                })
		                }
		                </ul>
		               
		                <div className='search'>
			                <input type='text' id='searchinput' name='searchinput' value={this.state.text} onChange={this.changeHandle} />
			                <input type='button' id='searchbtn' value={this.props.name} onClick={this.clickHandle}  />
		                <div className='outText'>{this.state.text}</div>
		                <p>{this.state.opacity}</p>
		                </div>
		                
	
		                <div className='brandrect'>
		                {
		                	React.Children.map(this.props.children,function(e,i){
		                		return <p>获取子标签放入p标签内{e}</p>;
		                	})
		                }</div>
		            </div>
                </div>
            }
        });
    };

});
