<template>
    <div class="container">
        <h1>My Profile</h1>
        <div class="alert alert-info">
            In order to being able for other freelancers to give you projects or joining their teams, you must fill these fields.
        </div>
        <div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">First Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="profile.first_name">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Last Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="profile.last_name">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Profession</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="profile.profession">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Years of Experience</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" v-model="profile.years_experience">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Resume</label>
                <div class="col-sm-10">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="profile.resume"></textarea>
                </div>
            </div>
            <div class="form-group row text-center">
                <div class="col-sm-12">
                    <button v-on:click="insertTeam" class="btn btn-primary btn-lg">Update Profile</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Firebase from '@/utils/firebase-connector'
import alertify from 'alertify.js'

let db = Firebase.database()
let profileRef = db.ref('Freelancers')

export default {
    name: 'profile',
    data: function() {
        return {
            profile: {
                first_name: '',
                last_name: '',
                profession: '',
                years_experience: '',
                uid: Firebase.auth().currentUser.uid
            }
        }
    },
    firebase:{
        teams: db.ref('Teams')
    },
    
    methods:{
        insertTeam: function(){
            profileRef.push(this.profile)
            alertify.success("Profile has been updated");
        }
    }
}
</script>
