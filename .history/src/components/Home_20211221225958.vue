<template>
  <div class="hello">
    <el-header
      style="
        width: 219rem;
        height: 5rem;
        background-color: red;
        line-height: 100%;
      "
    >
      <img
        src="static/logo.png"
        style="
         vertical-align: middle;width: auto;height: 4rem;top: 1rem;left: 15rem;line-height: 100%;position:  fixed;
        "
      />
      <el-menu
        :default-active="1" style="
    position:  fixed;
    top: 1rem;
    left: 25rem;
"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect" :router="true"
      >
          <el-menu-item index="1" >首页</el-menu-item>
          <el-menu-item index="2" >监测数据</el-menu-item>
          <el-menu-item index="3" >推送信息</el-menu-item>
          <el-menu-item index="4" >分析洞察</el-menu-item>
          <el-menu-item index="5" >智能报告</el-menu-item>

      </el-menu>
    </el-header>
    <el-body>
         <section >
            <router-view ></router-view>
        </section>
    </el-body>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "首页",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
