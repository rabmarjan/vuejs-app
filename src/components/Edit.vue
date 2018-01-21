<template>
  <div class="edit container">
    <Alert v-if="alert" v-bind:message="alert"/>
    <router-link to="/customers">Back</router-link>
    <h1 class="page-header">Edit Customer</h1>
    <form v-on:submit="updateCustomer">
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
import Alert from './Alert'
import axios from 'axios'
export default {
  name: "add",
  data() {
    return {
      customer: [],
      alert:''
    }
  },
  methods: {
    fetchCustomer(id) {
      axios.get("http://localhost:8000/api/v1/contact/"+id)
        .then(response => {
          this.customer = response.data;
         // console.log(response.data)
        })
    },
    updateCustomer(e) {
      if(!this.customer.name || !this.customer.username){
          this.alert= "Please fill all required field"
      }else{
          let updateCustomer = {
              name: this.customer.name,
              username: this.customer.username,
              phone: this.customer.phone,
              email: this.customer.email,
              address: this.customer.address,
              website: this.customer.website
          }
          axios.put("http://localhost:8000/api/v1/contact/"+this.$route.params.id, updateCustomer)
          .then((response)=>{
              this.$router.push({path:"/customers", query:{alert: "Updated Customer"}});
          });
        e.preventDefault();
      }
      e.preventDefault();
    }
  },
  created: function(){
      this.fetchCustomer(this.$route.params.id);
  }
  ,
  components: {
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.edit{
  margin-top: 70px;
}

</style>
