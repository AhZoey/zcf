<template>
  <div id="app">
    <div class="hello">
      <el-header
        style="
         height: 1.01rem;width: 100%;line-height: 100%;
        "
      >
        <img
          src="static/logo.png"
          style="
           vertical-align: middle;width: auto;height: 1rem;left: 3rem;top: -.5rem;line-height: 100%;position: relative;display: inline-block;
          "
        />
        <el-menu
          :default-active="1"
          style="position: relative;left: 4rem;display:  inline-block;"
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

</style>
