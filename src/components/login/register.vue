<!--  -->
<template>
  <div id="register">
      <ImgNav/>
       <mt-field label="用户名" placeholder="请输入你的用户名" type="text" v-model="username"></mt-field>
       <mt-field label="邮箱" placeholder="请输入你的邮箱" type="email" v-model="email"></mt-field>
       <mt-field label="密码" placeholder="请输入你的密码" type="password" v-model="password"></mt-field>
       <mt-field label="确认密码" placeholder="请确认你的密码" type="password" v-model="surepassword"></mt-field>
       <mt-field label="邮件验证码" v-model="captcha" placeholder="请输入你的邮件验证码">
            <mt-button  class="disinbl" size="small">验证码</mt-button>
        </mt-field>
  </div>
</template>

<script>
import Vue from "vue";
import { Field } from "mint-ui";
Vue.component(Field.name, Field);
export default {
  name: "Register",
  data() {
    return {
      surepassword: "",
      password: "",
      email: "",
      username: ""
    };
  }
};
</script>
<style scoped>

</style>