<template lang="html">
  <section class="container transition-container">
    <div class="content-container md-scrollbar">
      <md-card md-with-hover>
        <md-ripple>
          <md-card-header>
            <md-avatar>
              <img src="/images/me.jpg" alt="Alfredo Maria Milano">
            </md-avatar>
            <md-card-header-text>
              <div class="md-title">Alfredo Maria Milano</div>
              <div class="md-subhead">Proudly Italian</div>
            </md-card-header-text>

          </md-card-header>

          <md-card-content>
            As an avid internet user, I developed an increasing interest on how things work in the web. This led me to study using online platforms and then to enroll in a Java course, while still having a full-time job. Realizing I liked programming, I decided to join a coding bootcamp to develop my skills in programming and start a new life, doing something I really enjoy.
            <br>
            <br>
            <strong>Projects section coming soon...</strong>
          </md-card-content>
        </md-ripple>
      </md-card>
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
  }
}
</script>

<style lang="css">
</style>
