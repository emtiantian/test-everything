<template>
  <div>
    el-input输入框不能输入值 可能原因之一是在修改时给整个form对象重新赋值但是没有对应字段
    使用$set赋值对象属性，使vue可以监听到值变化
    <el-form :model="formData">
      <el-form-item label="名称">
        <el-input v-model="formData.name" placeholder="名称"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      formData:{
        name:"123"
      }
    }
  },
  mounted(){
    this.change()
  },
  methods: {
    change(){
      this.formData = {}
      // this.formData.name = [{name:1}][0].name
      this.$set(this.formData,"name",[{name:1}][0].name)
    }
  }
}
</script>

<style>

</style>