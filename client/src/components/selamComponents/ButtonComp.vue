<script setup></script>
<template>
  <div class="w-25 d-flex align-items-center justify-content-end">
    <!-- <router-link to="" type="button" class="btn btn-primary">Login</router-link>
    <router-link to="" type="button" class="btn btn-success m-3">Register</router-link> -->
    <slot name="auth-buttons" />
  </div>
</template>
<style scoped>
.btn {
  font-family: 'Poppins', sans-serif;
}
</style>
