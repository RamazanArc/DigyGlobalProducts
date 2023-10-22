<template>
  <div class="container">
    <h1>Sign in to Account</h1>
    <p><input type="text" placeholder="Email" v-model="store.email" /></p>
    <p><input type="password" placeholder="Password" v-model="store.password" /></p>
<!--    <p v-if="errMSg">{{errMSg}}</p>-->
    <input type="button" @click="handleLogin" value="Submit"/>
  </div>



</template>
<script setup>


import {useProductStore} from "../stores/ProductStore.js";
import {useAuthStore} from "../stores/AuthStore.js";
const store = useAuthStore()

const handleLogin = async()=>{
  store.login()
}

// ***************************** PİNİA OLMDAN ***********************************************************************
// import {ref} from "vue";
// import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import {useRouter} from "vue-router";
// const email = ref("");
// const password = ref("");
// const errMSg = ref();
// const router = useRouter()
// const handleLogin = () => {
//   signInWithEmailAndPassword(getAuth(), email.value, password.value)
//       .then(() => {
//         console.log("Succsessfully Signed In");
//         router.push('/about')
//       })
//       .catch((error) => {
//         console.log(error.code);
//         switch (error.code){
//           case "auth/invalid-email":
//             errMSg.value = "Invalid Email";
//             break;
//           case "auth/user-not-found":
//             errMSg.value = "No account with that email was found";
//             break;
//           case "auth/wrong-password":
//             errMSg.value = "Incorrect password";
//             break;
//           default:
//             errMSg.value = "Email or password incorrect";
//             break;
//         }
//       });
// };

//****************************************************************************************************************************

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