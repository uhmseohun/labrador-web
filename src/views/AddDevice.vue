<script>
export default {
  name: 'AddDevice',
  data () {
    return {
      form: {
        type: null,
        name: null,
        desc: null,
        methods: [{
          name: null,
          type: null,
          url: null
        }]
      }
    }
  },
  methods: {
    addDevice () {
      this.$api.post('/device', this.form)
        .then(r => {
          this.$swal('성공!', r.data.message, 'success')
          this.form = {
            type: null,
            name: null,
            desc: null,
            methods: [{
              name: null,
              type: null,
              url: null
            }]
          }
        })
        .catch(e => this.$swal('에러!', e.response.data.message, 'error'))
    }
  }
}
</script>

<template>
<div class="form">
  <h1 class="form__title">
    디바이스 등록
  </h1>
  <input
    v-model="form.type"
    class="input__text"
    placeholder="디바이스 종류"
  >
  <input
    v-model="form.name"
    class="input__text"
    placeholder="디바이스 이름"
  >
  <input
    v-model="form.desc"
    class="input__text"
    placeholder="디바이스 설명 (,로 구분)"
  >
  <div
    :key="`method-${i}`"
    v-for="(method, i) in form.methods"
    class="form__method"
  >
    <input
      v-model.number="method.type"
      class="input__text form__text-meth"
      placeholder="메소드 종류"
    >
    <input
      v-model.number="method.name"
      class="input__text form__text-meth"
      placeholder="메소드 이름"
    >
    <input
      v-model.number="method.url"
      class="input__text"
      placeholder="메소드 주소"
    >
  </div>
  <button
    @click="addDevice"
    class="input__button form__button"
  >
    추가하기
  </button>
</div>
</template>

<style lang="scss" scoped>
.form {
  &__method {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__text-meth {
    margin-top: 1rem;
    width: 48%;
  }
  &__button {
    float: right;
    align-items: center;
    margin-top: 2rem;
  }
}
</style>
