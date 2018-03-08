<template>
  <div id="header">
   <mt-header fixed title="Test Yourself">
    <mt-button @click="toggleMenuList()" v-show="!MenuListShow" slot="left" class="header-menu iconfont">&#xe699;</mt-button>   
    <mt-button @click="toggleMenuList()" v-show="MenuListShow" slot="left" class="header-menu iconfont">&#xe69a;</mt-button>   
    <img @click="toggleLoginInfo()" v-if="isLogin" slot="right" class="header-avatar"/> 
    <!-- <i v-show="!isLogin" slot="right" class="header-avatar unlogin">登录</i>   -->
     
    <router-link id="login" to="/login" v-show="!isLogin" slot="right" class="header-avatar unlogin">登录</router-link>  
   
   </mt-header>
   <div class="menu-list" v-show="MenuListShow">
     <router-link  class="menu-item" v-for="(item, index) in menuListData" :to="item.path" :id="item.id"  :key="index">
        {{item.name}}
     </router-link>
   </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Header, Button } from "mint-ui";

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

export default {
  name: "AppHeader",
  data() {
    return {
      MenuListShow: false,
      isLogin: false,
      menuListData: [
        {
          name: "首页",
          path: "/",
          id: "Index"
        },
        {
          name: "刷题",
          path: "/doExercise",
          id: "doExercise"
        },
        {
          name: "查漏补缺",
          path: "/CheckLeak",
          id: "CheckLeak"
        },
        {
          name: "模拟面试",
          path: "/MockInterview",
          id: "MockInterview"
        },
        {
          name: "排行榜",
          path: "/Rank",
          id: "Rank"
        },
        {
          name: "帮助",
          path: "/help",
          id: "help"
        },
        {
          name: "赞助",
          path: "/sponsor",
          id: "sponsor"
        }
      ]
    };
  },
  methods: {
    toggleMenuList() {
      this.MenuListShow = !this.MenuListShow;
    }
  }
};
</script>

<style>
.mint-header {
  font-size: 28px;
  height: 50px;
}
.header-menu {
  font-size: 24px !important;
}
.menu-list {
  top: 50px;
  width: 80px;
  text-align: left;
  padding-left: 8px;
  padding-top: 6px;
  background: #26a2ff;
  color: #fff;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 1;
}
.menu-item {
  height: 30px;
  font-size: 16px;
  display: block;
  color: #fff;
}
.unlogin {
  font-size: 12px;
  border: 1px solid #fff;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  display: inline-block;
}
</style>
