<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        id: '',
        password: ''
      }
    }
  },
  methods: {
    authorize () {
      this.$api.post('/auth', this.form)
        .then(r => {
          localStorage.accessToken = r.data.accessToken
          this.$api.defaults.headers.common['authorization'] = localStorage.accessToken
          this.$router.push('/timeline')
        })
        .catch(e => {
          this.$swal('에러!', e.response.data.message, 'error')
        })
    }
  }
}
</script>

<template>
<div class="login">
  <div class="login__form">
    <h1 class="login__title">
      로그인
    </h1>
    <input
      v-model="form.id"
      @keyup.enter="authorize()"
      class="input__text"
      placeholder="아이디"
    >
    <input
      v-model="form.password"
      @keyup.enter="authorize()"
      type="password"
      class="input__text"
      placeholder="비밀번호"
    >
  </div>
</div>
</template>

<style lang="scss" scoped>
.login {
  &__form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
