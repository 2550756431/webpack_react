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

