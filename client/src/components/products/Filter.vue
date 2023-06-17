<script setup>
const props = defineProps({
  filter: {
    type: String,
    default: 'No content found!'
  }
})
</script>
<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle border rounded-5 d-flex justify-content-center align-items-center"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {{ filter }}
    </a>

    <ul class="dropdown-menu mega-menu">
      <li class="border w-100">
        <div class="row">
          <slot />
        </div>
      </li>
    </ul>
  </li>
</template>
<style scoped>
.nav-mega {
  width: 100%;
}
.nav-mega .dropdown:first-child {
  position: static;
}

.nav-mega .dropdown-menu.mega-menu {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -moz-border-radius-topleft: 0;
  -webkit-border-top-left-radius: 0;
  border-top-left-radius: 0;
  -moz-border-radius-topright: 0;
  -webkit-border-top-right-radius: 0;
  border-top-right-radius: 0;
  min-width: auto;
  width: 100%;
  margin-top: 0;
  padding: 0;
  border-color: #ccc;
}
.nav-mega .dropdown-menu.mega-menu > li {
  padding: 20px;
}
.nav-mega .dropdown-menu.mega-menu .media-list .media {
  padding: 10px;
  font-size: 13px;
}
.nav-mega .dropdown-menu.mega-menu .media-list .media-heading {
  font-size: 16px;
}
.nav-link {
  width: 7rem;
}
.test {
  background-color: white;
}
.test:hover,
.test:focus,
.test:active {
  background-color: white;
}
li {
  list-style: none;
}
.width {
  width: 200px;
}
</style>
