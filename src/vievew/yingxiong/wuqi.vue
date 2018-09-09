<template>
    <div>
                <h2 class="sub-header">英雄管理</h2>
                <!-- <a class="btn btn-success" href="/yingxiong/add" @click="add">添加</a> -->
                <router-link class="btn btn-success" to="/yingxiong/add">添加</router-link>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>序号</th>
                                <th>姓名</th>
                                <th>性别</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- item是每一项 index是下标 -->
                            <tr
                            v-for="(item,index) in list"
                            :key="item.id">
                                <td>{{index+1}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.gender}}</td>
                                <td>
                                    <!-- <a href="/yingxiong/bianji">编辑</a> &nbsp;&nbsp; -->
                                    <router-link :to="'/yingxiong/bianji/'+ item.id">编辑</router-link>
                                    <a href="javascript:;" @click="deleted(item.id)">删除</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
        list : []
        }
    },
    mounted(){
        this.loadData()
    },
    methods: {
    //查询数据
    loadData(){
        this.a.get('heroes')
        .then((result) => {
            // console.log(result);
            if(result.status===200){
            this.list=result.data
            }  
        })
    },
    // 添加数据
    deleted(id){
    confirm('你确定要删除吗？',{
        
    })
    this.a.delete(`heroes/${id}`)
    .then((result) => {
        if(result.status===200){
            alert('删除成功')
            this.loadData()
        }
    })   
    }

    }
}
</script>

<style>

</style>
