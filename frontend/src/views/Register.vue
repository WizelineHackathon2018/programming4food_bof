<template>
    <div class="container">
        <h3>Glad to see you join the army!</h3>
        <p>Please enter these data for complete your recruitment</p>
        <div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                <input type="email" v-model="email" class="form-control" placeholder="Email">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Confirm Password</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="password_confirm" placeholder="Confirm Password" v-model="confirmPassword">
                </div>
            </div>
            <div class="form-group row text-center">
                <div class="col-sm-12">
                    <button v-on:click="signUp" class="btn btn-primary btn-lg">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {register} from '../utils/auth'

export default {
    data: function() {
        return {
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods:{
        signUp: function() {
            register(this.email, this.password)
        }
    }
}
</script>
