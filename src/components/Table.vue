<template>
    <div>
        <div v-bind:key="number.number" v-for="number in numbers" >
            <span>{{number.loc}}</span> | 
            <span>{{number.number}}</span>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    name : "Table",
    props: ["numbers"]
}
</script>