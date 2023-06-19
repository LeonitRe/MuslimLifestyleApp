<script setup>
import User from '../../components/userComponents/User.vue'
import UserItem from '../../components/userComponents/UserItem.vue'
import UserText from '../../components/userComponents/UserText.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import apiClient from '../../api.js'

const errors = ref({ firstname: '', lastname: '', email: '', password: '' })
const firstname = ref('')
const lastname = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

// Regular expressions
const nameRegex = /^[A-Z][a-zA-Z]*$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

const register = async () => {
  errors.value = {} // Clear previous error messages

  if (!firstname.value) {
    errors.value.firstname = 'First Name is required' // Set error message
  } else if (!nameRegex.test(firstname.value)) {
    errors.value.firstname = 'First Name must start with a capital letter'
  }

  if (!lastname.value) {
    errors.value.lastname = 'Last Name is required' // Set error message
  } else if (!nameRegex.test(lastname.value)) {
    errors.value.lastname = 'Last Name must start with a capital letter'
  }

  if (!email.value) {
    errors.value.email = 'Email is required' // Set error message
  } else if (!emailRegex.test(email.value)) {
    errors.value.email = 'Invalid Email format'
  }

  if (!password.value) {
    errors.value.password = 'Password is required' // Set error message
  } else if (!passwordRegex.test(password.value)) {
    errors.value.password =
      'Password must be at least 8 characters long and contain letters, numbers, and at least one symbol'
  }

  if (Object.keys(errors.value).length > 0) {
    return // If there are errors, stop the register process
  }

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
async function handleButtonClick(buttonName) {
  try {
    await axios.put('http://localhost:5070/api/buttonClicks/' + buttonName)
  } catch (error) {
    console.error('Error tracking button click:', error)
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
          :class="{ 'border-danger': errors.firstname }"
        />
        <span v-if="errors.firstname" class="text-danger">{{ errors.firstname }}</span>
        <br />
        <UserText #h6>Last Name*</UserText>
        <input
          v-model="lastname"
          placeholder="Type Lastname"
          class="p-3 border-bottom border-2 border-success"
          type="text"
          :class="{ 'border-danger': errors.lastname }"
        />
        <span v-if="errors.lastname" class="text-danger">{{ errors.lastname }}</span>
        <br />
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
      </UserItem>
      <UserItem class="mt-3 w-50 d-flex flex-column align-items-center">
        <button class="btn btn-success w-25">Register</button>
        <br />
        <div class="d-flex">
          <p class="text-secondary me-2">Already have an account?</p>
          <router-link
            class="link text-success"
            to="/Login"
            @click="handleButtonClick('Register User Button')"
            >Login</router-link
          >
        </div>
      </UserItem>
    </User>
  </form>
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
