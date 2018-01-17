<template lang="html">
  <nav class="navbar">
    <nuxt-link to="contact" class="nuxt-link accent-color primary-color-hover">
      <fa :icon="['fal', 'address-book']" size="1x"/>
    </nuxt-link>
    <nuxt-link to="/about" class="nuxt-link accent-color primary-color-hover">
      <fa :icon="['fal', 'info']" size="1x"/>
    </nuxt-link>
    <nuxt-link to="/" class="nuxt-link accent-color primary-color-hover">
      <fa :icon="['fal', 'home']" size="1x"/>
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      hover: false
    }
  }
}
</script>

<style lang="scss">
.navbar {
  text-align: right;
  padding: 15px;
  font-size: 30px;
  z-index: 999;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  .nuxt-link {
    padding-left: 15px;
    transition: all 0.5s ease;
    opacity: 1;
    &.nuxt-link-exact-active {
      font-size: 0;
      padding: 0;
    }
  }
}
</style>
