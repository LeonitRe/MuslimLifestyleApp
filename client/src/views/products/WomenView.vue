<script setup>
import FooterComponent from '../../components/FooterComponent.vue'
import CopyrightComponent from '../../components/CopyrightComponent.vue'
import Header from '../../components/products/Header.vue'
import FilterBox from '../../components/products/FilterBox.vue'
import Filter from '../../components/products/Filter.vue'

import RelevanceFilter from '../../components/products/RelevanceFilter.vue'
import Item from '../../components/products/Item.vue'
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const prd = ref([])

const searchQuery = ref('')
const productType = ref('')
const priceRange = ref('')
const productSize = ref('')
const productColor = ref('')

onMounted(async () => {
  await product()
})
const isFlipped = ref(false)

const toggleFlip = () => {
  isFlipped.value = !isFlipped.value
}

const product = async () => {
  const response = await axios.get('http://localhost:5080/products?category=women')
  prd.value = response.data
}
const filterByPriceRange = (product) => {
  if (!priceRange.value) {
    return true
  }

  const [min, max] = priceRange.value.split('-')
  const price = parseFloat(product.price)

  if (min && max) {
    return price >= parseFloat(min) && price <= parseFloat(max)
  } else if (min) {
    return price >= parseFloat(min)
  } else if (max) {
    return price <= parseFloat(max)
  }

  return true
}

const filteredProducts = computed(() => {
  return prd.value.filter((p) => {
    const title = p.name.toLowerCase()
    const query = searchQuery.value.toLowerCase()
    const category = p.category.toLowerCase()
    const type = productType.value.toLowerCase()
    const color = productColor.value.toLowerCase()
    const size = productSize.value.toLowerCase()
    const isTitleMatch = title.includes(query)
    const isCategoryMatch = category === 'women'
    const isProductTypeMatch = type === '' || p.producttype.toLowerCase() === type
    const isPriceRangeMatch = filterByPriceRange(p)
    const isProductSizeMatch = size === '' || p.size.toLowerCase() === size
    const isProductColorMatch = color === '' || p.color.toLowerCase() === color

    return (
      isTitleMatch &&
      isCategoryMatch &&
      isProductTypeMatch &&
      isPriceRangeMatch &&
      isProductSizeMatch &&
      isProductColorMatch
    )
  })
})
const setProductType = (type) => {
  searchQuery.value = ''
  productType.value = type
}
const setProductSize = (type) => {
  searchQuery.value = ''
  productSize.value = type
}
const setProductColor = (type) => {
  searchQuery.value = ''
  productColor.value = type
}

const clearFilter = (filterType) => {
  if (filterType === 'all') {
    productType.value = ''
    priceRange.value = ''
    productSize.value = ''
    productColor.value = ''
  } else if (filterType === 'productType') {
    productType.value = ''
  } else if (filterType === 'priceRange') {
    priceRange.value = ''
  } else if (filterType === 'productSize') {
    productSize.value = ''
  } else if (filterType === 'productColor') {
    productColor.value = ''
  }
}
const loading = ref(false)

const sortProducts = (option) => {
  if (loading.value) {
    return
  }

  loading.value = true

  setTimeout(() => {
    switch (option) {
      case 'az':
        prd.value.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'za':
        prd.value.sort((a, b) => b.name.localeCompare(a.name))
        break
      case 'low':
        prd.value.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        break
      case 'high':
        prd.value.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
        break
      default:
        break
    }

    loading.value = false
  }, 1000)
}
const seeDetails = (productId) => {
  router.push({ name: 'ProductView', params: { id: productId } })
}
</script>
<template>
  <Header> Women </Header>
  <FilterBox>
    <Filter filter="Filter">
      <Item>
        <h5 class="media-heading">Product Type</h5>
        <li>
          <button type="button" class="btn btn-light" @click="setProductType('Hijab')">
            Hijab
          </button>
        </li>
        <li>
          <button type="button" class="btn btn-light" @click="setProductType('Jibabs')">
            Jibabs
          </button>
        </li>
        <li>
          <button type="button" class="btn btn-light" @click="setProductType('Kaftans')">
            Kaftans
          </button>
        </li>
      </Item>
      <Item>
        <h5 class="media-heading">Select Price</h5>
        <li>
          <button type="button" class="btn btn-light" @click="priceRange = '0-20'">0 - 20€</button>
        </li>
        <li>
          <button type="button" class="btn btn-light" @click="priceRange = '20-40'">
            20 - 40€
          </button>
        </li>
        <li>
          <button
            type="button"
            class="btn btn-light"
            :disabled="loading"
            @click="priceRange = '40-60'"
          >
            40 - 60€
          </button>
        </li>
      </Item>
      <Item>
        <h5 class="media-heading">Select Size</h5>
        <li>
          <button type="button" class="btn btn-light" @click="setProductSize('S')">S</button>
        </li>
        <li>
          <button
            type="button"
            class="btn btn-light"
            :disabled="loading"
            @click="setProductSize('M')"
          >
            M
          </button>
        </li>
        <li>
          <button type="button" class="btn btn-light" @click="setProductSize('L')">L</button>
        </li>
        <li>
          <button type="button" class="btn btn-light" @click="setProductSize('XL')">XL</button>
        </li>
        <li>
          <button type="button" class="btn btn-light" @click="setProductSize('XXL')">XXL</button>
        </li>
      </Item>
      <Item>
        <h5 class="media-heading">Select Color</h5>
        <li class="d-flex flex-row align-items-center">
          <div class="border color bg-dark"></div>
          <button type="" class="btn btn-light" @click="setProductColor('Black')">Black</button>
        </li>
        <li class="d-flex flex-row align-items-center">
          <div class="border color bg-primary"></div>
          <button type="" class="btn btn-light" @click="setProductColor('Blue')">Blue</button>
        </li>
        <li class="d-flex flex-row align-items-center">
          <div class="border color bg-danger"></div>
          <button type="" class="btn btn-light" @click="setProductColor('Red')">Red</button>
        </li>
        <li class="d-flex flex-row align-items-center">
          <div class="border color bg-success"></div>
          <button type="" class="btn btn-light" @click="setProductColor('Green')">Green</button>
        </li>
      </Item>
      <Item>
        <h5 class="media-heading">Availability</h5>
        <li><button type="button" class="btn btn-light">In Stock</button></li>
        <li><button type="button" class="btn btn-light">Out of Stock</button></li>
      </Item>
    </Filter>
    <input
      class="form-control w-50 rounded-5 shadow-none"
      list="datalistOptions"
      id="exampleDataList"
      placeholder="Type to search..."
      v-model="searchQuery"
    />
    <RelevanceFilter relevancefilter="Revelance">
      <Item>
        <button type="button" class="btn btn-light" @click="sortProducts('az')" :disabled="loading">
          Alphabetically, A-Z
          <i v-if="loading && currentSort === 'az'" class="fas fa-spinner fa-spin"></i>
        </button>
        <button type="button" class="btn btn-light" @click="sortProducts('za')" :disabled="loading">
          Alphabetically, Z-A
          <i v-if="loading && currentSort === 'za'" class="fas fa-spinner fa-spin"></i>
        </button>
        <button
          type="button"
          class="btn btn-light w-100"
          @click="sortProducts('low')"
          :disabled="loading"
        >
          Price, low to high
          <i v-if="loading && currentSort === 'low'" class="fas fa-spinner fa-spin"></i>
        </button>
        <button
          type="button"
          class="btn btn-light w-100"
          @click="sortProducts('high')"
          :disabled="loading"
        >
          Price, high to low
          <i v-if="loading && currentSort === 'high'" class="fas fa-spinner fa-spin"></i>
        </button>
      </Item>
    </RelevanceFilter>
  </FilterBox>
  <div class="container vh-25 filterview d-flex align-items-center flex-row">
    <template
      v-if="productType !== '' || priceRange !== '' || productSize !== '' || productColor !== ''"
    >
      <div class="mr-3">
        Selected Filters:
        <strong v-if="productType !== ''">
          {{ productType }}
          <i class="fas fa-minus-circle fa-fw clear-icon" @click="clearFilter('productType')"></i>,
        </strong>
        <strong v-if="priceRange !== ''">
          €{{ priceRange }}
          <i class="fas fa-minus-circle fa-fw clear-icon" @click="clearFilter('priceRange')"></i>,
        </strong>
        <strong v-if="productSize !== ''">
          {{ productSize }}
          <i class="fas fa-minus-circle fa-fw clear-icon" @click="clearFilter('productSize')"></i>,
        </strong>
        <strong v-if="productColor !== ''">
          {{ productColor }}
          <i class="fas fa-minus-circle fa-fw clear-icon" @click="clearFilter('productColor')"></i>,
        </strong>
      </div>
      <button class="btn btn-light" @click="clearFilter('all')">
        <i class="fas fa-minus fa-fw"></i> Clear Filters
      </button>
    </template>
  </div>

  <div class="container border-0">
    <div class="row border-0">
      <div class="col-md-3 border-0" v-for="p in filteredProducts" :key="p.id">
        <div class="card" @mouseenter="p.hover = true" @mouseleave="p.hover = false">
          <div class="image-container">
            <img :src="p.url" class="card-img-top" alt="Product Image" />
            <div class="image-overlay d-flex flex-column p-5" v-if="p.hover">
              <button class="btn btn-secondary" @click="seeDetails(p.id)">See Details</button>
            </div>
          </div>
          <div class="card-body d-flex align-items-center justify-content-between">
            <div>
              <p class="card-title">{{ p.name }}</p>
              <p class="card-text">€{{ p.price }} EUR</p>
            </div>
            <div>
              <button class="btn btn-primary">Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="loading" class="loading-overlay">
    <i class="fas fa-spinner fa-spin"></i>
  </div>
  <FooterComponent />
  <CopyrightComponent />
</template>
<style scoped>
@import url('@fortawesome/fontawesome-free/css/all.css');
.color {
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
}

.card {
  margin-bottom: 20px;
  width: 14rem;
  border: none;
}

.image-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 20rem;
}

.image-container img {
  transition: transform 0.3s ease;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-container:hover img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover .image-overlay {
  opacity: 1;
}

.overlay-content {
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.image-container:hover .overlay-content {
  transform: translateY(0);
}
.filterview {
  height: 20vh;
}
.clear-icon {
  cursor: pointer;
  margin-left: 0.25rem;
}

.clear-icon:hover {
  color: red;
}
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-overlay i {
  font-size: 2rem;
}
</style>
