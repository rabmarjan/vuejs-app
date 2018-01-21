<template>
  <div class="details container">
      <router-link to="/customers">Back</router-link>
 <span class="pull-right">
     <router-link class="btn btn-primary" v-bind:to="'/edit/'+customers.id">Edit</router-link>
    <button class="btn btn-danger" v-on:click="deleteCustomer(customers.id)">Delete</button>
    </span>
    <h1 class="page-header">{{customers.name}} {{customers.username}}</h1>
  <ul class="list-group">
  <li class="list-group-item"><span class=" glyphicon glyphicon-phone" aria-hidden="true"></span>{{customers.name}}</li>
  <li class="list-group-item"><span class=" glyphicon glyphicon-envelope " aria-hidden="true"></span>{{customers.username}}</li>
</ul>
 <ul class="list-group">
  <li class="list-group-item">{{customers.email}}</li>
  <li class="list-group-item">{{customers.address}}</li>
<li class="list-group-item">{{customers.phone}}</li>
</ul>
  </div>
</template>

<script>
import axios from 'axios'
import { HTTP } from '@/utils/common-http'
export default {
  name: 'customerdetails',
  data () {
    return {
     customers: []
    }
  },
  methods:{
        fetchCustomer(id) {
      //  //axios.get("http://localhost:8000/api/v1/contact/"+id)    
      HTTP.get(id)
        .then(response => {
          this.customers = response.data;
         // console.log(response.data)
        })
    },
    deleteCustomer(id){
          //axios.delete("http://localhost:8000/api/v1/contact/"+id)
         HTTP.delete(""+id)
        .then(response => {
         // this.customers = response.data;
           this.$router.push({path: '/customers', query:{alert: "Customer Deleted"}})
         // console.log(response.data)
        })
       
    }
  },
  created: function(){
      this.fetchCustomer(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .details{
    margin-top: 70px;
  }
</style>
