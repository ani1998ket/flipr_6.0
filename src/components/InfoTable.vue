<template>
    <div>
        <table>
        <tr v-bind:key="info.date" v-for="info in infos" >
            <td>{{info.date}}</td>
            <td>{{info.title}}</td>
            <td>{{info.link}}</td> 
            <hr>
        </tr>
        </table>
    </div>
</template>

<script>
export default {
    name : "InfoTable",
    props: ["infos"],
    created(){
        this.infos.forEach(info => {
            info.date = info.title.slice(0,11);
            info.title = info.title.slice(11);
        });
    }
}
</script>