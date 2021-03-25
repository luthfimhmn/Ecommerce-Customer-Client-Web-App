<template>
<div class="container">
  <h1>Cart</h1>
  <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Add or Substract Quantity</th>
        <th>Price</th>
        <th>Total</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in cart" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td>{{ item.Product.name }}</td>
        <td>{{ item.quantity }} </td>
        <td>
          <button @click.prevent="addCart(item.id)" class="btn btn-primary">+</button>
          <button @click.prevent="subtractCart(item.id)" class="btn btn-primary">-</button></td>
        <td>{{ item.Product.price }}</td>
        <td>{{ item.quantity * item.Product.price }}</td>
        <td>
          <button @click.prevent="remove(item.id)" class="btn btn-danger">Remove</button>
        </td>
      </tr>
    </tbody>
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
    },
    addCart (id) {
      this.$store.dispatch('addToCart', id)
    },
    subtractCart (id) {
      this.$store.dispatch('subtractCart', id)
    }
  },
  computed: {
    ...mapState(['cart'])
  }
}
</script>

<style>

</style>
