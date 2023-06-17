<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

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

// Set the base URL for axios
axios.defaults.baseURL = 'http://localhost:5080'

onMounted(() => {
  productId.value = route.params.id
  fetchProduct(productId.value)
})

async function fetchProduct(productId) {
  try {
    const response = await axios.get(`/products/${productId}`)
    // Assuming the response.data contains the product information
    product.value = response.data
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="vh-100 d-flex">
    <div class="w-50 d-flex align-items-center justify-content-end">
      <img class="h-75 w-50 me-4" :src="product.url" alt="Product Image" />
    </div>
    <div class="w-50 d-flex flex-column justify-content-center">
      <div>
        <h2>{{ product.name }}</h2>
        <h4 class="text-secondary">€{{ product.price }} EUR</h4>
        <p>Shipping calculated at checkout.</p>
        <p>{{ product.description }}</p>
        <br />
        <h5>SIZE: {{ product.size }}</h5>
        <br />
        <h5>Color {{ product.color }}</h5>
        <br />
        <div class="w-50 d-flex justify-content-around">
          <button class="btn btn-outline-secondary">Checkout</button>

          <button class="btn btn-outline-dark">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
