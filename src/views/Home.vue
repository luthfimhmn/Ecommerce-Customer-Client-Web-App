<template>
  <div>
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="5000"
        controls
        indicators
        background="#ababab"
        img-width="1920"
        img-height="550"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          <CarouselSlide v-for="banner in banners" :key="banner.id"
            :banner="banner" >

          </CarouselSlide>
      </b-carousel>
    </div>

    <h2> LIST BARANG </h2>
      <div class="row mx-auto d-flex justify-content-center" style="width:100%">
        <CardProduct v-for="item in products" :key="item.id" :item="item"></CardProduct>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import CardProduct from '../components/CardProduct.vue'
import CarouselSlide from '../components/CarouselSlide.vue'

export default {
  name: 'Home',
  components: {
    CardProduct,
    CarouselSlide
  },
  created () {
    this.$store.dispatch('fetchProduct')
    this.$store.dispatch('fetchBanner')
  },
  computed: {
    ...mapState(['products', 'banners'])
  }
}
</script>

<style>
  .home {
    display: flex;
    justify-content: center;
  }
</style>
