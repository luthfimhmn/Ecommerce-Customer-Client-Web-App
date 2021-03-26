import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'
import router from '../router'
// import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    banners: [],
    cart: []
  },
  mutations: {
    set_product (state, payload) {
      state.products = payload
    },
    set_banner (state, payload) {
      state.banners = payload
    },
    set_cart (state, payload) {
      state.cart = payload
    },
    push_cart (state, payload) {
      state.cart.push(payload)
    }
  },
  actions: {
    register (context, payload) {
      axios({
        url: 'register',
        method: 'POST',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password
        }
      })
        .then((result) => {
          console.log('Register Success')
          Swal.fire({
            title: 'Register success!',
            icon: 'success'
          })
          router.push('/login')
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      axios({
        url: 'login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then((result) => {
          localStorage.setItem('access_token', result.data.access_token)
          Swal.fire({
            title: 'Login success!',
            icon: 'success'
          })
          router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchProduct (context, payload) {
      axios({
        url: '/products',
        method: 'GET',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('set_product', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchBanner (context, payload) {
      axios({
        url: '/banners',
        method: 'GET',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('set_banner', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchCart (context, payload) {
      axios({
        url: '/cart',
        method: 'GET',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('set_cart', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addToCart (context, payload) {
      axios({
        url: `/cart/plus/${payload}`,
        method: 'PATCH',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.dispatch('fetchCart')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addToCartFromCard (context, payload) {
      axios({
        url: `/cart/${payload}`,
        method: 'POST',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          Swal.fire({
            title: 'Added to cart success!',
            icon: 'success'
          })
          context.dispatch('fetchCart')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    removeFromCart (context, payload) {
      axios({
        url: `/cart/${payload}`,
        method: 'DELETE',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          Swal.fire({
            title: 'Removed from cart',
            icon: 'success'
          })
          context.dispatch('fetchCart')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    subtractCart (context, payload) {
      axios({
        url: `/cart/min/${payload}`,
        method: 'PATCH',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.dispatch('fetchCart')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
