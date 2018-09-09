<template>
    <div>
         <div class="col-sm-3 col-md-2 sidebar">
                     <ul class="nav nav-sidebar">
                    <!-- <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Analytics</a></li>
                    <li><a href="#">Export</a></li> -->
                    <router-link to="/yingxiong" tag="li" exact-active-class="active">
                    <a>英雄管理</a></router-link>
                    <router-link to="/wuqi" tag="li" exact-active-class="active">
                    <a>武器管理</a></router-link>
                    <router-link to="/zhuangbei" tag="li" exact-active-class="active">
                    <a>装备管理</a></router-link>
                </ul>
            </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
