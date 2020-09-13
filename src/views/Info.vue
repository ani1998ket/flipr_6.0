<template>
  <div class="contact">
    <h1>{{info}}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name : "Info",
  data(){
    return {
      info : []
    }
  },
  created(){
      axios.get('https://api.rootnet.in/covid19-in/notifications')
      .then(res => this.info = res.data)
      .catch(err => console.log(err));
  }
}
</script>