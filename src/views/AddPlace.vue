<script>
export default {
  name: 'AddPlace',
  data () {
    return {
      form: {
        type: null,
        name: null,
        desc: null,
        geocode: {
          lat: null,
          lng: null
        }
      }
    }
  },
  methods: {
    addPlace () {
      try {
        this.form.desc = this.form.desc.split(',')
        this.$api.post('/place', this.form)
          .then(r => {
            this.$swal('성공!', r.data.message, 'success')
            this.form = {
              type: null,
              name: null,
              desc: null,
              geocode: {
                lat: null,
                lng: null
              }
            }
          })
          .catch(e => this.$swal('에러!', e.response.data.message, 'error'))
      } catch (e) {
        this.$swal('에러!', e.message, 'error')
      }
    }
  }
}
</script>

<template>
<div class="form">
  <h1 class="form__title">
    장소 등록
  </h1>
  <input
    v-model="form.type"
    class="input__text"
    placeholder="장소 종류"
  >
  <input
    v-model="form.name"
    class="input__text"
    placeholder="장소 이름"
  >
  <input
    v-model="form.desc"
    class="input__text"
    placeholder="장소 설명 (,로 구분)"
  >
  <div class="form__geocode">
    <input
      v-model.number="form.geocode.lat"
      class="input__text form__text-geo"
      placeholder="위도"
    >
    <input
      v-model.number="form.geocode.lng"
      class="input__text form__text-geo"
      placeholder="경도"
    >
  </div>
  <button
    @click="addPlace"
    class="input__button form__button"
  >
    추가하기
  </button>
</div>
</template>

<style lang="scss" scoped>
.form {
  &__geocode {
    display: flex;
    justify-content: space-between;
  }
  &__text-geo {
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
