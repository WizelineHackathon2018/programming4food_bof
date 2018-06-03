import Firebase from 'firebase'
import router from '../router'
import swal from 'sweetalert2'

export function login(email, password){
    Firebase.auth().signInWithEmailAndPassword(email, password).then(
        function(user){
            router.replace('dashboard')
        },
        function(error){
            alert("Oops. " + error.message)
        }
    )
}

export function isLoggedIn() {
    return Firebase.auth().currentUser
}

export function logout() {
    Firebase.auth().signOut().then(() => {
        router.replace('login')
    })
}

export function register(email, password) {
    Firebase.auth().createUserWithEmailAndPassword(email, password).then(
        function(user) {
            swal(
                'Welcome to the Band!',
                'Your account has been created!',
                'success'
              )
            router.replace('login')
        },
        function(error) {
            alert('Oops. ' + error.message)
        }
    )
}