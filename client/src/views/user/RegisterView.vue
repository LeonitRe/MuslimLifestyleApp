<script setup>
import User from '../../components/userComponents/User.vue'
import UserItem from '../../components/userComponents/UserItem.vue'
import UserText from '../../components/userComponents/UserText.vue'
</script>
<template>
  <form action="">
    <User>
      <UserItem class="cont w-50 d-flex align-items-end justify-content-center">
        <UserText #h5>Create account</UserText>
      </UserItem>
      <UserItem class="h-100 w-50 p-5 d-flex flex-column">
        <UserText #h6>Name*</UserText>
        <input
          placeholder="Type Name"
          class="p-3 border-bottom border-2 border-success"
          type="text"
        />
        <br />
        <UserText #h6>Surname*</UserText>
        <input
          placeholder="Type Surname"
          class="p-3 border-bottom border-2 border-success"
          type="text"
        />
        <br />
        <UserText #h6>Email*</UserText>
        <input
          placeholder="Type Email"
          class="p-3 border-bottom border-2 border-success"
          type="text"
        />
        <br />
        <UserText #h6>Password*</UserText>
        <input
          placeholder="Type Password"
          class="p-3 border-bottom border-2 border-success"
          type="text"
        />
        <br />
        <UserText #h6>Repassword*</UserText>
        <input
          placeholder="Retype Password"
          class="p-3 border-bottom border-2 border-success"
          type="text"
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
