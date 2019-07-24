<script>
export default {
  name: 'Navbar'
}
</script>

<template>
<div class="navbar">
  <div class="navbar__brand">
    <span class="navbar__block">Labrador</span>
    <span class="navbar__block">Retriever</span>
  </div>
  <div class="navbar__notification">
    <router-link to="/notification">
      <img
        class="navbar__icon"
        :src="require('@/assets/notification.png')"
      >
    </router-link>
  </div>
</div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Zilla+Slab&display=swap');

.navbar {
  height: 3.5rem;
  margin: 17px 15px;

  &__brand {
    float: left;
    font-size: 1.3rem;
    font-family: 'Zilla Slab', serif;
    user-select: none;
  }

  &__block {
    display: block;
  }

  &__notification {
    float: right;
    height: 100%;
    display: flex;
    align-items: center;
  }

  &__icon {
    height: 2rem;
  }
}
</style>
