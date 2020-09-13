<template>
  <div class="Hospital">
    <Table v-bind:data="data"></Table>
  </div>
</template>

<script>

import axios from 'axios';
import Table from '../components/HospitalTable'

export default {

  name : "Hospital",
  components : {
    Table,
  },
  data(){
    return {
      data : []
    }
  },
  methods : {
  },
  created(){
      axios.get("https://api.rootnet.in/covid19-in/hospitals/beds")
      .then( res => this.data = (res.data.data.regional) )
      .catch( err => console.log(err) );
  }
}
</script>
