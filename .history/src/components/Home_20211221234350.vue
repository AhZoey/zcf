<template>
  <div style="margin: 0; padding: 0">
    <img
      src="static/banner.png"
      style="
        vertical-align: middle;
        width: 100%;
        height: 5rem;
        top: 1rem;
        left: 0;
        position: fixed;
      "
    />
    <div
      style="
        position: fixed;
        z-index: auto;
        width: 6.5rem;
        height: 2rem;
        letter-spacing: 0.2rem;
        z-index: 100;
        top: 2.1rem;
        left: 3rem;
        color: white;
        font-size: 0.5rem;
        line-height: 1rem;
      "
    >
      大数据智能情感分析<br />舆情专业度判断
    </div>
    <div>
      <img
        src="static/banner1.png"
        style="
          vertical-align: middle;
          width: 6rem;
          height: auto;
          top: 2rem;
          right: 2.5rem;
          position: fixed;
        "
      />
    </div>
    <el-row :gutter="12">
  <el-col :span="8">
    <el-card shadow="never">
      1
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="never">
      2
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="never">
      3
    </el-card>
  </el-col>
</el-row>
    <el-card class="box-card" style="
        width: 70%;
        height: 2rem;
        position: fixed;
        top: 5rem;
        left: 15%;
      ">
 
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>
    <div
      
    ></div>
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
