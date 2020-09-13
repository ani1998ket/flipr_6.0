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
  methods : {

  },
  created(){
      axios.get('https://api.rootnet.in/covid19-in/notifications')
      .then(res => {
        this.infos = res.data.data.notifications ; 
        this.infos.forEach(info => {
          if(info.title=="PIB"){
            info.date = "-";
          }else if(info.title[1] == '.'){
            let pos = info.title.search("&nbsp");
            info.date = "-";
            info.title = info.title.slice(0,2) + " " + info.title.slice(pos + 6);
          }else{
            info.date = info.title.slice(0,11);
            info.title = info.title.slice(11);
          }
        });
        })
      .catch(err => console.log(err));
  }
}
</script>