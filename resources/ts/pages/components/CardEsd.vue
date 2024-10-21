<template>
  <VCard class="ma-0">
    <VCardTitle class="pt-4 mt-1 me-1 text-center mx-1 pb-4 rounded"
      :style="{ backgroundColor: '#928be8', color: '#2c247f', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '40px' }">
      {{ title }}</VCardTitle>
    <VCardText class="pa-1 mt-0">
      <VContainer fluid class="pa-0">
        <VCard class="border rounded mb-1" elevation="3">
          <VCardText class="text-center pt-4 pb-4 pa-1">
            <h2 class="baslik text-center pb-5" :style="{ color: 'orange', fontFamily: 'Montserrat' }">Haftalık Plan
            </h2>
            <p class="miktar mt-6 pb-8" :style="{ color: 'limegreen', fontSize: '90px', fontWeight: 'bold' }">{{ plan }}
            </p>
          </VCardText>
        </VCard>


        <VCard class="border rounded mt-2 pa-0" elevation="3">
          <VCardText key="uretilen" class="text-center pt-4">
            <h2 class="baslik text-center pb-2" :style="{ color: 'orange', fontFamily: 'Montserrat' }">Üretilen</h2>
            <Transition name="fade" appear>
              <div v-if="uretilenGorunur" class="miktar mt-0 pb-0 fade fade-in">
                <span class="pb-2" :style="{ fontSize: '22px', color: 'orange', fontFamily: 'Montserrat' }">{{ baslik
                  }}</span>
                <p class="mt-6 pt-2" :style="{ color: 'rgb(139, 136, 236)', fontSize: '90px', fontWeight: 'bold' }">{{
                  uretilen }} </p>
              </div>
            </Transition>
          </VCardText>
        </VCard>

        <VCard class="border rounded mt-2 pa-0" elevation="3">
          <VCardText class="text-center pt-3">
            <h2 class="baslik text-center pb-5" :style="{ color: 'orange' }">Kalan</h2>
            <p class="miktar mt-6 pb-8"
              :style="{ color: 'rgb(210, 138, 138)', fontFamily: 'Montserrat', fontSize: '90px', fontWeight: 'bold' }">
              {{ kalan }}
            </p>
          </VCardText>
        </VCard>

        <VCard class="border rounded mt-2 pa-0" elevation="3">
          <VCardText class="text-center pt-2 pa-2">
            <h2 class="baslik text-center pb-5" :style="{ color: 'orange', fontFamily: 'Montserrat' }">Durum (%)</h2>
            <p class="miktar-yuzde mt-6 pb-8" :style="{ color: 'yellow', fontSize: '70px', fontWeight: 'bold' }">
              {{ yuzde }}
            </p>
            <VProgressLinear :model-value="ilerleme" height="15" color="warning" class="mt-3 pa-0 m-0" />
          </VCardText>
        </VCard>
      </VContainer>
    </VCardText>
  </VCard>
</template>

<script>
import axios from 'axios'; // Axios'u içe aktarıyoruz

export default {
  props: {
    title: String,
    plan: Number,
    baslik: String,
    uretilen: Number,
    kalan: Number,
    yuzde: Number,
    uretilenGorunur: Boolean,
    ilerleme: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active,
.fade-appear-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter,
.fade-leave-to,
.fade-appear {
  opacity: 0;
}

.fade-in {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.miktar {
  margin: 0;
}

.miktar-yuzade {
  font-size: 24px;
}
</style>
