<template>
  <div id="app">
    <!-- 头部 -->
   <AppHeader/>
   <div class="app-body">
    <router-view/>
   </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style>
@import "./components/common/base.css";
@font-face {
  font-family: "iconfont"; /* project id 580689 */
  src: url("//at.alicdn.com/t/font_580689_sm66nva1qdjz6w29.eot");
  src: url("//at.alicdn.com/t/font_580689_sm66nva1qdjz6w29.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_580689_sm66nva1qdjz6w29.woff") format("woff"),
    url("//at.alicdn.com/t/font_580689_sm66nva1qdjz6w29.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_580689_sm66nva1qdjz6w29.svg#iconfont")
      format("svg");
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.app-body {
  padding-top: 50px;
}
</style>
