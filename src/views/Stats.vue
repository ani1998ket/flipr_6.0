<template>
  <div class="Stats">
    <form>
    </form>
    <label for="states">States</label>
    <select id="states" v-model="state" size="1">
      <option value="Kerala">Kerala</option>
      <option value="Delhi">Delhi</option>
      <option value="Telangana">Telangana</option>
      <option value="Rajasthan">Rajasthan</option>
      <option value="Haryana">Haryana</option>
      <option value="Uttar Prad">Uttar Pradesh</option>
      <option value="Ladakh">Ladakh</option>
      <option value="Tamil Nadu">Tamil Nadu</option>
      <option value="Jammu and">Jammu And Kashmir</option>
      <option value="Karnataka">Karnataka</option>
      <option value="Maharashtr">Maharashtra</option>
      <option value="Punjab">Punjab</option>
      <option value="Andhra Pra">Andhra Pradesh</option>
      <option value="Uttarakhan">Uttarakhand</option>
      <option value="Odisha">Odisha</option>
      <option value="Puducherry">Puducherry</option>
      <option value="West Benga">West Bengal</option>
      <option value="Chandigarh">Chandigarh</option>
      <option value="Chhattisga">Chhattisgarh</option>
      <option value="Gujarat">Gujarat</option>
      <option value="Himachal P">Himachal Pradesh</option>
      <option value="Madhya Pra">Madhya Pradesh</option>
      <option value="Bihar">Bihar</option>
      <option value="Manipur">Manipur</option>
      <option value="Mizoram">Mizoram</option>
      <option value="Goa">Goa</option>
      <option value="Andaman an">Andaman And Nicobar</option>
      <option value="Jharkhand">Jharkhand</option>
      <option value="Assam">Assam</option>
      <option value="Arunachal">Arunachal Pradesh</option>
      <option value="Tripura">Tripura</option>
      <option value="Meghalaya">Meghalaya</option>
      <option value="India">India</option>
      <!-- <option v-for="row in States" v-bind:value= {row} :key="row">{{row}}</option> -->
    </select>
    <label for="Gender">States</label>
    <select id="Gender" >
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
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
        gender : "male",
        age_min : 10,
        age_max : 19,
        state : "Karnataka",
        date_start : "2020-03-27",
        date_end : "2020-03-31"
      },
      States : [
        "Kerala","Delhi","Telangana","Rajasthan","Haryana","Uttar Prad","Ladakh","Tamil Nadu","Jammu and","Karnataka","Maharashtr","Punjab","Andhra Pra",
        "Uttarakhan","Odisha","Puducherry","West Benga","Chandigarh","Chhattisga","Gujarat","Himachal P","Madhya Pra","Bihar","Manipur","Mizoram","Goa",
        "Andaman an","Jharkhand","Assam","Arunachal","Tripura","Meghalaya"
      ],
      state : ""
    }
  },
  methods : {
  },
  created(){
      axios.get("http://localhost:8000/api/test", { params : this.params} )
      .then( res => this.data = (res.data.data) )
      .catch( err => console.log(err) );
  }
}
</script>
