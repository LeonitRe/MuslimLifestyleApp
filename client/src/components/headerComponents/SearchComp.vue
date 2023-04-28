<template>
  <div class="border-end border-light search d-flex align-items-center">
    <img src="../../assets/images/layoutsImages/search.png" alt="" class="h-50" />
    <input type="text" placeholder="Search" />
  </div>
</template>
<style scoped>
.search {
  width: 59vw;
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
</style>
