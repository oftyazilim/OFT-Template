<template>
    <VRow no-gutters>
        <VCol md="4" lg sm="6" v-for="card in cards" :key="card.title">
            <CardIstasyon :uretilenGorunur="uretilenGorunur" :title="card.title" :plan="card.plan" :baslik="card.baslik" :uretilen="card.uretilen" :kalan="card.kalan"
                :yuzde="card.yuzde" />
        </VCol>
    </VRow>

    <CardGenelDurum class="mt-6" :durumYuzde="durumYuzde" :altMesaj="altMesaj" />
</template>






<script>
import axios from 'axios';
import CardIstasyon from '../components/CardIstasyon.vue';
import CardGenelDurum from '../components/CardGenelDurum.vue';

export default {
    components: {
        CardIstasyon,
        CardGenelDurum,
    },
    data() {
        return {
            cards: [
                { title: "BORU", plan: -9000, baslik: "(haftalık)", uretilen: 0, kalan: 0, yuzde: 0 },
                { title: "POMPA", plan: 0, baslik: "(haftalık)", uretilen: 0, kalan: 0, yuzde: 0 },
                { title: "ŞASE", plan: 0, baslik: "(haftalık)", uretilen: 0, kalan: 0, yuzde: 0 },
                { title: "SİFON", plan: 0, baslik: "(haftalık)", uretilen: 0, kalan: 0, yuzde: 0 },
                { title: "VENTURİ", plan: 0, baslik: "(haftalık)", uretilen: 0, kalan: 0, yuzde: 0 },
                { title: "GALVANİZ", plan: 0, baslik: "(haftalık)", uretilen: 0, kalan: 0, yuzde: 0 },
            ],
            durumYuzde: 0,
            altMesaj: " hjhkhkhkk k kjhkj hk jkh kjhjk kjh !",
            uretilenGorunur: true, // Başlangıçta görünür
            uretilenDegerler: [100, 200, 300], // Gösterilecek farklı değerler
            index: 0
        };
    },
    mounted() {
        axios.get('/api/dashboards/mesajal')
        .then(response => {
            console.log(response.data.mesaj.DEGER);
            this.altMesaj = response.data.mesaj.DEGER; // Gelen verileri cards dizisine ata
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

        setInterval(() => {
            this.uretilenGorunur = false; // Fade-out başlatmak için görünürlüğü kapat

            setTimeout(() => {
                this.index = (this.index + 1) % this.uretilenDegerler.length; // Sonraki değeri seç
                this.cards[0].baslik = '(haftalık)'; // Doğrudan atama
                this.cards[0].uretilen = this.uretilenDegerler[this.index]; // Doğrudan atama
                this.uretilenGorunur = true; // Fade-in için görünürlüğü aç
            }, 1000); // 1 saniye sonra değeri değiştir
        }, 3000); // 3 saniyede bir tekrar
    },
};
</script>

<style scoped>

</style>





// mounted() {


// // İki ayrı API isteği yapalım
// const planDataRequest = axios.get('https://api.example.com/plan-data');
// const uretilenDataRequest = axios.get('https://api.example.com/uretilen-data');

// // Promise.all ile iki isteği aynı anda yapıyoruz
// Promise.all([planDataRequest, uretilenDataRequest])
// .then(([planResponse, uretilenResponse]) => {
// const planData = planResponse.data;
// const uretilenData = uretilenResponse.data;

// // plan ve uretilen verilerini cards dizisine atayın
// this.cards = [
// {
// title: "BORU",
// plan: planData.boru.plan,
// uretilen: uretilenData.boru.uretilen,
// kalan: planData.boru.kalan,
// yuzde: planData.boru.yuzde
// },
// {
// title: "POMPA",
// plan: planData.pompa.plan,
// uretilen: uretilenData.pompa.uretilen,
// kalan: planData.pompa.kalan,
// yuzde: planData.pompa.yuzde
// },
// // Diğer kart verilerini de burada atayın
// ];

// // Diğer genel bilgileri ayarlayın
// this.genelDurum = planData.genelDurum;
// this.altMesaj = planData.altMesaj;
// })
// .catch(error => {
// console.error("Veriler alınırken hata oluştu:", error);
// });
// }
