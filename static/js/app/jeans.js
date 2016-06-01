/**
 * @author slowsay
 */
'use strict';
define(function(require) {
     var arr=['pick','slowsay'];
    return function(id, React) {
        return React.createClass({
	        /**
			 * @description 添加当前props子属性
			 */
	        getDefaultProps : function() {
	                return {
	                    title : 'hello world',
	                    name:'搜索'
	                };
	        },
	        /**
			 * @description 获取当前变量值
			 */
	        getInitialState : function() {
	            return {
	                isclick : !0,
	                ppa:'ok',
	                flag:!1
	            };
	        },
	        /**
			 * @description 渲染标签
			 * @method React.Children.map
			 * @param {number,function}
			 *            len function
			 */
	        render : function() {
	        	return <div className='jeans'></div>
	        }
        });
    };

}); 