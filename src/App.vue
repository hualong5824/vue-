<template>
<div id="app">
  <!-- 头部 -->
  <Header></Header>
    <div class="container-fluid">
        <div class="row">
            <!-- 导航 -->
            <leftNav></leftNav>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <!-- 主内容区 -->
        <router-view></router-view>
      </div>
        </div>
    </div>
</div>
</template>

<script>
// 头部与导航
import Header from './comonents/header.vue'
import leftNav from './comonents/leftnav.vue'
//引入路由对象
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Header,
    leftNav
  }
}
</script>

<style>

</style>
