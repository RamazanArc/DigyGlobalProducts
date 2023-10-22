<template>
  <aside :class="`${is_expanded && 'is_expanded'}`">
    <div class="logo">
      <img src="../assets/digyy-removebg-preview.png" alt="logo">
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>
    <h3>Menu</h3>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link class="button"  to="/about">
        <span class="material-icons">feed</span>
        <span class="text">About</span>
      </router-link>
      <router-link class="button" to="/contact">
        <span class="material-icons">email</span>
        <span class="text">Contact</span>
      </router-link>
      <router-link v-if="!isLoggedIn" class="button" to="/register">
        <span class="material-icons">how_to_reg</span>
        <span class="text">Register</span>
      </router-link>
      <router-link v-if="!isLoggedIn" class="button" to="/login">
        <span class="material-icons">login</span>
        <span class="text">SignIn</span>
      </router-link>
      <button @click="handleSignOut" v-if="isLoggedIn" class="button">
        <span class="material-icons ">logout</span>
        <span class="text">LogOut</span>
      </button>
    </div>
  </aside>
</template>

<script setup>
import {ref} from "vue";
const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
  localStorage.setItem("is_expanded", is_expanded.value)
}
import {onMounted} from "vue";
import {getAuth,onAuthStateChanged,signOut} from "firebase/auth";
import {useRouter} from "vue-router";
const router = useRouter();

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user){
      isLoggedIn.value = true;

    }else{
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};

</script>

<style lang="scss" scoped>
aside{
  display: flex;
  flex-direction: column;
  width: calc(2rem + 34px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  background-color: var(--dark);
  color: var(--light);

  transition: 0.2s ease-out;

  .logo{
    margin-bottom: 1rem;
    img{
      width: 2rem;
    }
  }

  .menu-toggle-wrap{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle{
      transition: 0.2s ease-out;

      .material-icons{
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }
      &:hover{
        .material-icons{
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

    h3, .button .text{
      opacity: 0;
      transition: 0.3s ease-out;
    }

  h3{
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu{
    margin: 0 -1rem;
    .button{
      display: flex;
      align-items: center;
      text-decoration: none;

      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;


      .material-icons{
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      .text{
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover, &.router-link-exact-active {
        background-color: var(--dark-alt);

        .material-icons, .text{
          color: var(--primary);
        }
      }
      &.router-link-exact-active{
        border-right: 5px solid var(--primary) ;
      }
    }

  }

  &.is_expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;
      .menu-toggle{
        transform: rotate(-180deg);
      }

    }
    h3, .button .text{
      opacity: 1;
    }

    .button{
      .material-icons{
        margin-right: 1rem;
      }
    }
  }
  
  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }


}

</style>