<script setup>
import FooterBox from './footerComponents/FooterBox.vue'
import FooterItem from './footerComponents/FooterItem.vue'
import Box from './footerComponents/Box.vue'
</script>
<template>
  <FooterBox>
    <FooterItem>
      <h5>Get in touch</h5>
      <Box class="d-flex align-items-center mt-2">
        <img src="../assets/icons/location.png" alt="" />
        <p class="mb-0 ps-2 text-secondary">P.O. Box 23739, Dubai U.A.E.</p>
      </Box>
      <Box class="d-flex align-items-center mt-2">
        <img src="../assets/icons/mail.png" alt="" />
        <p class="mb-0 ps-2 text-secondary">cs@muslimlifestylestore.com</p>
      </Box>
      <Box class="d-flex align-items-center mt-2">
        <img src="../assets/icons/telephone.png" alt="" />
        <p class="mb-0 ps-2 text-secondary">c+383 45 111 222</p>
      </Box>
      <Box class="d-flex align-items-center mt-2">
        <img class="anim" src="../assets/icons/instagram.png" alt="" />
        <img class="ms-3 anim" src="../assets/icons/facebook.png" alt="" />
        <img class="ms-3 anim" src="../assets/icons/twitter-sign.png" alt="" />
      </Box>
    </FooterItem>
    <FooterItem>
      <h5>Info</h5>
      <Box class="d-flex align-items-center mt-2">
        <p class="mb-0 ps-2 text-secondary">Home</p>
      </Box>
      <Box class="d-flex align-items-center mt-2">
        <p class="mb-0 ps-2 text-secondary">About us</p>
      </Box>
      <Box class="d-flex align-items-center mt-2">
        <p class="mb-0 ps-2 text-secondary">Contact us</p>
      </Box>
      <Box class="d-flex align-items-center mt-2">
        <p class="mb-0 ps-2 text-secondary">FAQs</p>
      </Box>
    </FooterItem>
    <FooterItem>
      <h5>Newsletter Signup</h5>
      <Box class="d-flex align-items-center mt-2">
        <p class="mb-0 ps-2 text-secondary">
          Subscribe to our newsletter and get 10% off your first purchase
        </p>
      </Box>
      <Box class="d-flex align-items-center mt-4">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control p-2 border-dark"
            placeholder="Your email address"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button class="btn btn-dark" type="button" id="button-addon2">Subscribe</button>
        </div>
      </Box>
      <Box class="d-flex align-items-center mt-2 p-0">
        <img class="ms-3" src="../assets/icons/credit-card.png" alt="" />
      </Box>
    </FooterItem>
  </FooterBox>
</template>
<style scoped>
input:focus,
input:active,
input:hover {
  outline: none;
  box-shadow: none;
}
.anim {
  transition: 0.2s;
}
.anim:hover {
  margin-bottom: 10px;
}
</style>
