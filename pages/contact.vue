<template lang="html">
  <section class="container transition-container">
    <div class="content-container md-scrollbar">
      <no-ssr>
        <md-card md-with-hover>
          <md-ripple>
            <md-card-header>
              <h1 class="md-title">Here's my contact info</h1>
              <h3 class="md-subhead">You know, just in case</h3>
            </md-card-header>

            <md-card-content>
              <ul class="fa-ul">
                <li><a href="mailto:hi@alfredomm.com" rel="noreferrer noopener"><span class="fa-li"><fa :icon="['fas', 'envelope']"/></span>hi@alfredomm.com</a></li>
                <li><a href="https://github.com/alfredomariamilano" target="_blank" rel="noreferrer noopener"><span class="fa-li"><fa :icon="['fab', 'github']"/></span>Github</a></li>
                <li><a href="http://linkedin.com/in/alfredomariamilano" target="_blank" rel="noreferrer noopener"><span class="fa-li"><fa :icon="['fab', 'linkedin']"/></span>Linkedin</a></li>
              </ul>
            </md-card-content>
          </md-ripple>
        </md-card>
      </no-ssr>
    </div>
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
  },
  mounted () {
    document.querySelector('.app-container').classList.add('visible')
  }
}
</script>

<style lang="css">
</style>
