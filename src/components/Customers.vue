<template>
  <div class="customers container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
 <h1 class="page-header">Manage Customer</h1>
 <input class="form-control" placeholder="Enter lase Name" v-model="filterInput"><br/>
    <table class="table table-striped">
        <thead>
          <th>Name</th>
          <th>User Name</th>
          <th>Phone</th>
          <th></th>
        </thead>
        <tbody>
          <tr v-for="customer in filterBy(customers, filterInput)">
            <td>{{customer.name}}</td>
            <td>{{customer.username}}</td>
            <td>{{customer.phone}}</td>
            <td><router-link class="btn btn-default btn-xs" v-bind:to="'/customer/'+customer.id">View</router-link></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import { HTTP } from '@/utils/common-http'
import Alert from './Alert'
export default {
  name: "customers",
  data() {
    return {
      customers: [],
      alert: '',
      filterInput: ''
    };
  },
  methods: {
    fetchCustomers() {
      HTTP.get("")
        .then(response => {
          this.customers = response.data;
         // console.log(response.data)
        })
    },
    filterBy(list, value){
      value = value.charAt(0).toUpperCase() + value.slice(1);
      return list.filter(function(customer){
        return customer.name.indexOf(value) > -1;
      })
    }
  },
  created: function() {
    this.fetchCustomers();
    if(this.$route.query.alert){
      this.alert = this.$route.query.alert;
    }
  },
  // updated: function(){
  //   this.fetchCustomers();
  // },
  components: {
    Alert
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.customers{
  margin-top: 70px;
}

</style>
