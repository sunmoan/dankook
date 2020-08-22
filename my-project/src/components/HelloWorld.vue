<template>
  <div class="hello">
    <h1 style="margin-bottom:10px">QR 출입인증 시스템</h1>
    <h3 style="font-size:0.9em;margin-top:0px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;By  안선모&lt;sunmoan@sunmo.dev&gt;</h3>

    <h2>이미 인증한 적이 있다면?</h2>

  <button id="findqrbutton" class="btn btn-outline-primary" v-on:click="btn_gologin"><i class="fal fa-search"></i> QR 조회하러 가기</button>
    <h2>첫 인증이라면?</h2>
    <button class="btn btn-outline-success" v-on:click="btn_gosignup" id="makeqrbutton">    <i class="fal fa-qrcode"></i> QR 발급하러 가기</button>

      <h2>관리자라면?</h2>
    <button id="adminbutton" class="btn btn-outline-warning" onclick="alert('[에러코드:973] Not authorized! \n접근 권한이 없습니다.\n본 메시지가 오류라고 생각하신다면\n안선모<sunmoan@sunmo.dev>에게 연락주세요')"><i class="fas fa-wrench"></i> 관리자 접속</button>
  </div>



</template>



<style>

.btn {
  font-family: 'NanumSquare', sans-serif !important;
  display: inline-block;
  font-weight: 400;
  color: #212529;
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

.btn-outline-info {

  color: #17a2b8;
  border-color: #17a2b8;
}

#adminbutton {
  color: #ffc107;
  border-color: #ffc107;
}

#findqrbutton {
  color: #007bff;
  border-color: #007bff;
}

#makeqrbutton {
  color: #28a745;
  border-color: #28a745;
}

</style>

<script>

  import firebase from 'firebase'

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
      },
      btn_gosignup: function() {
        this.$router.push('signup')
      },
      btn_gologin: function() {
        this.$router.push('login')
      }

    }
  }
</script>

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
