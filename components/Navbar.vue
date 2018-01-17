<template lang="html">
  <nav class="navbar">
    <nuxt-link to="/" class="nuxt-link accent-color primary-color-hover">
      <fa :icon="['fal', 'home']" size="1x" pull="right"/>
    </nuxt-link>
    <nuxt-link to="contact" class="nuxt-link accent-color primary-color-hover">
      <fa :icon="['fal', 'envelope']" size="1x" pull="right"/>
    </nuxt-link>
    <nuxt-link to="/about" class="nuxt-link accent-color primary-color-hover">
      <fa :icon="['fal', 'address-card']" size="1x" pull="right"/>
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

<style lang="scss" scoped>
.navbar {
  padding: 15px;
  font-size: 30px;
  z-index: 999;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
}
.nuxt-link {
  transition: all 0.5s ease;
  opacity: 1;
  &.nuxt-link-exact-active {
    font-size: 0;
  }
}
</style>
