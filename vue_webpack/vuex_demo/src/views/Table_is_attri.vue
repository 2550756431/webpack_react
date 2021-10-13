<template>
  <table>
    <tr is="my-row"></tr>
  </table>
</template>

<script>
import myRow from "@/components/myRow.vue"
export default {
  components: {
    myRow,
  },

  data() {
    return {
      property: "value",
    };
  },
  mounted() {},
};
</script>

<style lang="" scoped>
</style>

