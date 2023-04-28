<template>
  <header>
    <div class="cont d-flex">
      <LogoComp />
      <SearchComp />
      <div
        class="border-end border-light content-3 d-flex justify-content-center align-items-center"
      >
        <img src="../assets/images/layoutsImages/carton.jpg" alt="" class="icon" />
      </div>
      <div
        class="border-end border-light content-3 d-flex justify-content-center align-items-center"
      >
        <img src="../assets/images/layoutsImages/heart.jpg" alt="" class="icon" />
      </div>
      <div class="content-3 d-flex justify-content-center align-items-center">
        <img src="../assets/images/layoutsImages/user.jpg" alt="" class="icon" />
      </div>
    </div>
  </header>
</template>

<script setup>
import LogoComp from './headerComponents/LogoComp.vue'
import SearchComp from './headerComponents/SearchComp.vue'
</script>

<style scoped>
.cont {
  height: 12vh;
  background-color: rgba(52, 152, 219, 1);
}

.content-1 {
  width: 14vw;
}

.content-2 {
  width: 59vw;
}

.content-3 {
  width: 9vw;
}

input {
  background-color: rgba(52, 152, 219, 1);
  border: none;
  font-size: 1.3rem;
}

input:focus {
  outline: none;
}

input::placeholder {
  color: white;
}

.icon {
  height: 25%;
  width: 16%;
}
</style>
