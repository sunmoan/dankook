// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyDY0YpJW6XvVRVfinqQZG4AEynh6YRmUM0',
  authDomain: 'dankook-3f7df.firebaseapp.com',
  databaseURL: 'https://dankook-3f7df.firebaseio.com',
  projectId: 'dankook-3f7df',
  storageBucket: 'dankook-3f7df.appspot.com',
  messagingSenderId: '858493378847',
  appId: '1:858493378847:web:bfca27bad30f253257d02a',
  measurementId: 'G-M64W205FS8'
}

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
