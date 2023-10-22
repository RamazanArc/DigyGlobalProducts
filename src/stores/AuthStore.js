import {defineStore} from "pinia";
import router from "../router/index.js";
import {getAuth} from "firebase/auth";

import { createUserWithEmailAndPassword ,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
}
    from "firebase/auth";
import {useRouter} from "vue-router";

export const useAuthStore = defineStore({
    id: 'storeAuth',
    state:() => {
        return{
            email:'',
            password:'',
        }
    },
    getters:{

    },

    actions:{
        async signUp(){
            try {
                const user = await createUserWithEmailAndPassword(getAuth(),this.email,this.password);
                if (user){
                    router.push("/about")
                }
            }catch (error){
                console.log(error)
            }
        },
        async login(){
            try {
                const res = await signInWithEmailAndPassword(getAuth(),this.email,this.password)
                if (res){
                    router.push("/about")
                }
            }catch (error){
                console.log(error)
            }
        },
        async logout(){
            await signOut(getAuth())
            router.push("/login")
            this.email = ''
            this.password = ''
        }
    }
})