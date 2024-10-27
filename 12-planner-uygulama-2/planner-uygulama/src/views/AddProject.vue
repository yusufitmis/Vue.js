<template>
  <form @submit.prevent="handleSubmit">
    <label for="title" >Title</label>
    <input type="text" name="title" v-model="title" required>
    <label for="">Detail</label>
    <textarea name="detail" v-model="detail" required></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    detail :""
    }
  },
  methods: {
  handleSubmit() {
    let project = {
      title: this.title,
      detail: this.detail,
      complete: false
    };

    fetch("http://localhost:3000/projects", {
      method: "POST",  
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project)
    })
    .then(() => this.$router.push('/'))
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
  font-size: 16px;
  font-family: 'Times New Roman', Times, serif;
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