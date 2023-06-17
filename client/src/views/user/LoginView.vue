<script setup>
import User from '../../components/userComponents/User.vue'
import UserItem from '../../components/userComponents/UserItem.vue'
import UserText from '../../components/userComponents/UserText.vue'
import Copyright from '../../components/CopyrightComponent.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import apiClient from '../../api.js'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  try {
    const response = await apiClient.post('/auth/login', {
      email: email.value,
      password: password.value
    })

    // Handle response and navigate to home
    router.push('/')
  } catch (error) {
    // Handle error
  }
}
</script>
<template>
  <form @submit.prevent="login">
    <User>
      <UserItem class="cont w-50 d-flex align-items-end justify-content-center">
        <UserText #h5>My account</UserText>
      </UserItem>

      <UserItem class="h-100 w-50 p-5 d-flex flex-column">
        <UserText #h6>Email*</UserText>
        <input
          v-model="email"
          placeholder="Type Email"
          class="p-3 border-bottom border-2 border-success"
          type="email"
        />
        <br />
        <UserText #h6>Password*</UserText>
        <input
          v-model="password"
          placeholder="Type Password"
          class="p-3 border-bottom border-2 border-success"
          type="password"
        />
      </UserItem>
      <UserItem class="mt-3 w-50 d-flex flex-column align-items-center">
        <button class="btn btn-primary w-25">Login</button>
        <br />
        <p class="text-secondary">Forgot password?</p>
        <div class="d-flex">
          <p class="text-secondary me-2">Don't have an account?</p>
          <router-link class="link text-success" to="/Register">Register</router-link>
        </div>
      </UserItem>
    </User>
  </form>
  <Copyright />
</template>
<style scoped>
input {
  outline: none;
  border: none;
}
.link {
  text-decoration: none;
  font-weight: 600;
}
.cont {
  height: 10vh;
}
</style>
