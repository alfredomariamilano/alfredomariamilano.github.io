import Vue from 'vue'
// the component
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// the library
import fontawesome from '@fortawesome/fontawesome'
// add more icon categories as you want them, even works with pro packs
// import { faEnvelope, faHome, faInfo, faInfoSquare } from '@fortawesome/fontawesome-pro-light'
import light from '@fortawesome/fontawesome-pro-light'
// asociate it to the library, if you need to add more you can separate them by a comma
// fontawesome.library.add(faEnvelope, faHome, faInfo, faInfoSquare)
fontawesome.library.add(light)
Vue.component('fa', FontAwesomeIcon)
