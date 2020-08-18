import Vue from 'vue'
import App from './App'

import '../src/static/css/font.css'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
