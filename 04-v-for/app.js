const app = Vue.createApp({
    template: 
    `
    // <ul>
    //     <li v-for="gun in gunler">{{gun}}</li>
    // </ul>

    <ul>
        <li v-for="person in persons">Çalışan: {{person.name}} Maaş: {{person.maas}}</li>
    </ul>

    `,
    data(){
        return{
        //    gunler:["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
        persons: [
            {name:"Ali",maas:25000},
            {name:"Veli",maas:50000},
            {name:"Ahmet",maas:40000}

        ]
            
        }
    },
    methods : {
        
    }
})
app.mount('#app')