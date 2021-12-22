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
