<script setup>
import Contact from '../components/contactComponents/Contactus.vue'
import ContactItem from '../components/contactComponents/ContactusItem.vue'
import Footer from '../components/FooterComponent.vue'
import Copyright from '../components/CopyrightComponent.vue'
</script>
<template>
  <Contact class="box">
    <ContactItem class="w-50 p-5">
      <h1>Contact us</h1>
      <input
        class="p-2 w-75 border-bottom border-0 border-primary"
        placeholder="Enter your name"
        type="text"
      />
      <input
        class="p-2 mt-3 w-75 border-bottom border-0 border-primary"
        placeholder="Enter your email"
        type="text"
      />
      <textarea
        class="p-2 mt-3 border border-dark rounded"
        placeholder="Enter your message"
        rows="10"
      ></textarea>
      <button type="button" class="btn btn-primary w-25 mt-3">Submit</button>
    </ContactItem>
    <ContactItem class="w-25 p-5 bg-dark text-light">
      <h3>Call us</h3>
      <p>+383 044 111 222</p>
      <br />
      <h3>Location</h3>
      <p>121 Rock street, Kosovo, 21 Pristina</p>
      <br />
      <h3>Business hours</h3>
      <p>10-19 pm</p>
    </ContactItem>
  </Contact>
  <Footer/>
  <Copyright/>
</template>
<style scoped>
.box {
  height: 80vh;
}
input:focus {
  outline: none;
  border-bottom: 2px solid blue;
}
textarea:focus {
  border: 1px solid;
  outline: none;
}
</style>
