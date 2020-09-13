<template>
  <div class="Medical_College">
    <Table v-bind:data="data"></Table>
  </div>
</template>

<script>

import axios from 'axios';
import Table from '../components/MedicalTable'

export default {

  name : "Medical_College",
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
      axios.get("https://api.rootnet.in/covid19-in/hospitals/medical-colleges")
      .then( res => this.data = (res.data.data.medicalColleges) )
      .catch( err => console.log(err) );
  }
}
</script>
