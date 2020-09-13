<template>
    <div>
        <table>
            <th>State</th>
            <th>Rural Hospitals</th>
            <th>Rural Beds</th>
            <th>Urban Hospitals</th>
            <th>Urban Beds</th>
            <th>Total Hospitals</th>
            <th>Total Beds</th>

        <tr v-bind:key="row.state" v-for="row in data" >
            <td>{{row.state}}</td>
            <td>{{row.ruralHospitals}}</td> 
            <td>{{row.ruralBeds}}</td>
            <td>{{row.urbanHospitals}}</td> 
            <td>{{row.urbanBeds}}</td>
            <td>{{row.totalHospitals}}</td> 
            <td>{{row.totalBeds}}</td>
            <hr>
        </tr>
        </table>
    </div>
</template>

<script>
export default {
    name : "HospitalTable",
    props: ["data"]
}
</script>