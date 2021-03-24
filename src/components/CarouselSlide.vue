<template>
  <b-carousel-slide
    :caption="banner.title"
    text="Nulla vitae elit libero, a pharetra augue mollis interdum."
    :img-src="banner.image_url">
  </b-carousel-slide>
</template>

<script>
export default {
  name: 'CarouselSlide',
  props: ['banner']
}
</script>

<style>

</style>
