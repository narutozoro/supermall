import Vue from 'vue';
import VueRouter from 'vue-router';

// 通过全局方法 Vue.use() 使用插件。它需要在你调用 new Vue() 启动应用之前完成：
Vue.use(VueRouter);

// 导入组件
import Home from '../views/Home.vue';
const Friends = ()=> import('../views/Friends.vue');

// 导出路由
export default new VueRouter({
    routes:[
        {path: '/', component:Home },
        {path: '/friends', component:Friends },
        {path: '/setting', component:()=> import('../views/Setting.vue') },
    ]
});



// let router = new VueRouter({
//     routes:[
//         // {path: '/', component: }
//     ]
// });

// export default router;