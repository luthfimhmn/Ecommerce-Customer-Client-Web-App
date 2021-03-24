<template>
   <div class="card col-3 m-2 border-0 shadow" style="width: 18rem;">
    <img :src="item.image_url" class="card-img-top  mt-2 h-75" alt="...">
          <p>{{ item.name }}</p>
          <p>Harga: Rp.{{ item.price }}</p>
          <button @click.prevent="addToCart" class="btn btn-primary">Add To Cart</button>
        <div class="card-body d-flex flex-column align-items-center">

          <!-- <img @click.prevent="appreciate" src="../assets/heart.svg" alt="" class="bottom-left-icon"> -->
        </div>
  </div>
</template>

<script>
export default {
  name: 'CardProduct',
  props: ['item'],
  methods: {
    addToCart () {
      this.$store.dispatch('addToCart', this.item.id)
    }
  }
}
</script>

<style>

</style>
