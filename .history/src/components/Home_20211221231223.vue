<template>
  <div style="margin:0;padding:0;">
    <img
          src="static/banner1.jpg"
          style="
            vertical-align: middle;
            width: 100%;
            height: 40rem;
            top: 5rem;
            left: 0;
           position: fixed;
          "
        />
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
