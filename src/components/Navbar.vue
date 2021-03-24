<template>
  <nav class="navbar sticky-top navbar-light shadow bg-light">
        <a @click.prevent="goToHome" class="navbar-brand font-weight-bold" href="#">EcommerceKu</a>
        <div>
          <img @click.prevent="goToCart" v-if="$route.name !== 'Login' && $route.name !== 'Cart'"  src="../assets/cart.png" alt="" class="avatar"> ||
          <button v-if="$route.name === 'Login'" class="btn btn-sm btn-outline-success rounded-pill font-weight-bold text-dark" type="button">Login</button>
          <button @click.prevent="logout" v-if="$route.name !== 'Login'" class="btn btn-sm btn-outline-danger rounded-pill font-weight-bold text-dark" type="button">Logout</button>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push('/login')
    },
    goToCart () {
      this.$router.push('/cart')
    },
    goToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
