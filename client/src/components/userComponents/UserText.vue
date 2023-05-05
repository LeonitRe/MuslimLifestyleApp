<template>
  <h5 class="text-primary">
    <slot name="h5" />
  </h5>
  <h6 class="text-primary">
    <slot name="h6" />
  </h6>
</template>
<style scoped>
h5,
h6 {
  font-weight: 600;
}
</style>
