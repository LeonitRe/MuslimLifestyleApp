<template>
  <div class="h-75 cont d-flex justify-content-center align-items-center">
    <p>
      <slot name="text1" />
    </p>
    <h2>
      <slot name="leaderships" />
    </h2>
  </div>
</template>
<style scoped>
.cont {
  height: 10vh;
  font-weight: 400;
  color: gray;
  padding: 0 10rem 0 10rem;
}
h2 {
  color: #383838;
}
p,
h2 {
  font-family: 'Poppins', sans-serif;
}
</style>
