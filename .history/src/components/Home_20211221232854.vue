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
        width: 6rem;
        height: 2rem;
        letter-spacing: 0.1rem;
        z-index: 100;
        top: 2.1rem;
        left: 3rem;
        color: white; /* font-weight: 600; */
        font-size: 0.5rem;
        line-height: 0.8rem;
      "
    >
      大数据智能情感分析<br />舆情专业度判断
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
