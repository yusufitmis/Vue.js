const app = Vue.createApp({
    template: 
    `
    <h2>Başlık: {{baslik}}</h2>
    <h3>İçerik: {{icerik}}</h3>
    <p>Yorum sayısı: {{yorumSayisi}}</p>
    <button v-on:click="ekle()">Ekle</button>
    <p>{{yazi}}</p>

    `,
    data(){
        return{
            baslik: 'Vue Dersleri',
            icerik: 'Vue 3 Konuları',
            yorumSayisi : 0,
            yazi: 'Yorum Girmek İçin Tıklayın'
        }
    },
    methods : {
        ekle() {
            console.log("Ekle Metodu Çalıştı.")
            this.yorumSayisi++;
            this.yazi = `${this.yorumSayisi} tane yorum girildi.`
        }
    }
})
app.mount('#app')