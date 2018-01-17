module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'personal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My  portfolio.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#00ff96' },
  css: ['~/assets/scss/style.scss'],
  // modules: [
  //   'nuxt-vue-material'
  // ],
  // vueMaterial: {
  //   theme: 'black-green-light',
  //   css: true
  // },
  plugins: [
    { src: '~/plugins/vue-material.js', ssr: false },
    { src: '~/plugins/fontawesome.js', ssr: true }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
