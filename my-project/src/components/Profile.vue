<template>
    <section>
        <h1>QR 출입인증 시스템</h1>


        <div class="card horizontal" style="max-width:400px;margin:0 auto;" v-if="user">
            <div class="card-image" style="margin-top:25px;margin-left:10px;">

                <img
                    :src="user.photoURL + '?type=large'"
                    style="width:200px;height:200px;border-radius:50%;border:4px solid #333"
                />
                <img
                    :src="'//chart.googleapis.com/chart?cht=qr&chs=200x200&chl=' + user.uid"

                />
                <h1 style="margin-top:0px">{{user.displayName}}님</h1>


            </div>
            <div class="card-stacked">
                <div class="card-content">
                    <p>
                        <br />Authorization Method:
                        <strong class="teal-text">{{user.providerData[0].providerId}}</strong>
                        <br />Service Credentials:
                        <strong class="teal-text">$$jvyA9_4s8LHUF8j42%x</strong>
                        <br />Developed by:
                        <strong class="teal-text">Sunmo An(sunmoan@sunmo.dev)</strong>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
h1{
  font-weight: 700;
  font-size: 2.3em;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

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
            }
        });
    }
};
</script>
