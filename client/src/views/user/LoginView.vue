<script setup>
import User from '../../components/userComponents/User.vue'
import UserItem from '../../components/userComponents/UserItem.vue'
import UserText from '../../components/userComponents/UserText.vue'
import Copyright from '../../components/CopyrightComponent.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import apiClient from '../../api.js'

let email = ''
let password = ''
const router = useRouter()

const errors = ref({ email: '', password: '', login: '' })

const login = async () => {
  errors.value = {}

  if (!email) {
    errors.value.email = 'Email is required'
  }

  if (!password) {
    errors.value.password = 'Password is required'
  }

  if (Object.keys(errors.value).length > 0) {
    return
  }

  try {
    const response = await apiClient.post('/auth/login', {
      email,
      password
    })

    const { data } = response
    if (data.token) {
      localStorage.setItem('token', data.token)
      router.push('/')
    } else {
      errors.value.login = 'Email or password is incorrect'
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      errors.value.login = 'Email or password is incorrect'
    }
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
          :class="{ 'border-danger': errors.email }"
        />
        <span v-if="errors.email" class="text-danger">{{ errors.email }}</span>
        <br />
        <UserText #h6>Password*</UserText>
        <input
          v-model="password"
          placeholder="Type Password"
          class="p-3 border-bottom border-2 border-success"
          type="password"
          :class="{ 'border-danger': errors.password }"
        />
        <span v-if="errors.password" class="text-danger">{{ errors.password }}</span>
        <span v-if="errors.login" class="text-danger">{{ errors.login }}</span>
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
