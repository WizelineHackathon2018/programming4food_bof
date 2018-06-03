import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Firebase from './utils/firebase-connector'
import Vuefire from 'vuefire'

Vue.config.productionTip = false

Vue.use(Vuefire)

let app

Firebase.auth().onAuthStateChanged(function(user){
  if(!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
