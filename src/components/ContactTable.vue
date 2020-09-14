<template>
    <div id = "app">
        <table id = "app">
            <th> Location </th>
            <th> Number </th>
        <tr v-bind:key="number.number" v-for="number in numbers" >
            <td>{{number.loc}}</td>
            <td>{{number.number}}</td> 
            <hr>
        </tr>
        </table>
    </div>
</template>

<script>
export default {
    name : "ContactTable",
    props: ["numbers"]
}
</script>