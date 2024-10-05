const app = Vue.createApp({
    template: 
    `
    <h2>Farameworks</h2>
    <ul>
        <li v-for="f in frameworks" class="list" :class="{selected:f.selected}" @click="selectedTag(f)">{{f.name}}</li>
    </ul>
    <h2>Seçilen Frameworkler</h2>
    <ul>
        <li v-for="s in selectTags">{{s.name}}</li>
    </ul>


    `,
    data(){
        return{
            frameworks : [
                {name:"Vue",selected:true},
                {name:"React",selected:false},
                {name:"Angular",selected:false},

            ]
            
        }
    },
    methods : {
        selectedTag(f){
            f.selected=!f.selected;
        }
    },
    computed : {
        selectTags(){
            return selecteds = this.frameworks.filter(i=>i.selected)
        }
    }
})
app.mount('#app')