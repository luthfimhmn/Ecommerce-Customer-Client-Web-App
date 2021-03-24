<template>
<div class="container">
  <h1>Cart</h1>
  <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {{ cart }}
      <tr v-for="(item, index) in cart" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td>{{ item.Product.name }}</td>
        <td>{{ item.quantity }} </td>
        <td>{{ item.Product.price }}</td>
        <td>
          <button @click.prevent="remove(item.id)" class="btn btn-danger">Remove</button>
        </td>
      </tr>
    </tbody>
    <thead>
      <td>Total : </td>
    </thead>
  </table>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {
      total: 0
    }
  },
  created () {
    this.$store.dispatch('fetchCart')
  },
  methods: {
    remove (id) {
      this.$store.dispatch('removeFromCart', id)
    }
  },
  computed: {
    ...mapState(['cart'])
  }
}
</script>

<style>

</style>
