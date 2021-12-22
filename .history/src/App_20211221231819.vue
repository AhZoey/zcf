<template>
  <div id="app">
    <div class="hello">
      <el-header
        style="
          width: 100%;
          height: 1rem;
          line-height: 100%;
        "
      >
        <img
          src="static/logo.png"
          style="
            vertical-align: middle;
            width: auto;
            height: 1rem; 
            left: 3rem;
            line-height: 100%;
            position: fixed;
          "
        />
        <el-menu
          :default-active="1"
          style="position: fixed;  left: 7rem"
          class="el-menu-demo"
          mode="horizontal"
          :router="true"
        >
          <el-menu-item index="home">首页</el-menu-item>
          <el-menu-item index="monitoringData">监测数据</el-menu-item>
          <el-menu-item index="3">推送信息</el-menu-item>
          <el-menu-item index="4">分析洞察</el-menu-item>
          <el-menu-item index="5">智能报告</el-menu-item>
        </el-menu>
      </el-header>
      <el-body>
        <section>
          <router-view></router-view>
        </section>
      </el-body>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.el-menu--horizontal > .el-menu-item {
  line-height: 1rem;
  height: 1rem;
  padding: 0 0.5rem !important;
}
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  min-width: 1280px;
  font-size: 0.16rem;
  /*min-height: 600px;*/
}
@font-face {
  font-family: "iconfont";
  /* src: url("../static/icon/iconfont.eot");
  src: url("../static/icon/iconfont.eot?#iefix") format("embedded-opentype"),
    url("../static/icon/iconfont.woff2") format("woff2"),
    url("../static/icon/iconfont.woff") format("woff"),
    url("../static/icon/iconfont.ttf") format("truetype"),
    url("../static/icon/iconfont.svg#iconfont") format("svg"); */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.onLine {
  position: absolute;
  top: 0.25rem;
  right: 5rem;
  color: red;
}
</style>
