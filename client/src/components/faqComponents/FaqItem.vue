<script setup>
defineProps({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  headerId: {
    type: String,
    required: true
  },
  collapseId: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="accordion-item">
    <h2 class="accordion-header" :id="headerId">
      <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#${collapseId}`"
        aria-expanded="false"
        :aria-controls="collapseId"
      >
        {{ question }}
      </button>
    </h2>
    <div
      :id="collapseId"
      class="accordion-collapse collapse"
      :aria-labelledby="headerId"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        {{ answer }}
      </div>
    </div>
  </div>
</template>
<style scoped>
button:focus,
button:active,
button:hover {
  outline: none;
  box-shadow: none;
}
button {
  color: black !important;
  background-color: rgb(231, 231, 231) !important;
  font-family: 'Poppins', sans-serif;
}
button:hover,
button:focus {
  color: white !important;
  background-color: rgb(159, 159, 159) !important;
}
.accordion-body {
  font-size: 0.85rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}
</style>
