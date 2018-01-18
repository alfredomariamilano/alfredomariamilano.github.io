<template>
  <section class="container transition-container">
    <div id="scene" class="">
      <div v-for="i in 9" :data-depth="i/100 + 0.5" class="layer" data-relative-input="true">
        <div class="centered">
          <!-- <nuxt-link to="contact" style="pointer-events: all;"> -->
            <h1 class="logo primary-font" :class="[i%2===1 ? 'accent-color' : 'primary-color']">alfredo</h1>
          <!-- </nuxt-link> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Parallax from '~/plugins/parallax'

export default {
  transition (to, from) {
    if (!from) return
    let name = to.path === '/' ? 'slide-right' : 'slide-left'
    return {
      name,
      mode: 'out-in'
    }
  },
  computed: {
    ...mapGetters({getLoading: 'getLoading'})
  },
  methods: {
    ...mapMutations({toggleLoading: 'toggleLoading'})
  },
  mounted () {
    const scene = document.getElementById('scene')
    const parallax = new Parallax(scene)
    console.log(parallax)
    document.querySelector('.app-container').classList.add('visible')
  }
}
</script>

<style lang="scss">
#scene {
  width: 100%;
  height: 100vh;

  overflow: hidden;
  .layer {
    width: 100%;
    height: 100%;
    .centered {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    & .logo {
      margin: 0;
      font-size: 75px;
      line-height: 1;
      &:after {
        content: "Web Developer";
        position: absolute;
        bottom: -20%;
        right: 0;
        font-size: 25%;
      }
      @media (min-width: 600px) {
        font-size: 150px;
      }
    }
  }
}
</style>
