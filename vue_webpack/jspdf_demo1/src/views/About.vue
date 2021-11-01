<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      property: "value",
    };
  },
  mounted () {
    console.log(this,"aboutabout");
  },
  activated() {
    console.log(this,"aboutabout");
  },
};
</script>
