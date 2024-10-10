<template>
  <div>
    <slot></slot>
    <input type="text" v-model="name">
    <input type="text" v-model="surname">
    <p>{{ fullname }}</p> <br>
    <input type="number" v-model="number1"> <br>
    <input type="number" v-model="number2"> <br>
    <!-- <p>{{ total }}</p> <br> -->
    <input type="number" v-model="total" disabled> <br>

    


  </div>
</template>

<script>
export default {
   data() {
    return {
        name:"",
        surname:"",
        number1 : 0,
        number2: 0,
        total: 0
    }
   },
   watch:{
    number1(newValue, oldValue){
        this.total = parseInt(this.number1) + parseInt(this.number2)
    },
    number2(newValue, oldValue){
        this.total = parseInt(this.number1) + parseInt(this.number2)
    }
   },
   computed:{
    fullname(){
        return this.name + " "+this.surname
    },
    // total(){
    //     return parseInt(this.number1) + parseInt(this.number2)
    // }
   }
}
</script>

<style>

</style>