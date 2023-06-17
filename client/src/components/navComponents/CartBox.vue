<template>
  <div class="card border-0 border-bottom border-3 border-dark" style="width: 15rem">
    <slot />
  </div>
</template>
<style scoped>
.card {
  perspective: 1000px;
  position: relative;
  overflow: hidden;
}
</style>
