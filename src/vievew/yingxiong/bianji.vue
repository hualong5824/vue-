<template>

        <div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">姓名</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model="formData.name">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">年龄</label>
            <input type="text" class="form-control" id="exampleInputPassword1" v-model="formData.gender">
          </div>
          <button type="button" class="btn btn-success" @click="tijiao">提交</button>
        </form>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    props:['id'],
    data () {
        return {
            formData:{
                name:'',
                gender:''
            }
        }
    },
    mounted(){
        this.loaData()
    },
    methods:{
        loaData(){
            this.a.get(`heroes/${this.id}`)
            .then((result) => {
            if(result.status===200){
                this.formData=result.data
            }
            })
        },
         tijiao(){
        this.a(`heroes/${this.id}`,this.formData)
        .then((result) => {
        if(result.status===200){
            alert('添加成功')
            this.$router.push('/yingxiong')
        }
        })

        
    }
    }
}
</script>

<style>

</style>
