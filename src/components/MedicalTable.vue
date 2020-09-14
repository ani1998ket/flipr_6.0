<template>
    <div>
        <table>
            <th>State</th>
            <th>Institute</th>
            <th>City</th>
            <th>Type</th>
            <th>Admission Capacity</th>
            <th>Hospital Beds</th>

        <tr v-bind:key="row" v-for="row in data" >
            <td>{{row.state}}</td>
            <td>{{row.name}}</td> 
            <td>{{row.city}}</td>
            <td>{{row.ownership}}</td> 
            <td>{{row.admissionCapacity}}</td>
            <td>{{row.hospitalBeds}}</td> 
            <hr>
        </tr>
        </table>
    </div>
</template>

<script>
export default {
    name : "MedicalTable",
    props: ["data"]
}
</script>