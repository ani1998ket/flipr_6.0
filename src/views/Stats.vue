<template>
  <div class="Stats">
    <form @submit="applyfilter">
    <label for="states">States</label>
    <select id="states" v-model="params.state" size="1">
      <option v-for="row in States" v-bind:value= row.name :key="row">{{row.name}}</option>
    </select>
    <label for="Gender">Gender</label>
    <select id="Gender" v-model="params.gender">
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
    <label for="min-age">Min Age</label>
    <input type="number" id="min-age" v-model="params.age_min" min="0" max="70">
    <label for="max-age">Max Age</label>
    <input type="number" id="max-age" v-model="params.age_max" min="0" max="200">
    <label for="date-range">Date Range</label>
    <input type="date" id="date-range" v-model="params.date_start">
    <input type="date" id="date-range" v-model="params.date_end">
    <input type="submit" value="Apply">
    </form>
    <Table v-bind:data="data"></Table>
  </div>
</template>

<script>

import axios from 'axios';
import Table from '../components/StatsTable';

export default {

  name : "Stats",
  components : {
    Table,
  },
  data(){
    return {
      data : [],
      params : {
        gender : "",
        age_min : 0,
        age_max : 0,
        state : "",
        date_start : "",
        date_end : ""
      },
      States : [
        {name :"Kerala"},{name :"Delhi"},{name :"Telangana"},{name :"Rajasthan"},{name :"Haryana"},{name :"Uttar Pradesh"},{name :"Ladakh"},{name :"Tamil Nadu"},
        {name :"Jammu and Kashmir"},{name :"Karnataka"},{name :"Maharashtra"},{name :"Punjab"},{name :"Andhra Pradesh"},{name :"Uttarakhand"},{name :"Odisha"},
        {name :"Puducherry"},{name :"West Bengal"},{name :"Chandigarh"},{name :"Chhattisgarh"},{name :"Gujarat"},{name :"Himachal Pradesh"},
        {name :"Madhya Pradesh"},{name :"Bihar"},{name :"Manipur"},{name :"Mizoram"},{name :"Goa"},{name :"Andaman and Nicobar"},{name :"Jharkhand"},
        {name :"Assam"},{name :"Arunachal Pradesh"},{name :"Tripura"},{name :"Meghalaya"}
      ]
    }
  },
  methods : {
    applyfilter(e){
      e.preventDefault();
      this.params.age_min = parseInt(this.params.age_min);
      this.params.age_max = parseInt(this.params.age_max);
      axios.get("http://localhost:8000/api/test", { params : this.params} )
      .then( res => this.data = (res.data.data) )
      .catch( err => console.log(err) );
    }
  },
  created(){
      axios.get("http://localhost:8000/api/test")
      .then( res => this.data = (res.data.data) )
      .catch( err => console.log(err) );
  }
}
</script>
