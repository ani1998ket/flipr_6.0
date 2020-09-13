<template>
  <div id="nav">
    <router-link to="/dashboard/hospital">Hospital</router-link> | 
    <router-link to="/dashboard/medical_college">Medical College</router-link>
  </div>
  <router-view/>
</template>

<script>

export default {
  name : "Dashboard"
}
</script>
