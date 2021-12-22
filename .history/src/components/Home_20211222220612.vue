<template>
  <div style="margin: 0; padding: 0; ">
  <div style=" background-image: url('static/banner.png'); width: 6.5rem; height: 2rem;"></div>

    <!-- <div
      style="
        position: fixed;
        z-index: auto;
       
       
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
    </div> -->

    <el-card
      class="box-card"
      style="width: 70%; height: 2rem; position: fixed; top: 5rem; left: 15%"
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
    <div style="position:fixed;height:3rem;top:8rem;width:100%">
      <img src="static/banner2.jpg"/>
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
