import Firebase from 'firebase'

let config = {
    apiKey: 'AIzaSyDmXRURCwuxiibGJv15_rp4-F3pDOlAjyw',
    authDomain: 'bandoffreelancers.firebaseapp.com',
    databaseURL: 'https://bandoffreelancers.firebaseio.com',
    projectId: 'bandoffreelancers',
    storageBucket: '',
    messagingSenderId: '1013029396455'
  }

  export default !Firebase.apps.length ? Firebase.initializeApp(config) : Firebase.app();
