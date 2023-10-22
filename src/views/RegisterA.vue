<template>
  <div class="container">
    <main class="register-page">
      <h1>Create a Account</h1>
      <p><input type="text" placeholder="Email" v-model="store.email" /></p>
      <p><input type="password" placeholder="Password" v-model="store.password" /></p>
      <input type="button" @click="register" value="Submit"/>
    </main>
  </div>
</template>
<script setup>
import {useAuthStore} from "../stores/AuthStore.js";
const store = useAuthStore()
const register = async()=>{
  store.signUp()
}
//*************************************** PİNİA OLMADAN************************************************
// import {ref} from "vue";
// import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import {useRouter} from "vue-router";
// const email = ref("");
// const password = ref("");
// const router = useRouter()
// const register = () => {
//   createUserWithEmailAndPassword(getAuth(), email.value, password.value) //email ve sifreyi alıyor
//       .then(() => {
//         console.log("Succsessfully Registered");
//         router.push('/about') //başarılı olursa about page a yolluyor
//       })
//       .catch((error) => {
//         console.log(error.code);
//         alert(error.message);
//       });
// };
import {ref} from "vue";
import {createUserWithEmailAndPassword,getAuth} from "firebase/auth";
//*******************************************************************************************************************

</script>


<style>
.container {
  border-radius: 5px;
  width: 375px;
  margin: 5px;
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border: 1px solid #d0d1d5;
  background-color: #c8e8e9;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 5px 10px;
}
input,
select {
  padding: 5px;
  outline: none;
  width: 100%;
  margin: 5px 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input[type="button"] {
  display: inline-block;
  margin-top: 12px;
  text-decoration: none;
  border: 2px solid transparent;
  font-weight: bold;
  padding: 13px 30px;
  border-radius: 30px;
  transition: .4s;
}
input[type="button"]:hover{
  background: #5029bc;
}
</style>