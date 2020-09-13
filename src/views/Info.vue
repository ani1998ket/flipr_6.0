<template>
  <div class="contact">
    <Table v-bind:infos="infos"></Table>
  </div>
</template>

<script>
import axios from 'axios';
import Table from  '../components/InfoTable';

export default {
  name : "Info",
  components : {
    Table,
  },
  data(){
    return {
      infos : []
    }
  },
  created(){
      axios.get('https://api.rootnet.in/covid19-in/notifications')
      .then(res => this.infos = res.data.data.notifications)
      .catch(err => console.log(err));
  }
}
</script>