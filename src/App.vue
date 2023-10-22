<template>
    <div class="app">
      <SideBar/>
      <router-view/>
    </div>
</template>

<style lang="scss">
:root {
  --primary: #4ade80;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans',sans-serif;
}
body{
  background: var(--light);
}
button{
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
.app{
  display: flex;

  main{
    flex: 1 1 0;
    padding: 2rem;
    
    @media (max-width: 768px){
      padding-left: 6rem;
    }
  }
}


</style>

<script setup>
import SideBar from "./components/SideBar.vue";
// import {onMounted,ref} from "vue";
// import {getAuth,onAuthStateChanged,signOut} from "firebase/auth";
// import {useRouter} from "vue-router";
// const router = useRouter();
//
// const isLoggedIn = ref(false);
//
// let auth;
// onMounted(() => {
//   auth = getAuth();
//   onAuthStateChanged(auth, (user) => {
//     if (user){
//       isLoggedIn.value = true;
//     }else{
//       isLoggedIn.value = false;
//     }
//   });
// });
//
// const handleSignOut = () => {
//   signOut(auth).then(() => {
//     router.push("/");
//   });
// };


</script>
