<template>
  <div style="margin: 0; padding: 0; ">
    <div style="height:6rem;width:100%">
      <div  style="  background: url(static/banner.png) no-repeat;
    background-size: 100% 100%; width: 100%; height: 100%;">
     <div
      style="
        position: relative;
        z-index: auto;
        letter-spacing: 0.2rem;
        z-index: 100;
        top: 1.1rem;
        left: 3rem;
        color: white;
        font-size: 0.5rem;
                  display:inline-block;

        line-height: 1rem;
      "
    >
      大数据智能情感分析<br />舆情专业度判断
    </div>
      <img
        src="static/banner1.png"
        style="
          vertical-align: middle;
          width: 6rem;
          height: auto;
          top: 1rem;
          display:inline-block;
          position: relative;
        "
      />
    </div>
    </div>
  



    <el-card
      class="box-card"
      style="width: 70%;height: 2rem;margin-left: 11%;"
    >
    <div class="statistics">
        <div style="height:100%;display:inline-block;">
             今日信息总量<br/>
           <div class='num'>98</div>条
           
        </div>
        <img src="static/1.png" width="30%" height="100%" style="float:right"/>
    </div>
     <el-divider style="" direction="vertical"></el-divider>
    <div class="statistics">
        <div style="height:100%;display:inline-block;">
             今日媒体总数<br/>
           <div class='num'>98</div>条
           
        </div>
        <img src="static/1.png" width="30%" height="100%" style="float:right"/>
    </div>
     <el-divider style="width: 1%;height: calc( 100% - 40px);display: flex;" direction="vertical"></el-divider>
    <div class="statistics">
        <div style="height:100%;display:inline-block;">
             负面信息总量<br/>
           <div class='num'>98</div>条
           
        </div>
        <img src="static/1.png" width="30%" height="100%" style="float:right"/>
    </div>
    </el-card>
    <div style="height:3rem;width:100%;margin-top:1.5rem;">
      <img src="static/banner2.jpg" width="100%" height="100%"/>
    </div>
     <el-tabs :stretch="true">
    <el-tab-pane label="用户管理" name="first">互联网热点信息</el-tab-pane>
  </el-tabs>
  <div style="width:100%">
    <div style="font-size:0.8rem;font-weight:200; letter-spacing: 0.2rem;
">互联网热点信息</div>
  </div>
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
.statistics{
  vertical-align:middle;
  width: calc(31% - 0.6rem);
  height: calc( 100% - 40px);display: inline-block;
  font-size: 0.23rem;
  padding:0 0.3rem
}
.statistics .num{
  font-size: 0.8rem;
  font-weight: 200;
  color: rgb(69, 126, 233);
  display:  inline-block;

}
.el-card__body{
  height:100%;
}
.el-divider--vertical{
height: 1.5rem;
display:  inline-block !important;

}
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
