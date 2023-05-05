<script setup>
import User from '../../components/userComponents/User.vue'
import UserItem from '../../components/userComponents/UserItem.vue'
import UserText from '../../components/userComponents/UserText.vue'
</script>
<template>
  <form action="">
    <User>
      <UserItem class="cont w-50 d-flex align-items-end justify-content-center">
        <UserText #h5>My account</UserText>
      </UserItem>

      <UserItem class="h-100 w-50 p-5 d-flex flex-column">
        <UserText #h6>Email*</UserText>
        <input
          placeholder="Type Name"
          class="p-3 border-bottom border-2 border-success"
          type="text"
        />
        <br />
        <UserText #h6>Password*</UserText>
        <input
          placeholder="Type Surname"
          class="p-3 border-bottom border-2 border-success"
          type="text"
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
