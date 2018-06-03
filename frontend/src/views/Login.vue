<template>
    <div class="container">
        <h3>Please enter your credentials for login</h3>
        <div>
            <div class="form-group row">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                <input type="email" v-model="email" class="form-control" id="inputEmail3" name="email" placeholder="Email">
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                <input type="password" v-model="password" class="form-control" id="password" name="password" placeholder="Password">
                </div>
            </div>
            <div class="form-group row text-center">
                <div class="col-sm-12">
                    <button v-on:click="signIn" class="btn btn-primary btn-lg">Login</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {login} from '../utils/auth'

export default {
    data: function() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signIn: function(){
            login(this.email, this.password)
        }
    }    
}
</script>

