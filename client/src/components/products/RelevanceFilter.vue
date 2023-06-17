<script setup>
const props = defineProps({
  relevancefilter: {
    type: String,
    default: 'No content found!'
  }
})
</script>
<template>
  <li class="nav-item dropdown d-flex">
    <a
      class="nav-link dropdown-toggle border rounded-5 d-flex justify-content-center align-items-center"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {{ relevancefilter }}
    </a>

    <ul class="dropdown-menu width">
      <li class="d-flex justify-content-center">
        <div class="row d-flex justify-content-center align-items-center">
          <slot />
        </div>
      </li>
    </ul>
  </li>
</template>
