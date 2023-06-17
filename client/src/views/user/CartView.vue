<script setup>
import Header from '../../components/products/Header.vue'
</script>

<template>
  <Header>Your Cart</Header>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="align-middle border-right">
            <div class="d-flex align-items-center">
              <img sr alt="Product Image" class="product-image" style="height: 30vh; width: 30%" />
              <div class="ms-2">
                <p>Name:</p>
                <p>Size:</p>
                <p>Color:</p>
              </div>
            </div>
          </td>
          <td class="align-middle">Orice:</td>
          <td class="align-middle">
            <div class="">
              <button class="btn btn-sm btn-secondary me-2 text-dark">-</button>
              <span>Quantity: </span>
              <button class="btn btn-sm btn-secondary ms-2 text-dark">+</button>
            </div>
          </td>
          <td class="align-middle">Total:</td>
          <td class="align-middle">
            <button class="btn btn-sm btn-danger text-danger">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.cont {
  height: 15vh;
}
button {
  background-color: white;
}
.conta,
td {
  height: 30vh;
}
img {
  height: 100%;
  width: 30%;
}
</style>
