<template>
  <div class="register">
    <div class="title">REGISTER</div>
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
    <wmui-button className="wmui-btn-primary" @click.native="register" id="register_btn">注 册</wmui-button>
    <wmui-button className="wmui-btn-default" @click.native="login" id="sign_in_btn">登 录</wmui-button>
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
    methods: {
      login() {
        this.$router.push('/login');
      },
      register()
      {
        if(!this.user.username || !this.user.password)
        {
          alert("用户名和密码不能为空")
          return false
        }

        if(this.user.password.length < 3)
        {
          alert("密码至少3位")
          return false
        }

        this.$store.dispatch('REGISTER', this.user).then(data => {
          if(data.success) {
            // TODO 等待一两秒
            alert("注册成功")
            this.$router.push('/login')
          } else {
            alert(data.err)
          }
        })
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
