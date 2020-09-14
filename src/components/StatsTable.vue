<template>
    <div>
        <table>
        <tr v-bind:key="row" v-for="row in data" >
            <td>{{row}}</td>
            <hr>
        </tr>
        </table>
    </div>
</template>

<script>
export default {
    name : "StatsTable",
    props: ["data"]
}
</script>