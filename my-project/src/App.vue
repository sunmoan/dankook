<template>
  <div id="app">
    <img v-on:click="mainimgclick" src="./assets/logo.jpg" width="350px">
    <router-view/>
    <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
  mainimgclick: function() {
        this.$router.push('/')
 },

}
}

</script>

<style>
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
#app {
  font-family: 'NanumSquare', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}
</style>


