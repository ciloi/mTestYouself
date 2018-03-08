<template>
  <div id="entrance">
    <ImgNav/>
    <div class="entrance-list center">
        <router-link class="entrance-item" 
        v-for="(item, index) in entranceData"  :class="item.className" 
        :to="item.path" :id="item.id" :key="index">{{item.name}}</router-link>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppFooter from "@/components/footer/index";

export default {
  name: "Entrance",
  data() {
    return {
      entranceData: [
        {
          name: "刷题",
          className: "orange",
          path: "/doExercise",
          id: "doExercise"
        },
        {
          name: "查漏补缺",
          className: "pink",
          path: "/CheckLeak",
          id: "CheckLeak"
        },
        {
          name: "模拟面试",
          className: "cyan",
          path: "/MockInterview",
          id: "MockInterview"
        }
      ]
    };
  },

  components: {
    AppFooter
  }
};
</script>
<style scoped>
h1 {
  font-size: 30px;
  padding: 20px;
}
.entrance-list {
  margin: 20px auto;
  width: 140px;
  font-size: 20px;
  color: #fff;
}
.entrance-item {
  margin-bottom: 20px;
  display: block;
  height: 40px;
  line-height: 40px;
  color: #fff;
}
.orange {
  background-image: linear-gradient(120deg, #ff7e59, #ffaf5d);
}
.pink {
  background-image: linear-gradient(123deg, #ff9a8b, #ff6a88 55%, #ff99ac);
}
.cyan {
  background-image: linear-gradient(120deg, #08aeea, #2af598);
}
</style>