<template>
  <VCard class="ma-0">
    <VCardTitle class="pt-1 text-center mt-4 pb-4" :style="{color: 'lightgray', fontWeight: 'bold',  fontSize: '40px' }" >{{ title }}</VCardTitle>
    <VCardText class="pa-1 mt-0">
      <VContainer fluid class="pa-0">
        <VCard class="border rounded mb-1" elevation="3">
          <VCardText class="text-center pt-4 pb-4 pa-1">
            <h2 class="baslik text-center pb-5" :style="{ color: 'orange' }">Haftalık Plan</h2>
            <p class="miktar mt-6 pb-8" :style="{ color: 'limegreen', fontSize: '90px', fontWeight: 'bold' }">{{ plan }}</p>
          </VCardText>
        </VCard>
        <VCard class="border rounded mt-2 pa-0" elevation="3">
          <VCardText class="text-center pt-4">
            <h2 class="baslik text-center pb-5" :style="{ color: 'orange' }">Üretilen</h2>
            <p class="miktar mt-6 pb-8" :style="{ color: 'rgb(139, 136, 236)', fontSize: '90px', fontWeight: 'bold' }">{{ uretilen }}</p>
          </VCardText>
        </VCard>
        <VCard class="border rounded mt-2 pa-0" elevation="3">
          <VCardText class="text-center pt-3">
            <h2 class="baslik text-center pb-5" :style="{ color: 'orange' }">Kalan</h2>
            <p class="miktar mt-6 pb-8" :style="{ color: 'rgb(210, 138, 138)', fontSize: '90px', fontWeight: 'bold' }">{{ kalan }}</p>
          </VCardText>
        </VCard>
        <VCard class="border rounded mt-2 pa-0" elevation="3">
          <VCardText class="text-center pt-2 pa-2">
            <h2 class="baslik text-center pb-5" :style="{ color: 'orange' }">Durum (%)</h2>
            <p class="miktar-yuzade mt-6 pb-8" :style="{ color: 'yellow', fontSize: '70px', fontWeight: 'bold' }">{{ yuzde }}</p>
            <VProgressLinear
              :value="yuzde"
              height="15"
              color="yellow"
              class="mt-3 pa-0 m-0"
            />
          </VCardText>
        </VCard>
      </VContainer>
    </VCardText>
  </VCard>



  
</template>

<script>
export default {
  props: {
    title: String,
    plan: Number,
    uretilen: Number,
    kalan: Number,
    yuzde: Number,
  },
};
</script>

<style scoped>
.baslik {
  font-weight: bold;
}

.miktar {
  margin: 0;
}

.miktar-yuzde {
  font-size: 24px; /* İsteğe bağlı olarak stil verilebilir */
}
</style>
