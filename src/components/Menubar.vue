<script>
export default {
  name: 'Menubar',
  computed: {
    currentMenu () {
      const route = this.$route.path
      if (route === '/timeline') return 0
      if (route === '/place') return 1
      if (route === '/device') return 2
      if (route === '/setting') return 3
      return -1
    }
  }
}
</script>

<template>
<div class="menubar">
  <div class="menubar__menu">
    <router-link
      :class="{
        'menubar__menu-selected': currentMenu === 0
      }"
      to="/timeline"
    >
      타임라인
    </router-link>
  </div>
  <div class="menubar__menu">
    <router-link
      :class="{
        'menubar__menu-selected': currentMenu === 1
      }"
      to="/place"
    >
      장소
    </router-link>
  </div>
  <div class="menubar__menu">
    <router-link
      :class="{
        'menubar__menu-selected': currentMenu === 2
      }"
      to="/device"
    >
      디바이스
    </router-link>
  </div>
  <div class="menubar__menu">
    <router-link
      :class="{
        'menubar__menu-selected': currentMenu === 3
      }"
      to="/setting"
    >
      설정
    </router-link>
  </div>
</div>
</template>

<style lang="scss" scoped>
.menubar {
  font-family: 'LotteMartHappy';
  height: 1.3rem;
  padding: 1rem 2rem;
  &__menu {
    font-size: 1.3rem;
  }

  &__menu-selected {
    color: rgb(100, 100, 100) !important;
  }
}
</style>
