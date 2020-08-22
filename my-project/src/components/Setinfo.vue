<template>
    <section>
        <h5 class="center-align">Profile</h5>

        <div class="card horizontal" style="max-width:400px;margin:0 auto;" v-if="user">
            <div class="card-image" style="margin-top:25px;margin-left:10px;">

                <img
                    :src="user.photoURL + '?type=large'"
                    style="width:200px;height:200px;border-radius:50%;border:4px solid #333"
                />
                <img
                    :src="'//chart.googleapis.com/chart?cht=qr&chs=200x200&chl=' + user.uid"

                />


            </div>
            <div class="card-stacked">
                <div class="card-content">
                    <p>
                        name:
                        <strong>{{user.displayName}}</strong>
                        <br />email:
                        <strong>{{user.email}}</strong>
                        <br />phoneNumber:
                        <strong>{{user.phoneNumber}}</strong>
                       <!-- <br />uid:
                        <strong>{{user.uid}}</strong> -->

                        <br />Authorization Method:
                        <strong class="teal-text">{{user.providerData[0].providerId}}</strong>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>


 import * as firebase from "firebase"

export default {
    data() {
        return {
            user: null
        };
    },
    components: {

    },
    created() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.user = user;
                var user = firebase.auth().currentUser;
user.updateProfile({
  displayName: "안선모",
  photoURL: "https://i.ibb.co/MgHgKLq/Picture1.jpg"
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
            }
        });
    }
};
</script>
