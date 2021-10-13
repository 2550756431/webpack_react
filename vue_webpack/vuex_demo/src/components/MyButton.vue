<template>
  <div class="hello">
    <button @click="handle_num"></button>
  </div>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    msg: String,
    getinfo:Function
  },
  mounted() {
    console.log(this.$props.getinfo,"getinfo");
  },
  activated() {
    console.log("actived");
  },
  methods: {
    handle_num() {
      console.log(1);
      let { getinfo } = this.$props;
      getinfo && typeof getinfo == "function" && getinfo();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
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
