<template>
  <div class="app-container">
    <no-ssr>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WJRRMS7"
          height="0"
          width="0"
          style="display:none;visibility:hidden">
          </iframe>
        </noscript>
      </no-ssr>
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
  & > * {
    transition: all 0.5s ease;
    opacity: 0;
  }
  &.visible > * {
    opacity: 1;
  }
}
</style>
