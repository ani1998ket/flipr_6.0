<template>
  <div class="Medical_College">
    <form @submit="applyfilter">
      <input type="text" name="state" v-model="state" placeholder="State Name">
      <input type="text" name="Type" v-model="Type" placeholder="Type">
      <input type="submit" value="Apply">
    </form>
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
      global : [],
      data : [],
      state : '',
      Type : '',
    }
  },
  methods : {
    applyfilter(e){
      e.preventDefault();
      this.data = this.global;
      console.log(this.data);
      let res = [];
      if(this.state!="" && this.Type!=""){
        res = this.data.filter(i => i.state.toLowerCase() == this.state.toLowerCase() && i.ownership.toLowerCase() == this.Type.toLowerCase() );
        this.data = res;
      }else if(this.state!=""){
        res = this.data.filter(i => i.state.toLowerCase() == this.state.toLowerCase() );
        this.data = res;
      }else if(this.Type!=""){
        let res = this.data.filter(i => i.ownership.toLowerCase() == this.Type.toLowerCase() );
        this.data = res;
      }else{
        this.data = res;
      }
    }
  },
  created(){
      axios.get("https://api.rootnet.in/covid19-in/hospitals/medical-colleges")
      .then( res => {
        this.data = (res.data.data.medicalColleges);
        this.global = this.data;
        })
      .catch( err => console.log(err) );
  }
}
</script>
