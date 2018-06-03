<template>
    <div class="container">
        <h1>Create a Cool Team</h1>
        <p>A team is the core of any development or work for your clients.</p>
        <div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Team Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="team.team_name">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Max Team Members</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" v-model="team.team_max_members">
                </div>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="team.team_description"></textarea>
            </div>
            <div class="form-group row text-center">
                <div class="col-sm-12">
                    <button v-on:click="insertTeam" class="btn btn-primary btn-lg">Create Team</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Firebase from '@/utils/firebase-connector'

let db = Firebase.database()
let teamsRef = db.ref('Teams')

export default {
    name: 'team-create',
    data: function() {
        return {
            team: {
                team_name: '',
                team_description: '',
                team_max_members: '',
                team_leader: Firebase.auth().currentUser.uid
            }
        }
    },
    firebase:{
        teams: db.ref('Teams')
    },
    methods:{
        insertTeam: function(){
            console.log(Firebase.auth().currentUser)
            teamsRef.push(this.team)

            $.notify("Team has been created", "success");
            
            this.team.team_name = '',
            this.team.team_description = '',
            this.team.team_max_members = ''
        }
    }
}
</script>

