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
  <h1 class="login__title">
    로그인
  </h1>
  <div class="login__form">
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

    <button
      @click="authorize()"
      class="input__button login__button"
    >
      로그인
    </button>

    <router-link to="/auth/join">
      <button
        class="input__button login__button"
      >
        회원가입
      </button>
    </router-link>
  </div>
</div>
</template>

<style lang="scss" scoped>
.login {
  &__join {
    color: rgb(100, 100, 100);
  }

  &__button {
    float: right;
    align-items: center;
    margin-top: 2rem;
  }
}
</style>
