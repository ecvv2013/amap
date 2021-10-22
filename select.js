<script src='https://cdn.jsdelivr.net/npm/vue/dist/vue.js'></script>
<link rel='stylesheet' href='https://unpkg.com/element-ui/lib/theme-chalk/index.css'>
<script src='https://unpkg.com/element-ui/lib/index.js'></script>
<div id='a[[This.x]][[This.y]][[This.width]]' style='position:absolute; top:[[This.y]]px; left:[[This.x]]px'>
<template>
  <el-select v-model='value' placeholder='请选择' style='width:[[This.width]]'>
    <el-option
      v-for='item in options'
      :key='item.value'
      :label='item.label'
      :value='item.value'
      :disabled='item.disabled'>
    </el-option>
  </el-select>
</template>
</div>

<script>
var Main = {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕',
          disabled: false
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
var Ctor = Vue.extend(Main)
new Ctor().$mount('#a[[This.x]][[This.y]][[This.width]]')
</script>
