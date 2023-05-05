<script setup>
import LinkComp from './navComponents/LinkComp.vue'
</script>
<template>
  <nav>
    <div class="border-1 w-100 d-flex cont">
      <LinkComp #link>
        <router-link to="" class="router border-0 d-flex justify-content-center align-items-center">
          New Arrivals
        </router-link></LinkComp
      >
      <LinkComp #link>
        <router-link to="" class="router border-0 d-flex justify-content-center align-items-center">
          Women
        </router-link></LinkComp
      >
      <LinkComp #link>
        <router-link to="" class="router border-0 d-flex justify-content-center align-items-center">
          Accessories
        </router-link></LinkComp
      >
      <LinkComp #link>
        <router-link to="" class="router border-0 d-flex justify-content-center align-items-center">
          Men
        </router-link></LinkComp
      >
      <LinkComp #link>
        <router-link to="" class="router border-0 d-flex justify-content-center align-items-center">
          Kids
        </router-link></LinkComp
      >
      <LinkComp #link>
        <router-link to="" class="router border-0 d-flex justify-content-center align-items-center">
          Fragrances
        </router-link></LinkComp
      >
      <LinkComp #link>
        <router-link to="" class="router border-0 d-flex justify-content-center align-items-center">
          Ramadan Eid
        </router-link></LinkComp
      >
      <LinkComp #link>
        <router-link to="" class="router border-0 d-flex justify-content-center align-items-center">
          Lifestyle
        </router-link></LinkComp
      >
      <LinkComp #link>
        <div class="dropdown router">
          <router-link
            to=""
            class="router d-flex justify-content-center align-items-center dropdown-toggle"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            More
          </router-link>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <router-link to="/" class="dropdown-item">Home</router-link>
            <router-link to="/AboutUs" class="dropdown-item">About Us</router-link>
            <router-link to="/Contactus" class="dropdown-item">Contact us</router-link>
            <router-link to="/FAQs" class="dropdown-item">FAQs</router-link>
          </div>
        </div>
      </LinkComp>
    </div>
  </nav>
</template>
<style scoped>
.cont {
  height: 12vh;
}
.router {
  background-color: white;
  height: 100%;
  width: 100%;
  font-weight: 800;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  background-image: radial-gradient(rgb(0, 139, 0), rgba(52, 152, 219, 1));
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

button:focus,
button:hover {
  border: none;
  background-color: white;
  height: 100%;
  width: 100%;
  font-weight: 800;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  background-image: radial-gradient(rgb(0, 139, 0), rgba(52, 152, 219, 1));
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
.dropdown-menu {
  display: none; /* hide the dropdown menu by default */
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  min-width: 100%;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 1rem;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.dropdown:hover .dropdown-menu {
  display: block; /* show the dropdown menu on hover */
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}

.dropdown-item:hover {
  background-color: #f8f9fa; /* change background color on hover */
  color: #212529;
}
</style>
