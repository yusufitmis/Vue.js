<template>
 <div>
    <h1>Edit Project</h1>
  <form @submit.prevent="handleSubmit" >
    <label for="title" >Title</label>
    <input type="text" name="title" v-model="title" required>
    <label for="">Detail</label>
    <textarea name="detail" v-model="detail" required></textarea>
    <button>Edit Project</button>
  </form>
 </div>
</template>

<script>
export default {
    props: ["id"],
    data() {
        return {
            title: "",
            detail :"",
            uri: "http://localhost:3000/projects/" + this.id
        }
    },
    mounted() {
        fetch(this.uri)
        .then((res) => res.json())
        .then((data) => {
            this.title = data.title,
            this.detail = data.detail
        })
    },
    methods: {
        handleSubmit(){
            fetch(this.uri,{
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({title: this.title, detail : this.detail})
            })
            .then(()=>this.$router.push('/'))
            .catch((err) => console.log(err))
        }
    },
}
</script>

<style>
form {
  background: #e7e7e7;
  padding: 20px 10px;
  border-radius:10px ;

}
form input{
  width: 100%;;
  border: 0px;
  border-bottom: 2px solid black;
  margin: 20px 0;
  height: 20px;
  padding: 10px;
  box-sizing: border-box;
}
form textarea{
  width: 100%;;
  border: 0px;
  border-bottom: 2px solid black;
  margin: 20px 0;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;



}
form button{
  display: block;
  margin: 20px auto;
  background: #91ff93;
  border: 0;
  color: #000000;
  padding: 10px;
  border-radius: 7px;
  font-size: 16px;
  cursor: pointer;
}
form button:hover{
  background: #89ef8b;
}
label{
  font-size: 20px;
  display: block;
  color: #000000;
  text-transform: uppercase;
  
}
</style>