<template>
  <div class="app-container">
    <Navbar></Navbar>
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
.app-container {
  * {
    transition: all 0.5s ease;
    opacity: 0;
  }
  &.visible * {
    opacity: 1;
  }
}
</style>
