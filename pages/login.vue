<template>
  <div class="login">
    <div class="title">LOGIN</div>
    <input
       type="text"
       placeholder="用户名"
       autocomplete="off"
       v-model="user.username">
    <input
      type="password"
      placeholder="密码"
      autocomplete="off"
      v-model="user.password"
      @keyup.enter="login">
    <wmui-button className="wmui-btn-primary" @click.native="login" id="sign_in_btn">登 录</wmui-button>
    <wmui-button className="wmui-btn-default" @click.native="register" id="register_btn">注 册</wmui-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user:{
        username: null,
        password: null
      }
    }
  },
  head() {
    return {
      title: '登录 - ' + this.$store.state.user.nickname
    }
  },
  methods: {
    login() {
      if(!this.user.username || !this.user.password)
      {
        alert("用户名和密码不能为空")
        return false
      }
      this.$store.dispatch('LOGIN', this.user).then(data => {
        if(data.success) {
          this.$router.push('/')
        } else {
          this.$Toast({text: '用户名或密码不正确'})
        }
      })
    },
    register()
    {
      this.$router.push('/register');
    }
  }
}
</script>

<style scoped>
  #sign_in_btn,#register_btn {
    margin-bottom: 20px;
  }
  .title
  {
    text-align: center;
    font-size: x-large;
    font-weight: bold;
    margin-bottom: 1em;
  }
</style>
