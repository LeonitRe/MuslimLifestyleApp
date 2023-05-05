<template>
  <HomeBox class="backgroundimg">
    <HomeItem class="h-75 rounded-top">
      <div class="img-container h-100 w-100">
        <img class="w-100 h-100 rounded-top" :src="currentImage" alt="" />
      </div>
    </HomeItem>
  </HomeBox>
  <HomeBox class="d-flex justify-content-around cont">
    <HomeItem class="d-flex justify-content-center align-items-center cont2 h-100">
      <img class="qual" src="../assets/icons/quality.svg" alt="" />
      <div class="d-flex flex-column ms-2">
        <h4>Premium quality</h4>
        <p class="text-secondary">
          Markat kryesore të teknologjisë i gjeni në Buton. Na vizitoni në dyqan ose online.
        </p>
      </div>
    </HomeItem>
    <HomeItem class="d-flex justify-content-center align-items-center cont2 h-100">
      <img class="qual" src="../assets/icons/delivery.svg" alt="" />
      <div class="d-flex flex-column ms-2">
        <h4>Transporti</h4>
        <p class="text-secondary">
          Transporti ēshtë falas kudo në Kosovë për të gjitha porositë. Transport i shpejtë dhe i
          sigurtë..
        </p>
      </div>
    </HomeItem>
    <HomeItem class="d-flex justify-content-center align-items-center cont2 h-100">
      <img class="qual" src="../assets/icons/quality.svg" alt="" />
      <div class="d-flex flex-column ms-2">
        <h4>1 - 5 vite garancion</h4>
        <p class="text-secondary">
          Të gjitha produktet në Buton vijn me garanci, varësisht nga produkti nga 1 deri ne 5 Vite.
        </p>
      </div>
    </HomeItem>
  </HomeBox>
  
  
</template>

<script setup>
import HomeBox from '../components/homeComponents/HomeBox.vue'
import HomeItem from '../components/homeComponents/HomeItem.vue'
import firstpic from '../assets/home/first.png'
import secondpic from '../assets/home/second.png'
import { ref, onMounted } from 'vue'

const images = [firstpic, secondpic]
const interval = 4000

const currentImageIndex = ref(0)
const currentImage = ref(images[currentImageIndex.value])

function nextImage() {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
  currentImage.value = images[currentImageIndex.value]
  document.querySelector('.img-slideshow').classList.add('slide-in-right')
  setTimeout(() => {
    document.querySelector('.img-slideshow').classList.remove('slide-in-right')
  }, 1000)
}

onMounted(() => {
  setInterval(() => {
    nextImage()
  }, interval)
})
</script>

<style scoped>
.image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.cont {
  height: 35vh;
}
.cont2 {
  width: 26%;
}
.qual {
  height: 4rem;
  width: 5rem;
}
p {
  font-size: 0.9rem;
}
.backgroundimg {
  background-image: url('https://static.vecteezy.com/system/resources/previews/009/922/548/original/arabic-luxury-and-elegant-islamic-background-free-vector.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
