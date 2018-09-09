<template>
    <div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">姓名</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="name" v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">年龄</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="age" v-model="formData.gender">
          </div>
          <button type="button" class="btn btn-success" @click="tijiao">提交</button>
        </form>
    </div>
</template>
<script>
//拿到表单中得数据。
// 发送请求

import axios from 'axios'
export default {

data(){
    return{
      formData:{
            name:'',
            gender:''
      }
    }
},
methods:{
    tijiao(){
        this.a('heroes',this.formData)
        .then((result) => {
        if(result.status===201){
            alert('添加成功')
            this.$router.push('/yingxong')
        }
        })

        
    }
}
}
</script>

<style>

</style>
