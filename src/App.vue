<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <ElInput></ElInput>
    <MyTitle title="测试123456" emphasize="123"></MyTitle> -->
    <!-- <FlvTest></FlvTest>
    <ElTableTree></ElTableTree> -->
    <TestLTMap></TestLTMap>
  </div>
</template>

<script>
// import ElInput from "./components/ElInput.vue"
// import MyTitle from "./components/MyTitle.vue"
// import ElTableTree from "./components/elTableTree";
// import FlvTest from "./views/flvTest/index.vue";
import TestLTMap from "./views/TestLTMap/index.vue";
export default {
  name: "App",
  components: {
    // ElInput,
    // MyTitle,
    // ElTableTree,
    // FlvTest,
    TestLTMap,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100%;
}
</style>
