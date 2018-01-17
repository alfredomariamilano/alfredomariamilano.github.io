<template lang="html">
  <section class="container transition-container">
    <h1>about</h1>
  </section>
</template>

<script>
export default {
  transition (to, from) {
    if (!from) return
    let name = to.path === '/' ? 'slide-right' : 'slide-left'
    return {
      name,
      mode: 'out-in'
    }
  }
}
</script>

<style lang="css">
</style>
