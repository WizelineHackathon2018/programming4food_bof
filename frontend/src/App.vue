<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Band of Freelancers</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav mr-auto">
        </div>
        <ul class="navbar-nav" v-show="!isLoggedIn()">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
        </ul>
        <ul class="navbar-nav" v-show="isLoggedIn()">
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" v-on:click="bye()" >Logout</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
    <footer class="footer">
      <div class="container">
        Powered by Programming 4 Food
      </div>
    </footer>

  </div>
</template>
<script>
import {isLoggedIn, logout} from './utils/auth'

export default {
  methods: {
    isLoggedIn(){
      return isLoggedIn()
    },
    bye(){
      logout()
    }
  }
}
</script>
