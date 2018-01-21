<template>
  <div class="add container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">Add Customer</h1>
    <form v-on:submit="addCustomer">
       <div class="well">
          <h4>Customer Info</h4>
          <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" placeholder="name" v-model="customer.name">
  </div>
  <div class="form-group">
    <label for="username">User Name:</label>
    <input type="text" class="form-control" placeholder="user name" v-model="customer.username">
  </div>
       </div>
    <div class="well">
          <h4>Customer Contact</h4>
          <div class="form-group">
    <label for="email">Email:</label>
    <input type="text" class="form-control" placeholder="email" v-model="customer.email">
  </div>
  <div class="form-group">
    <label for="phone">Phone:</label>
    <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
  </div>
       </div>
       <div class="well">
          <h4>Customer Location</h4>
          <div class="form-group">
    <label for="address">Address:</label>
    <input type="address" class="form-control" placeholder="ID" v-model="customer.address">
  </div>
  <div class="form-group">
    <label for="website">Website:</label>
    <input type="text" class="form-control" placeholder="website" v-model="customer.website">
  </div>
       </div>
       <button type="submit" class=" btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axiox from 'axios'
import { HTTP } from '@/utils/common-http'
import Alert from './Alert'
export default {
  name: "add",
  data() {
    return {
      customer: [],
      alert: ''
    };
  },
  methods: {
    addCustomer(e) {
      if(!this.customer.name || !this.customer.username){
          this.alert= "Please fill all required field"
      }else{
          let newCustomer = {
              name: this.customer.name,
              username: this.customer.username,
              phone: this.customer.phone,
              email: this.customer.email,
              address: this.customer.address,
              website: this.customer.website
          }
         // axiox.post("http://localhost:8000/api/v1/contact/", newCustomer)
          HTTP.post("", newCustomer)
          .then((response)=>{
              this.$router.push({path:"/customers", query:{alert: "Customer Added"}})
              // this.$router.push({path:"/customers"});
              // this.alert = "Customer Added";
          });
        e.preventDefault();
      }
      e.preventDefault();
    }
  },
  components: {
    Alert
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .add{
    margin-top: 70px;
    margin-bottom: 30px;
  }
</style>
