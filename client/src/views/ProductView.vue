<script setup>
import FooterComponent from '../components/FooterComponent.vue'
import CopyrightComponent from '../components/CopyrightComponent.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import Zooming from 'zooming'

const productId = ref(null)
const route = useRoute()

const product = ref({
  name: '',
  price: 0,
  url: '',
  description: '',
  size: '',
  color: ''
})

axios.defaults.baseURL = 'http://localhost:5080'

onMounted(() => {
  productId.value = route.params.id
  fetchProduct(productId.value)
})

async function fetchProduct(productId) {
  try {
    const response = await axios.get(`/products/${productId}`)

    product.value = response.data
  } catch (error) {
    console.error(error)
  }
}

let zoomingInstance = null

onMounted(() => {
  productId.value = route.params.id
  fetchProduct(productId.value)

  zoomingInstance = new Zooming({
    customSize: '200%',
    scaleBase: 0.5
  })
})

function handleImageLoad() {
  zoomingInstance.listen('.image-zoom')
}
</script>

<template>
  <div class="vh-100 d-flex">
    <div class="w-50 d-flex align-items-center justify-content-end zoomable">
      <img
        class="h-100 w-75 me-4 image-zoom"
        :src="product.url"
        alt="Product Image"
        @load="handleImageLoad"
      />
    </div>
    <div class="w-50 d-flex flex-column justify-content-center">
      <div>
        <h2>{{ product.name }}</h2>
        <h4 class="text-secondary">
          <strong class="text-dark">€{{ product.price }}</strong> EUR
        </h4>
        <p>Shipping calculated at checkout.</p>
        <p>{{ product.description }}</p>
        <br />
        <h5 class="text-secondary">
          SIZE: <strong class="text-dark">{{ product.size }}</strong>
        </h5>
        <br />
        <h5 class="text-secondary">
          Color: <strong class="text-dark"> {{ product.color }}</strong>
        </h5>
        <br />
        <div class="w-50 d-flex justify-content-around">
          <button class="btn btn-outline-secondary">Checkout</button>

          <button class="btn btn-outline-dark">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent />
  <CopyrightComponent />
</template>
