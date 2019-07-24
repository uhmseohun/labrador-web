<script>
import Navbar from '@/components/Navbar.vue'
import Menubar from '@/components/Menubar.vue'

export default {
  name: 'App',
  components: { Navbar, Menubar }
}
</script>

<template>
  <div id="app" class="app">
    <navbar class="app__navbar"/>
    <router-view class="app__content"/>
    <menubar class="app__menubar"/>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'LotteMartHappy';
  font-style: normal;
  font-weight: 400;
  src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyMedium.woff2')
    format('woff2'),
    url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyMedium.woff')
    format('woff');
}

a {
  text-decoration: none;
  color: black;
}

html,
body {
  height: 100%;
}

.app {
  height: 100%;

  &__content {
    font-family: 'LotteMartHappy';
    margin: 0 auto;
    padding: 0 15px;

    @media (min-width: 650px) {
      padding: 0 10rem;
    }
  }
  &__menubar {
    width: -webkit-fill-available;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}

.input {
  &__text {
    font-family: 'LotteMartHappy';
    display: block;
    border: 0;
    height: 2.5rem;
    font-size: 1.2rem;
    width: 100%;
    border-bottom: solid rgb(100, 100, 100) 1px;

    &:not(:first-child) {
      margin-top: 1rem;
    }
    &:focus {
      outline: none;
      border-bottom: solid black 1px;
    }
  }

  &__button {
    font-family: 'LotteMartHappy';
    font-size: 1.2rem;
    height: 2.5rem;
    background-color: white;
    border: 0;
    padding-bottom: 0;
    color: rgb(100, 100, 100);
    border-bottom: solid rgb(100, 100, 100) 1px;

    &:not(:first-child) {
      margin-left: 0.5rem;
    }
  }
}
</style>
