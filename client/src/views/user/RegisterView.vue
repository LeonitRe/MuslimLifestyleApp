<script setup>
import User from '../../components/userComponents/User.vue'
import UserItem from '../../components/userComponents/UserItem.vue'
import UserText from '../../components/userComponents/UserText.vue'
import Copyright from '../../components/CopyrightComponent.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import apiClient from '../../api.js'

const firstname = ref('')
const lastname = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

const register = async () => {
  try {
    const response = await apiClient.post('/auth/register', {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value
    })

    // Handle response and navigate to login
    router.push('/login')
  } catch (error) {
    // Handle error
  }
}
</script>

<template>
  <form @submit.prevent="register">
    <User>
      <UserItem class="cont w-50 d-flex align-items-end justify-content-center">
        <UserText #h5>Create account</UserText>
      </UserItem>
      <UserItem class="h-100 w-50 p-5 d-flex flex-column">
        <UserText #h6>First Name*</UserText>
        <input
          v-model="firstname"
          placeholder="Type Firstname"
          class="p-3 border-bottom border-2 border-success"
          type="text"
        />
        <br />
        <UserText #h6>Last Name*</UserText>
        <input
          v-model="lastname"
          placeholder="Type Lastname"
          class="p-3 border-bottom border-2 border-success"
          type="text"
        />
        <br />
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
        <button class="btn btn-success w-25">Register</button>
        <br />
        <div class="d-flex">
          <p class="text-secondary me-2">Already have an account?</p>
          <router-link class="link text-success" to="/Login">Login</router-link>
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
