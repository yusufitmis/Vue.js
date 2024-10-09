<template>
  <form @submit.prevent="sendData()">
    <input type="text" v-model="text">
    <p>{{ text }}</p> <br>
    <select v-model="framework">
        <option>Vue</option>
        <option>React</option>
        <option>Angular</option>
    </select>
    <p>{{ framework }}</p>
    <hr>
    <br>
    <input type="checkbox"  id="checked1" v-model="checked">
    <label for="checked1">Onay</label>
    <p>Sonuç: {{ checked ? "Onaylıyorum" : "Onaylamıyorum" }}</p>
    <hr>
    <br>
    <div>
        <input type="checkbox"  id="vue" value="Vue" v-model="frameworks">
        <label for="vue">vue</label>
    </div>
    <div>
        <input type="checkbox"  id="React" value="React" v-model="frameworks">
        <label for="React">React</label>
    </div>
    <div>
        <input type="checkbox"  id="Angular" value="Angular" v-model="frameworks">
        <label for="Angular">Angular</label>
    </div>
    <p>Seçtiğiniz Frameworkler: {{ frameworks }}</p>
    <hr>
    <br>
    <h3>Öğrenciler</h3>
    <input type="text" v-model="student" @keyup.alt="addStudent">
    <p v-for="student in students" :key="student" @click="deleteStudent(student)">{{ student }}</p>
    <br>
    <button>Gönder</button>
</form>
  
</template>

<script>
export default {
data() {
    return {
        text:"Deneme",
        framework: "Lütfen Bir Framework Seçin!",
        checked: false,
        frameworks: [],
        student:"",
        students:[],
    }
},
methods: {
    addStudent(e){
        if(e.key =="," && this.student){
            if(!this.students.includes(this.student)){
                this.students.push(this.student)
            }
        this.student=""
            
        }
    },
    deleteStudent(student){
        this.students = this.students.filter(item => student !== item)
    },
    sendData(){
        console.log("Veriler Gönderildi.")
    }
    
},
}
</script>

<style>

</style>