<template>
    <div>
        <table>
        <tr v-bind:key="info.date" v-for="info in infos" >
            <td>{{info.date}}</td>
            <td>{{info.title}}</td>
            <td><a href = {{info.link}}>{{info.link}}</a></td>
            <hr>
        </tr>
        </table>
    </div>
</template>

<script>
export default {
    name : "InfoTable",
    props: ["infos"]
}
</script>