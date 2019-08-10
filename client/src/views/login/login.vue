<template>
  <div class="login">
    <div class="login-body">
      <div class="login-body-tip"><i class="el-icon-loading"/> 没什么想说的 <i class="el-icon-loading"/></div>
      <el-form ref="form" :model="form">
        <el-form-item
          prop="username"
          :rules="[
            { required: true, message: '用户名不能为空'}
          ]">
          <el-input
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
            v-model="form.username"
          />
        </el-form-item>
        <el-form-item
          prop="password"
          :rules="[
            { required: true, message: '密码不能为空'}
          ]">
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            v-model="form.password"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="form.autoLogin">自动登陆</el-checkbox>
          <router-link to="/login" class="text-hover">忘记密码</router-link>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" size="medium" @click="login">登 录</el-button>
        </el-form-item>
      </el-form>
      <div class="login-body-other">
        <span>其他登录方式</span>
        <img src="@images/icon-social-wechat.svg" alt="wechat">
        <img src="@images/icon-social-qq.svg" alt="qq">
        <img src="@images/icon-social-weibo.svg" alt="weibo">
        <router-link to="/" class="text-hover">注册账户</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {},
  data () {
    return {
      form: {
        username: 'admin',
        password: 'admin',
        autoLogin: true
      }
    }
  },
  computed: {},
  methods: {
    login () {
      if (this.form.username && this.form.password) {
        this.$store.dispatch('getUser', {
          username: this.form.username,
          password: this.form.password
        })
      }
    }
  },
  created () {}
}
</script>

<style scoped lang="stylus">
.login
  height 100vh
  background-image url(../../assets/images/login-bg.svg)
  background-repeat no-repeat
  background-position 50%
  background-size 100%
  overflow hidden
  &-body
    width 384px
    margin auto
    transition width .1s linear
    &-tip
      font-size 14px
      color #409EFF
      margin 100px auto 20px
      text-align center
    .text-hover
      color #409EFF
      float right
      &:hover
        color #8ac4ff
    .login-btn
      width 100%
    &-other
      font-size 14px
      color #515a6e
      & > img
        width 24px
        margin-left 16px
        cursor pointer
        vertical-align middle
@media screen and (max-width: 576px)
  .login-body
    width 95%
</style>
