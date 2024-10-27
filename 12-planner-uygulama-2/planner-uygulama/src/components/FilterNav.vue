<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')" :class= "{active: current ==='all'}">All</button>
    <button @click="updateFilter('completed')" :class= "{active: current ==='completed'}">Completed</button>
    <button @click="updateFilter('ongoing')" :class= "{active: current ==='ongoing'}">OnGoing</button>
  </nav>
</template>

<script>
export default {
    props: ['current'],
methods: {
    updateFilter(by){
        this.$emit('filterChange',by);
    }
},
}
</script>

<style>
.filter-nav button{
    background: none;
    border: none;
    color: #bbb;
    outline: none;
    font-size: 12px;
    margin-right:10px ;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
}
.filter-nav button.active{
    color: #555;
}
</style>