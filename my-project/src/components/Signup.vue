<template>
  <div class="hello">
    <h1>QR 출입인증 시스템</h1>

    <h2>전화번호로 인증하기</h2>

    <div id="firebaseui-auth-container"></div>
     <input class="input" type="tel" v-model="phonenumber" placeholder="전화번호를 입력하세요">
     <button class="btn btn-outline-primary" id="btn-auth" v-on:click="signUp">인증하기</button>
    <ul>
      <li>

      </li>
    </ul>
    <h2>페이스북으로 인증하기</h2>


  </div>

</template>

<script>
 import * as firebaseui from "firebaseui"
 import * as firebase from "firebase"

  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signIn: function() {

















        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          function(user) {
            alert("Well done")
          },
          function(err){
            alert('Oops ' + err.message)
          }
        );
      }
    }
  }
</script>
<style>


.btn {
  font-family: 'NanumSquare', sans-serif !important;
  display: inline-block;
  font-weight: 400;

  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.2;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-outline-primary {
  color: #007bff;
  border-color: #007bff;
}
/*
.input {
    border-color: #343a40;
    border-style: solid;
      border-width: 1px;
    font-family: 'NanumSquare', sans-serif !important;
  display: inline-block;
  font-weight: 400;

  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;

  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1;
  border-radius: 0.25rem;

}
*/
</style>



<!-- Add "scoped" attribute to limit CSS to this component only -->
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
