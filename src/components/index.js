import RadioTree from "./RadioTree";

// 注册组件
RadioTree.install = Vue => Vue.component(RadioTree.name, RadioTree);

// 标签的方式引入，支持标签的引入方式
const install = function(Vue, opts = {}) {
　　Vue.component(RadioTree.name, RadioTree);
}
/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
if (typeof window !== 'undefined' && window.Vue) {
 install(window.Vue);
}
export default RadioTree;
