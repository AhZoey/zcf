<template>
  <div class="hello">
      <el-header style="width: 219rem; height: 12rem;background-color:red;">
      {{msg}}
      <img src="static/logo.png"/>
      </el-header>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: '首页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
