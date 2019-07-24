<script>
export default {
  name: 'Join',
  data () {
    return {
      form: {
        name: '',
        id: '',
        password: ''
      }
    }
  },
  methods: {
    join () {
      this.$api.post('/auth/join', this.form)
        .then(r => {
          this.$swal('성공!', r.data.message, 'success')
          this.$router.push('/')
        })
        .catch(e => this.$swal('에러!', e.response.data.message, 'error'))
    }
  }
}
</script>

<template>
<div class="login">
  <h1 class="form__title">
    가입하기
  </h1>
  <input
    v-model="form.name"
    class="input__text"
    placeholder="이름"
  >
  <input
    v-model="form.id"
    class="input__text"
    placeholder="아이디"
  >
  <input
    v-model="form.password"
    type="password"
    class="input__text"
    placeholder="비밀번호"
  >
  <button
    @click="join"
    class="input__button form__button"
  >
    가입
  </button>
</div>
</template>

<style lang="scss" scoped>
.form {
  &__button {
    float: right;
    align-items: center;
    margin-top: 2rem;
  }
}
</style>
