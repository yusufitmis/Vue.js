<template>
  <div>
    <h3>Öğrenciler</h3>
    <div v-for="student in students" :key="student.id">
        <router-link :to="{path:`/students/${student.id}`}" >{{ student.name }}</router-link>
        <!-- <router-link :to="{name:'studentsInfo', params:{id:student.id}}" >{{ student.name }}</router-link> -->

    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            students:[
                {id:1, name:"yusuf", not:75},
                {id:2, name:"Ali", not:30},
                {id:3, name:"Veli", not:96},
            ]
        }
    },
}
</script>

<style>

</style>