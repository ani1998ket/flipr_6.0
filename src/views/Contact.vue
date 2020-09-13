<template>
  <div class="contact">
    <Table v-bind:numbers="numbers"></Table>
  </div>
</template>

<script>

import axios from 'axios';
import Table from '../components/ContactTable'

export default {

  name : "Contact",
  components : {
    Table,
  },
  data(){
    return {
      numbers : []
    }
  },
  methods : {
  },
  created(){
      axios.get("https://api.rootnet.in/covid19-in/contacts")
      .then( res => this.numbers = res.data.data.contacts.regional )
      .catch( err => console.log(err) );
  }
}
</script>
