<template>
   <div class="container">
        <div class="row d-flex justify-content-center align-items-center shadow-lg mt-5 mx-auto" style="width:700px; height:400px;">
            <div class="col-5"> <img src="../assets/mall.jpg" class="card-img-top rounded-circle"></div>
            <div class="col-7 ">
                <h3>Register</h3>
                <form @submit.prevent="register">
                  <div class="form-group">
                      <label for="name">Name </label>
                      <input v-model="name" type="name" class="form-control" id="name" aria-describedby="emailHelp">
                    </div>
                    <div class="form-group">
                      <label for="email">Email address</label>
                      <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input v-model="password" type="password" class="form-control" id="password">
                    </div>
                    <button type="submit" class="btn btn-primary rounded-pill float-right">Register</button><br><br>
                  </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', data)
    }
  }
}
</script>

<style>

</style>
