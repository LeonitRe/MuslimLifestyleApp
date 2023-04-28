<script setup>
defineProps({
  link: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="link-cont">
    <button class="border-0 d-flex justify-content-center align-items-center">
      <h6>{{ link }}</h6>
    </button>
  </div>
</template>
<style scoped>
.link-cont {
  width: 11.1111111111%;
}
h6 {
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  background-image: radial-gradient(green, #553c9a);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
button {
  background-color: white;
  height: 100%;
  width: 100%;
}
</style>
