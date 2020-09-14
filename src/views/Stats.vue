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
      data : []
    }
  },
  methods : {
  },
  created(){
      axios.get("http://localhost:8000/api/test")
      .then( res => this.data = (res.data.data) )
      .catch( err => console.log(err) );
  }
}
</script>
