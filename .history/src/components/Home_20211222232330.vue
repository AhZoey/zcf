<template>
  <div style="margin: 0; padding: 0">
    <div style="height: 6rem; width: 100%">
      <div
        style="
          background: url(static/banner.png) no-repeat;
          background-size: 100% 100%;
          width: 100%;
          height: 100%;
        "
      >
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
            display: inline-block;

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
            margin-left: 4rem;
            display: inline-block;
            position: relative;
          "
        />
      </div>
    </div>

    <el-card
      class="box-card"
      style="width: 70%; height: 2rem; margin-left: 11%"
    >
      <div class="statistics">
        <div style="height: 100%; display: inline-block">
          今日信息总量<br />
          <div class="num">98</div>
          条
        </div>
        <img
          src="static/1.png"
          width="30%"
          height="100%"
          style="float: right"
        />
      </div>
      <el-divider class="statisticsLine" direction="vertical"></el-divider>
      <div class="statistics">
        <div style="height: 100%; display: inline-block">
          今日媒体总数<br />
          <div class="num">98</div>
          条
        </div>
        <img
          src="static/1.png"
          width="30%"
          height="100%"
          style="float: right"
        />
      </div>
      <el-divider class="statisticsLine" direction="vertical"></el-divider>
      <div class="statistics">
        <div style="height: 100%; display: inline-block">
          负面信息总量<br />
          <div class="num">98</div>
          条
        </div>
        <img
          src="static/1.png"
          width="30%"
          height="100%"
          style="float: right"
        />
      </div>
    </el-card>
    <div style="height: 3rem; width: 100%; margin-top: 1.5rem">
      <img src="static/banner2.jpg" width="100%" height="100%" />
    </div>

    <div style="width: 100%; margin-top: 1rem">
      <div
        style="
          font-size: 0.5rem;
          font-weight: 200;
          letter-spacing: 0.2rem;
          text-align: center;
        "
      >
        互联网热点信息
      </div>
      <el-divider class="titleDivider" :content-position="center"></el-divider>
      <div class="information height">
        <div style="height: 100%; display: inline-block; line-height: 0.5rem">
          <ul>
            <li>
              <img
                src="static/1.png"
                height="30"
                width="30"
                style="margin-right: 0.2rem"
              />核心媒体热点
            </li>
            <li>
              <span>经观东西：后摩尔时代，中国机遇几何</span><br />
              <span class="little left">发布媒体：中国新闻网</span>
              <span class="little right">时间：2021-02-02 10:00</span>
            </li>
            <el-divider></el-divider>
            <li>
              <span>经观东西：后摩尔时代，中国机遇几何</span><br />
              <span class="little left">发布媒体：中国新闻网</span>
              <span class="little right">时间：2021-02-02 10:00</span>
            </li>
            <el-divider></el-divider>
            <li>
              <span>经观东西：后摩尔时代，中国机遇几何</span><br />
              <span class="little left">发布媒体：中国新闻网</span>
              <span class="little right">时间：2021-02-02 10:00</span>
            </li>
            <el-divider></el-divider>
            <li>
              <span>经观东西：后摩尔时代，中国机遇几何</span><br />
              <span class="little left">发布媒体：中国新闻网</span>
              <span class="little right">时间：2021-02-02 10:00</span>
            </li>
            <el-divider></el-divider>
            <li>
              <span>经观东西：后摩尔时代，中国机遇几何</span><br />
              <span class="little left">发布媒体：中国新闻网</span>
              <span class="little right">时间：2021-02-02 10:00</span>
            </li>
          </ul>
        </div>
      </div>
      <el-divider style="" direction="vertical"></el-divider>
      <div class="information height">
        <div style="height: 100%; display: inline-block; line-height: 0.5rem">
          <ul>
            <li>
              <img
                src="static/1.png"
                height="30"
                width="30"
                style="margin-right: 0.2rem"
              />核心媒体热点
            </li>
            <li>
              <span>经观东西：后摩尔时代，中国机遇几何</span><br />
              <span class="little left">发布媒体：中国新闻网</span>
              <span class="little right">时间：2021-02-02 10:00</span>
            </li>
            <el-divider></el-divider>
            <li>
              <span>经观东西：后摩尔时代，中国机遇几何</span><br />
              <span class="little left">发布媒体：中国新闻网</span>
              <span class="little right">时间：2021-02-02 10:00</span>
            </li>
            <el-divider></el-divider>
            <li>
              <span>经观东西：后摩尔时代，中国机遇几何</span><br />
              <span class="little left">发布媒体：中国新闻网</span>
              <span class="little right">时间：2021-02-02 10:00</span>
            </li>
            <el-divider></el-divider>
            <li>
              <span>经观东西：后摩尔时代，中国机遇几何</span><br />
              <span class="little left">发布媒体：中国新闻网</span>
              <span class="little right">时间：2021-02-02 10:00</span>
            </li>
            <el-divider></el-divider>
            <li>
              <span>经观东西：后摩尔时代，中国机遇几何</span><br />
              <span class="little left">发布媒体：中国新闻网</span>
              <span class="little right">时间：2021-02-02 10:00</span>
            </li>
          </ul>
        </div>
      </div>
      <el-divider
        style="width: 1%; height: calc(100% - 40px); display: flex"
        direction="vertical"
      ></el-divider>
      <div class="information height">
        <div style="height: 100%; display: inline-block; line-height: 0.5rem">
          <ul>
            <li>
              <img
                src="static/1.png"
                height="30"
                width="30"
                style="margin-right: 0.2rem"
              />行业热点
            </li>
            <li>
              <span>经观东西：后摩尔时代，中国机遇几何</span><br />
              <span class="little left">发布媒体：中国新闻网</span>
              <span class="little right">时间：2021-02-02 10:00</span>
            </li>
            <el-divider></el-divider>
            <li>
              <span>经观东西：后摩尔时代，中国机遇几何</span><br />
              <span class="little left">发布媒体：中国新闻网</span>
              <span class="little right">时间：2021-02-02 10:00</span>
            </li>
            <el-divider></el-divider>
            <li>
              <span>经观东西：后摩尔时代，中国机遇几何</span><br />
              <span class="little left">发布媒体：中国新闻网</span>
              <span class="little right">时间：2021-02-02 10:00</span>
            </li>
            <el-divider></el-divider>
            <li>
              <span>经观东西：后摩尔时代，中国机遇几何</span><br />
              <span class="little left">发布媒体：中国新闻网</span>
              <span class="little right">时间：2021-02-02 10:00</span>
            </li>
            <el-divider></el-divider>
            <li>
              <span>经观东西：后摩尔时代，中国机遇几何</span><br />
              <span class="little left">发布媒体：中国新闻网</span>
              <span class="little right">时间：2021-02-02 10:00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      style="
        margin-top: 1.5rem;
        padding-top: 0.5rem;
        width: 100%;
        height: 5rem;
        background-color: #f2f2f2;
      "
    >
      <div
        style="
          font-size: 0.5rem;
          font-weight: 200;
          letter-spacing: 0.2rem;
          text-align: center;
        "
      >
        产品亮点
      </div>
      <el-divider class="titleDivider" :content-position="center"></el-divider>
      <div style="height: 2rem; width: 100%; margin-top: 1rem">
        <div
          style="
            width: 2.4rem;
            display: inline-block;
            height: 100%;
            padding: 0 5%;
            margin-left: 5%;
          "
        >
          <img src="static/2.png" style="width: 2rem" height="auto" /><br />
          <span style="width: 100%" class="information">信源全面多样</span>
        </div>
        <div
          style="
            width: 2.4rem;
            display: inline-block;
            height: 100%;
            padding: 0 5%;
          "
        >
          <img src="static/4.png" style="width: 2rem" height="auto" /><br />
          <span style="width: 100%" class="information">分析丰富智能</span>
        </div>
        <div
          style="
            width: 2.4rem;
            display: inline-block;
            height: 100%;
            padding: 0 5%;
          "
        >
          <img src="static/3.png" style="width: 2rem" height="auto" /><br />
          <span style="width: 100%" class="information">预警快速准确</span>
        </div>
        <div
          style="
            width: 2.4rem;
            display: inline-block;
            height: 100%;
            padding: 0 5%;
          "
        >
          <img src="static/1.png" style="width: 2rem" height="auto" /><br />
          <span style="width: 100%" class="information">使用安全快捷</span>
        </div>
      </div>
    </div>

    <div style="margin-top: 1rem">
      <el-divider class="infoDivider" :content-position="left"></el-divider>
      <div
        style="
          width: 80%;
          margin-left: 10%;
          height: 2rem;
          background-color: #d7dbe2;
          text-align: center;
          line-height: 2rem;
          font-size: 0.2rem;
        "
      >
        分布式采集能力，365*24全天候不间断，覆盖往网站、论坛、APP十万多家，微博、贴吧、微信、头条各类自媒体全面，多种语言全汇聚。
      </div>
    </div>
    <div style="height: 3rem; width: 100%; margin-top: 1rem">
      <div
        style="
          background: url(static/banner3.jpg) no-repeat;
          background-size: 100% 100%;
          width: 100%;
          height: 100%;
        "
      >
        <div
          style="
            font-size: 0.8rem;
            text-align: center;
            color: #66b1ff;
            padding-top: 1.2rem;
            width: 100%;
          "
        >
          9876543212
        </div>
      </div>
    </div>

    <div
      style="
        margin-top: 1.5rem;
        padding-top: 0.5rem;
        width: 100%;
        height: 8rem;
        background-color: #f2f2f2;
      "
    >
      <div
        style="
          font-size: 0.5rem;
          font-weight: 200;
          letter-spacing: 0.2rem;
          text-align: center;
        "
      >
        荣誉资质
      </div>
      <el-divider class="titleDivider" :content-position="center"></el-divider>

      <div class="block" style="margin: 0 10%">
        <el-image
          style="width: 100%; height: 7rem;"
          src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        ></el-image>
      </div>
    </div>
    <div style="height: 3rem; width: 100%; margin-top: 1rem">
      <div
        style="
          background: url(static/footer.jpg) no-repeat;
          background-size: 100% 100%;
          width: 100%;
          height: 100%;
        "
      >
        <div
          style="
            font-size: 0.8rem;
            text-align: center;
            color: #66b1ff;
            padding-top: 1.2rem;
            width: 100%;
          "
        >
          9876543212
        </div>
      </div>
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
.titleDivider.el-divider--horizontal {
  text-align: center;
  width: 2rem !important;
  margin-left: 44%;
  height: 0.06rem !important;
  background-color: cornflowerblue;
}
.infoDivider.el-divider--horizontal {
  text-align: center;
  width: 2rem !important;
  height: 0.06rem !important;
  background-color: cornflowerblue;
  margin: 0 0 0 10% !important;
}
.information {
  vertical-align: middle;
  width: calc(31% - 0.6rem);
  display: inline-block;
  font-size: 0.23rem;
  padding: 0 0.3rem;
}
.information .height {
  height: 6rem;
}
.information li {
  width: 100%;
}
.information .little {
  color: gray;
  font-size: 0.2rem;
  float: left;
}
.information .little .left {
  float: left;
}
.information .little .right {
  float: right;
}
.information.el-divider--horizontal {
  text-align: center;
  width: 2rem !important;
  margin-left: 44%;
  height: 100% !important;
  background-color: cornflowerblue;
}
.statistics {
  vertical-align: middle;
  width: calc(31% - 0.6rem);
  height: calc(100% - 40px);
  display: inline-block;
  font-size: 0.23rem;
  padding: 0 0.3rem;
}
.statistics .num {
  font-size: 0.8rem;
  font-weight: 200;
  color: rgb(69, 126, 233);
  display: inline-block;
}
.el-card__body {
  height: 100%;
}
.statisticsLine.el-divider--vertical {
  height: 1.5rem;
  display: inline-block !important;
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
