const app = Vue.createApp({
    template: 
    `
    <div v-if="showInfo">Deneme 1</div>
    <div v-show="showInfo">Deneme 2</div>
    <button @click=toggle()>
    <span v-if="!showInfo">Göster</span>
    <span v-else>Gizle</span>
    </button>
    `,
    data(){
        return{
            showInfo : true
            
        }
    },
    methods : {
        toggle() {
            this.showInfo=!this.showInfo
        }
    }
})
app.mount('#app')