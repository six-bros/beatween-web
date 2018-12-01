<template>
  <div>
    <header-nav-bar/>
    <nuxt/>
  </div>
</template>

<script>
import HeaderNavBar from '../components/HeaderNavBar.vue'
export default {
  components: {
    HeaderNavBar
  }
}
</script>


<style lang="scss">
html {
  background: #f2f2f2;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

%box-shadow {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>
