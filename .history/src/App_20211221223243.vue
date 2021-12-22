<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  min-width: 1280px;
  font-size: 0.16rem;
  /*min-height: 600px;*/
}
@font-face {
  font-family: "iconfont";
  src: url("../static/icon/iconfont.eot");
  src: url("../static/icon/iconfont.eot?#iefix") format("embedded-opentype"),
    url("../static/icon/iconfont.woff2") format("woff2"),
    url("../static/icon/iconfont.woff") format("woff"),
    url("../static/icon/iconfont.ttf") format("truetype"),
    url("../static/icon/iconfont.svg#iconfont") format("svg");
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
/*!* 整个滚动条 *!*/
/*::-webkit-scrollbar {*/
/*  width: 5px;*/
/*  height: 5px;*/
/*}*/

/*!* 滚动条有滑块的轨道部分 *!*/
/*::-webkit-scrollbar-track-piece {*/
/*  background-color: transparent;*/
/*  border-radius: 5px;*/
/*}*/

/*!* 滚动条滑块(竖向:vertical 横向:horizontal) *!*/
/*::-webkit-scrollbar-thumb {*/
/*  cursor: pointer;*/
/*  background-color:#28f;*/
/*  border-radius: 5px;*/
/*}*/

/*!* 滚动条滑块hover *!*/
/*::-webkit-scrollbar-thumb:hover {*/
/*  background-color: red;*/
/*}*/

/*!* 同时有垂直和水平滚动条时交汇的部分 *!*/
/*::-webkit-scrollbar-corner {*/
/*  display: block; !* 修复交汇时出现的白块 *!*/
/*}*/
</style>
