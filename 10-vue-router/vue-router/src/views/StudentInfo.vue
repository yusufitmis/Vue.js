<template>
  <div>
    <h3>Öğrenci Bilgisi</h3>
    <p>Öğrenci id: {{ id }}</p>
  </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         ogrenciID: this.$route.params.id
    //     }
    // },
    props:["id"]
}
</script>

<style>

</style>