import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Firebase from 'firebase'

Vue.config.productionTip = false

let app
let config = {
  apiKey: 'AIzaSyDmXRURCwuxiibGJv15_rp4-F3pDOlAjyw',
  authDomain: 'bandoffreelancers.firebaseapp.com',
  databaseURL: 'https://bandoffreelancers.firebaseio.com',
  projectId: 'bandoffreelancers',
  storageBucket: '',
  messagingSenderId: '1013029396455'
}

Firebase.initializeApp(config)
Firebase.auth().onAuthStateChanged(function(user){
  if(!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
