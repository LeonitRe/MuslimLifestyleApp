<script setup>
import Box from './navComponents/Box.vue'
import ListBox from './navComponents/ListBox.vue'
import CartBox from './navComponents/CartBox.vue'
import Title from './navComponents/Title.vue'

import Abayas from '../assets/category/womens/abayas.jpg'
import Jibabs from '../assets/category/womens/jibabs.jpg'
import Kaftans from '../assets/category/womens/kaftans.jpg'
import Hijabcaps from '../assets/category/accessories/hijabcaps.jpg'
import Hijabscarf from '../assets/category/accessories/hijabscarf.jpg'
import Hijabseelve from '../assets/category/accessories/hijabsleeve.jpg'
import Bishts from '../assets/category/men/bishts.jpg'
import Jalabyas from '../assets/category/men/jalabyas.jpg'
import Kufi from '../assets/category/men/kufi.jpg'
import Thobes from '../assets/category/men/thobes.jpg'
import Boys from '../assets/category/kids/boys.jpg'
import Girls from '../assets/category/kids/girls.jpg'
import Attars from '../assets/category/fragrances/attars.jpg'
import Brands from '../assets/category/fragrances/brands.jpg'
import Burners from '../assets/category/fragrances/burners.jpg'
import Incense from '../assets/category/fragrances/incense.jpg'
import Eiddecor from '../assets/category/lifestyle/eiddecor.jpg'
import Prayer from '../assets/category/lifestyle/prayer.jpg'
import Ramadandecor from '../assets/category/lifestyle/ramadandecor.jpg'
import { ref } from 'vue'

const womens = ref([
  {
    imageUrl: Abayas,
    title: 'Abayas'
  },
  {
    imageUrl: Jibabs,
    title: 'Jibabs'
  },
  {
    imageUrl: Kaftans,
    title: 'Kaftans'
  }
])
const accessories = ref([
  {
    imageUrl: Hijabcaps,
    title: 'Hijabcaps'
  },
  {
    imageUrl: Hijabscarf,
    title: 'Hijabscarf'
  },
  {
    imageUrl: Hijabseelve,
    title: 'Hijabseelve'
  }
])
const mens = ref([
  {
    imageUrl: Bishts,
    title: 'Bishts'
  },
  {
    imageUrl: Jalabyas,
    title: 'Jalabyas'
  },
  {
    imageUrl: Kufi,
    title: 'Kufi'
  },
  {
    imageUrl: Thobes,
    title: 'Thobes'
  }
])
const kids = ref([
  {
    imageUrl: Boys,
    title: 'Boys'
  },
  {
    imageUrl: Girls,
    title: 'Girls'
  }
])
const fragrances = ref([
  {
    imageUrl: Attars,
    title: 'Attars'
  },
  {
    imageUrl: Brands,
    title: 'Brands'
  },
  {
    imageUrl: Burners,
    title: 'Burners'
  },
  {
    imageUrl: Incense,
    title: 'Incense'
  }
])
const lifestyles = ref([
  {
    imageUrl: Eiddecor,
    title: 'Eidecor'
  },
  {
    imageUrl: Prayer,
    title: 'Prayer'
  },
  {
    imageUrl: Ramadandecor,
    title: 'Ramadandecor'
  }
])
</script>
<template>
  <Box>
    <li class="nav-item dropdown dropdown-hover position-static d-flex align-items-center">
      <router-link to="" class="nav-link router"> New Arrivals </router-link>
    </li>
    <li
      class="nav-item dropdown dropdown-hover position-static d-flex align-items-center justify-content-evenly"
    >
      <router-link
        to="/women"
        type="button"
        class="nav-link router"
        id="navbarDropdown"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        Women
      </router-link>
      <ListBox>
        <List v-for="women in womens" :key="womens">
          <CartBox>
            <img :src="women.imageUrl" class="card-img-top img-fluid" alt="" />
          </CartBox>
          <Title>{{ women.title }}</Title>
        </List>
      </ListBox>
    </li>
    <li
      class="nav-item dropdown dropdown-hover position-static d-flex align-items-center justify-content-evenly"
    >
      <router-link
        to="/accessories"
        type="button"
        class="nav-link router"
        id="navbarDropdown"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        Accessories
      </router-link>
      <ListBox>
        <List v-for="accessorie in accessories" :key="accessories">
          <CartBox>
            <img :src="accessorie.imageUrl" class="card-img-top img-fluid" alt="" />
          </CartBox>
          <Title>{{ accessorie.title }}</Title>
        </List>
      </ListBox>
    </li>
    <li
      class="nav-item dropdown dropdown-hover position-static d-flex align-items-center justify-content-evenly"
    >
      <router-link
        to="/men"
        type="button"
        class="nav-link router"
        id="navbarDropdown"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        Men
      </router-link>
      <ListBox>
        <List v-for="men in mens" :key="mens">
          <CartBox>
            <img :src="men.imageUrl" class="card-img-top img-fluid" alt="" />
          </CartBox>
          <Title>{{ men.title }}</Title>
        </List>
      </ListBox>
    </li>
    <li
      class="nav-item dropdown dropdown-hover position-static d-flex align-items-center justify-content-evenly"
    >
      <router-link
        to="/kids"
        type="button"
        class="nav-link router"
        id="navbarDropdown"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        Kids
      </router-link>
      <ListBox>
        <List v-for="kid in kids" :key="kids">
          <CartBox>
            <img :src="kid.imageUrl" class="card-img-top img-fluid" alt="" />
          </CartBox>
          <Title>{{ kid.title }}</Title>
        </List>
      </ListBox>
    </li>
    <li
      class="nav-item dropdown dropdown-hover position-static d-flex align-items-center justify-content-evenly"
    >
      <router-link
        to="/fragrances"
        type="button"
        class="nav-link router"
        id="navbarDropdown"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        Fragrances
      </router-link>
      <ListBox>
        <List v-for="fragrance in fragrances" :key="fragrances">
          <CartBox>
            <img :src="fragrance.imageUrl" class="card-img-top img-fluid" alt="" />
          </CartBox>
          <Title>{{ fragrance.title }}</Title>
        </List>
      </ListBox>
    </li>
    <li
      class="nav-item dropdown dropdown-hover position-static d-flex align-items-center justify-content-evenly"
    >
      <router-link
        to="/lifestyle"
        type="button"
        class="nav-link router"
        id="navbarDropdown"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        Lifestyle
      </router-link>
      <ListBox>
        <List v-for="lifestyle in lifestyles" :key="lifestyles">
          <CartBox>
            <img :src="lifestyle.imageUrl" class="card-img-top img-fluid" alt="" />
          </CartBox>
          <Title>{{ lifestyle.title }}</Title>
        </List>
      </ListBox>
    </li>
    <div class="dropdown router d-flex align-items-center">
      <router-link
        class="nav-link router"
        to=""
        id="navbarDropdown"
        role="button"
        data-mdb-toggle="dropdown"
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
  </Box>
</template>
<style scoped>
.cont {
  height: 12vh;
}
.router {
  background-color: white;

  font-weight: 800;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  background-image: radial-gradient(rgb(0, 139, 0), rgba(52, 152, 219, 1));
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
.hover-dropdown:hover + .dropdown-menu {
  display: block;
}

.dropdown-menu {
  display: none;
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
  display: block;
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
img {
  transition: transform 0.3s;
  width: 100%;
}

img:hover {
  transform: scale(1.1);
  z-index: 1;
}
.dropdown-hover:hover > .dropdown-menu {
  display: inline-block;
}

.dropdown-hover > .dropdown-toggle:active {
  /*Without this, clicking will make it sticky*/
  pointer-events: none;
}
</style>
