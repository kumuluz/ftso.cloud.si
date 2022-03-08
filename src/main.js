// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuetify from 'vuetify'
import "vuetify/dist/vuetify.min.css"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  head.script.push({
    src: 'https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js'
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto'
  });
  Vue.component('Layout', DefaultLayout);
  Vue.use(Vuetify);
  Vue.use(BootstrapVue);
  Vue.use(IconsPlugin);
}
