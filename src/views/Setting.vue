<script>
export default {
  name: 'Setting',
  methods: {
    logout () {
      localStorage.removeItem('accessToken')
      this.$router.push('/auth')
    }
  }
}
</script>

<template>
<div class="setting">
  <h1 class="setting__title">설정</h1>
  <span
    @click="logout"
    class="setting__button"
  >
    로그아웃
  </span>
</div>
</template>

<style lang="scss" scoped>
</style>
