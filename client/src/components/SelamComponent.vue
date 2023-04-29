<script setup>
import ButtonComp from './selamComponents/ButtonComp.vue'
import ImageComp from './selamComponents/ImageComp.vue'
import TitleComp from './selamComponents/TitleComp.vue'
</script>
<template>
  <main>
    <div class="cont d-flex justify-content-between">
      <ImageComp />
      <TitleComp />
      <ButtonComp class="p-3" #auth-buttons>
        <router-link to="" type="button" class="btn btn-primary m-4">Login</router-link>
        <router-link to="" type="button" class="btn btn-success">Register</router-link>
      </ButtonComp>
    </div>
  </main>
</template>
<style scoped>
.cont {
  height: 13vh;
}
.btn,
h1 {
  font-family: 'Poppins', sans-serif;
}
h1 {
  font-size: 40px;
  font-weight: 600;
  background-image: radial-gradient(green, #553c9a);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
</style>
