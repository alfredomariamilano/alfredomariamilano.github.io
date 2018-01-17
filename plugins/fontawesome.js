import Vue from 'vue'
// the component
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// the library
import fontawesome from '@fortawesome/fontawesome'
// add more icon categories as you want them, even works with pro packs
import { faEnvelope, faAddressBook, faInfo, faHome } from '@fortawesome/fontawesome-pro-light'
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands'
// asociate it to the library, if you need to add more you can separate them by a comma
fontawesome.library.add(faEnvelope, faAddressBook, faInfo, faHome, faGithub, faLinkedin)

Vue.component('fa', FontAwesomeIcon)
