<template>
    <div class="flex justify-center h-screen">
        <div class="bg-[#F8F8F8] w-4/5 hidden lg:block">
                <div class="absolute mx-8 mt-3 block">
                    <a href="#" target="_self" class="brand-logo ml-1 gram-logo">
                        <h2 class="font-semibold text-2xl text-[#042AEC]">Gram</h2>
                    </a>
                </div>
                <div class="h-full flex items-center justify-center">
                    <div class="">
                        <img src="../assets/img/login-v2.32261d6f.svg" alt="img" class="mx-auto md:w-4/5 lg:w-11/12">
                    </div>
                </div>
        </div>
        <div class="container lg:w-2/5 px-16 sm:w-full md:w-3/5">
            <div class="relative top-1/3 tracking-tighter ">
                <form class="text-[#6E6B7B] text-sm" @submit.prevent="login">
                    <h2 class="text-[#5e5873] leading-6 text-2xl mb-4 font-medium ">Добро пожаловать в
                        Gram! 👋</h2>
                    <p class=" text-base font-normal mb-5">Пожалуйста, войдите
                    в свой аккаунт и начните работу
                    </p>
                    <label for="login-phone" class="my-3 tracking-tighter">Номер телефона</label><br>
                    <input 
                        class="border rounded-md w-full p-2 mt-1" 
                        type="tel" 
                        name="login-phone" 
                        id="login-phone" 
                        required 
                        v-model="phone"
                        placeholder="+992928888888">
                    <div class="flex justify-between mt-4 mb-1 tracking-tighter">
                        <label class="" for="password">Пароль</label>
                        <a class="text-[#005eff]" href="#" target="_self" for="password">Забыли пароль?</a>
                    </div>
                    <input 
                        class="border rounded-md w-full p-2" 
                        type="password" 
                        name="login-password" 
                        id="login-password" 
                        placeholder="Password" 
                        required
                        v-model="password">
                    <div v-if="error"><p class="text-red-600 mt-2">Введите правильный логин или пароль!</p></div>
                    <div class="my-2 text-base flex items-center">
                        <input type="checkbox" name="login-checkbox" id="login-checkbox" class="mr-2">
                        <label for="label-checkbox">Запомнить</label>
                    </div>
                    <button type="submit" class="w-full border rounded-md bg-[#005eff] p-3 text-white hover:shadow-xl shadow-[#005eff]">Вход</button>
                </form>
            </div>
    
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'AuthLogin',
    data() {
        return {
            phone: '',
            password: '',
            error: false
        }
    },
    methods: {
        login() {
            const user = {
                login: this.phone,
                password: this.password
            }
            axios.post('/auth/login', user)
            .then(res => {
                let token = res.data.access_token
                localStorage.setItem('user-token', token)
                this.$store.state.isAuthenticate = true
                this.$router.push('/')
            })
            .catch(err => {
                this.error = true
                console.log(err);
            })
        },
    }
}
</script>

<style scoped>
button, [type='button'], [type='reset'], [type='submit'] {
    -webkit-appearance: button!important;
    background-image: none!important;
    background-color: rgb(0 94 255 / var(--tw-bg-opacity));;
}
</style>