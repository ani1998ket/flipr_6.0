<template>
  <div class="Stats">
    <form @submit="applyfilter">
    <label for="states">States</label>
    <select id="states" v-model="params.state" size="1">
      <option v-for="row in States" v-bind:value= row.name :key="row">{{row.name}}</option>
      <option value="">All states</option>
    </select>
    <label for="Gender">Gender</label>
    <select id="Gender" v-model="params.gender">
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="">Both Gender</option>
    </select>
    <label for="age-group">Age Group</label>
    <select id="age-group" v-model="params.age_min" size="1">
      <option value="1">0-9</option>
      <option value="10">10-19</option>
      <option value="20">20-29</option>
      <option value="30">30-39</option>
      <option value="40">40-49</option>
      <option value="50">50-59</option>
      <option value="60">60-69</option>
      <option value="70">70 and above</option>
      <option value="0">All Age Group</option>
    </select>
    <!-- <input type="number" id="min-age" v-model="params.age_min" min="0" max="70">
    <label for="max-age">Max Age</label>
    <input type="number" id="max-age" v-model="params.age_max" min="0" max="200"> -->
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
        age_max : 150,
        state : "Karnataka",
        date_start : "2020-01-01",
        date_end : "2020-12-31"
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
    getData(){
      this.params.age_min = parseInt(this.params.age_min);
      this.params.age_max = this.params.age_min + 9;
      if(this.params.age_min == 1){
        this.params.age_max = this.params.age_min + 8;
      }
      if(this.params.age_min == 70){
        this.params.age_max += 40;
      }
      if(this.params.age_min == 0){
        this.params.age_max = 150;
      }
      axios.get("https://flipr6.herokuapp.com/api/test", { params : this.params} )
      .then( res => this.data = (res.data.data) )
      .catch( err => console.log(err) );
    },

    applyfilter(e){
      e.preventDefault();
      this.getData()
    }

  },
  created(){
      this.getData();
  }
}
</script>
