<template>
  <div class="Stats">
    <Table v-bind:data="data"></Table>
  </div>
</template>

<script>

import axios from 'axios';
import Table from '../components/StatsTable'

export default {

  name : "Hospital",
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
      }
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
