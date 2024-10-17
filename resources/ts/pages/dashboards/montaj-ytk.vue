<template>
        <VRow no-gutters>
            <VCol cols="12" md="4" lg="2" sm="1" v-for="card in cards" :key="card.title">
                <CardIstasyon :title="card.title" :plan="card.plan" :uretilen="card.uretilen" :kalan="card.kalan"
                :yuzde="card.yuzde" />
            </VCol>
        </VRow>
        
        <VRow no-gutters>
            <VCol cols="12"  >
                <CardGenelDurum :durumYuzde="durumYuzde" :altMesaj="altMesaj" />  
            </VCol>
        </VRow>
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
                { title: "BORU", plan: -9000, uretilen: 0, kalan: 0, yuzde: 0 },
                { title: "POMPA", plan: 0, uretilen: 0, kalan: 0, yuzde: 0 },
                { title: "ŞASE", plan: 0, uretilen: 0, kalan: 0, yuzde: 0 },
                { title: "SİFON", plan: 0, uretilen: 0, kalan: 0, yuzde: 0 },
                { title: "VENTURİ", plan: 0, uretilen: 0, kalan: 0, yuzde: 0 },
                { title: "GALVANİZ", plan: 0, uretilen: 0, kalan: 0, yuzde: 0 },
                // Diğer kart verilerini buraya ekleyin
            ],
            durumYuzde: 0,
            altMesaj: "Dinamik mesaj burada olacak"
        };
    },
    mounted() {
        //   // İki ayrı API isteği yapalım
        //   const planDataRequest = axios.get('https://api.example.com/plan-data');
        //   const uretilenDataRequest = axios.get('https://api.example.com/uretilen-data');

        //   // Promise.all ile iki isteği aynı anda yapıyoruz
        //   Promise.all([planDataRequest, uretilenDataRequest])
        //     .then(([planResponse, uretilenResponse]) => {
        //       const planData = planResponse.data;
        //       const uretilenData = uretilenResponse.data;

        //       // plan ve uretilen verilerini cards dizisine atayın
        //       this.cards = [
        //         {
        //           title: "BORU",
        //           plan: planData.boru.plan,
        //           uretilen: uretilenData.boru.uretilen,
        //           kalan: planData.boru.kalan,
        //           yuzde: planData.boru.yuzde
        //         },
        //         {
        //           title: "POMPA",
        //           plan: planData.pompa.plan,
        //           uretilen: uretilenData.pompa.uretilen,
        //           kalan: planData.pompa.kalan,
        //           yuzde: planData.pompa.yuzde
        //         },
        //         // Diğer kart verilerini de burada atayın
        //       ];

        //       // Diğer genel bilgileri ayarlayın
        //       this.genelDurum = planData.genelDurum;
        //       this.altMesaj = planData.altMesaj;
        //     })
        //     .catch(error => {
        //       console.error("Veriler alınırken hata oluştu:", error);
        //     });
    }
};
</script>

<style scoped>
/* Gerekli Vuetify özel stiller */
</style>
