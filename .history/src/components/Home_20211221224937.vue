<template>
  <div class="hello">
      <el-header style="width: 219rem; height: 5rem;background-color:red;line-height:100%">
     
      <img src="static/logo.png" style="
    vertical-align: middle;
    width: auto;
    height: 4rem;
    margin-top: 0.5rem;
    margin-left: 7rem;
    line-height:  100%;
    /* background-color: white; */
"/>
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
