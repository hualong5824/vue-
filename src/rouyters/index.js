//导入rouer路由
import VueRouetr from 'vue-router'
import Vue from 'vue'
//导入导航(路由)组件
import yingxong from '../vievew/yingxiong/wuqi.vue'
import zhuangbei from '../vievew/zhuangbei/wuqi.vue'
import wuqi from '../vievew/wuqi/wuqi.vue'
import add from '../vievew/yingxiong/add.vue'
import bianji from '../vievew/yingxiong/bianji.vue'
Vue.use(VueRouetr)
//创建路由对象

const router =new VueRouetr({
//配置路由规则
linkActiveClass:'active',
routes:[
      {path:'/',redirect:'/yingxiong'},
      {path:'/yingxiong',component:yingxong},
      {path:'/wuqi',component:zhuangbei},
      {path:'/zhuangbei',component:wuqi},
      {path:'/yingxiong/add',component:add},
      {path:'/yingxiong/bianji/:id',component:bianji, props:true}
]
})
export default router