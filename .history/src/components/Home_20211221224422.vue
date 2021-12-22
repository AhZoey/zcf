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

 <div class="mre">
    <div class="menu">
      <el-menu default-active="0">
        <template v-for="(menu,k) in menuList">
          <el-menu-item
            :index="menu.path"
            :key="k"
            v-if="menu.children==null||menu.children.length==0"
            @click="goRouter(menu.path)"
          >
            {{menu.name}}
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <section>
      <router-view></router-view>
    </section>
  </div>
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
<style rel="stylesheet/scss" lang="scss" scoped>
.mre {
  width: 100%;
  height: 100%;
  background: rgb(241, 241, 241);
  border-radius: 4px;
  .menu {
    float: left;
    width: 1.8rem;
    height: 100%;
    background: #fff;
    overflow: auto;
  }
  section {
    float: right;
    width: calc(100% - 1.9rem);
    height: 100%;
    margin-left: 0.1rem;
    background: #fff;
    border-radius: 4px;
  }
}
</style>
