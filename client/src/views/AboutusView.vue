<script setup>
import boxComp from '../components/aboutusComponents/boxComp.vue'
</script>
<template>
  <main>
    <div class="primary-container d-flex flex-column align-items-center">
      <div class="d-flex justify-content-center align-items-center img-cont w-100">
        <img src="../assets/images/aboutus/background.png" />
      </div>
      <br />
      <boxComp #text1>What does it mean to live a Muslim Lifestyle? </boxComp>
      <hr class="w-100" />
      <boxComp #text1
        >For us personally, it means to dress modestly, complete our daily prayers, and get excited
        over Islamaic Occasions such as Ramadan & Eid, and following the Sunnah of applying Attar on
        Jumma’s instead of Perfumes. And what's better than finding all of these in one place, for
        everybody?
      </boxComp>
      <hr class="w-100" />
      <boxComp #text1
        >Having the personal experience of living abroad, it was quite obvious how difficult it is
        to find things for a Muslim Lifestyle available in one spot, and if you did happen to find
        one, the options were pretty limited. This brought forth the realization that many of our
        Brothers & Sisters were probably going through the same dilemma, and that realization paved
        the way for MLS.
      </boxComp>
      <hr class="w-100" />
      <boxComp #text1
        >MLS was established with the intention of helping our Muslim Brothers & Sisters find
        everything they need for their Muslim Lifestyle- from Clothing to Home Decor- all available
        in one place.
      </boxComp>
      <hr class="w-100" />
      <boxComp #text1
        >MLS Proposes to be the Islamic Brand where you’ll find everything you need with plentiful
        options and promises to provide the best quality products at great affordability and
        exceptional Customer Service, all conveniently accessible at your fingertips.
      </boxComp>
    </div>
  </main>
</template>
<style scoped>
.img-cont {
  height: 35vh;
  background-color: lightblue;
}
img {
  height: 27vh;
}
</style>
