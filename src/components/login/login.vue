<!--  -->
<template>
  <div id="login">
      <ImgNav/>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">手机号码登录</mt-tab-item>
        <mt-tab-item id="2">账号密码登录</mt-tab-item>
    </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
            <mt-field label="手机号" placeholder="请输入你的手机号码" type="tel" v-model="tel"></mt-field>
            <mt-field label="验证码" v-model="captcha" placeholder="请输入你的验证码">
                <mt-button  class="disinbl" size="small">验证码</mt-button>
            </mt-field>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
            <mt-field label="账号" placeholder="请输入你的邮箱" type="email" v-model="email"></mt-field>
            <mt-field label="密码" placeholder="请输入你的密码" type="password" v-model="password"></mt-field>
        </mt-tab-container-item>
      </mt-tab-container>
      <div class="center register">
         <router-link id="register" to="/register">还没有账户，马上注册</router-link>
      </div>
  </div>
</template>

<script>
import Vue from "vue";
import {
  TabContainer,
  TabContainerItem,
  Navbar,
  TabItem,
  Field
} from "mint-ui";

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Field.name, Field);

export default {
  name: "Login",
  data() {
    return {
      selected: "1",
      username: "",
      email: "",
      tel: "",
      password: "",
      captcha: ""
    };
  }
};
</script>
<style scoped>
.login-nav {
  margin-bottom: 20px;
}
.register {
  margin-top: 20px;
}
</style>