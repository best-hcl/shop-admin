<template>
  <div id="app">
    hello vue

    <el-button
      type="primary"
      circle
    >主要按钮</el-button>

  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    // 调用axios 的get 请求
    this.$axios.get("https://api.github.com/users").then(res => {
      console.log(res);
    });
  }
};
</script>

<style>
</style>
