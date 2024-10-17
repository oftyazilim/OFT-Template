<template>
  <VCard class="ma-0">
    <!-- <VCardText class="pa-1 mt-0"> -->
    <VContainer fluid class="pa-1">
      <VRow no-gutters>
        <!-- Genel Durum Kartı -->
        <VCol md="2" sm="6">
          <VCard class="mx-0 pa-0" elevation="0">
            <VCardText class="pa-2">
              <div class="text-center rounded py-2">
                <h2 class="baslik text-center pb-5" :style="{ color: 'orange' }">Genel Durum</h2>
                <h4 class="fade-text1 mt-4 pt-3" :style="{ color: 'limegreen', fontSize: '70px', fontWeight: 'bold' }">
                  <span class="yuzdeIsareti">%{{ durumYuzde }}</span>
                </h4>
              </div>
            </VCardText>
          </VCard>
        </VCol>
        <!-- Alt Mesaj Kartı (Kayan Yazı)-->
        <VCol md="10" sm="6">
          <VCard class="pa-0 " elevation="0">
            <VCardText class="pt-1 border mx-0">
              <div class="rounded p-0 pt-3">
                <div class="marquee">
                  <h1 class="marquee-text">{{ altMesaj }}</h1>
                </div>
              </div>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
    <!-- </VCardText> -->
  </VCard>
</template>

<script>
import { VRow } from 'vuetify/components';

export default {
  props: {
    durumYuzde: {
      type: Number,
      default: 0
    },
    altMesaj: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.border {
  border: 1px solid #ccc;
  border-radius: 8px;
}

.marquee {
  overflow: hidden;
  animation: marquee 10s linear infinite;
  block-size: auto;
  white-space: nowrap;
}

.marquee-text {
  display: inline-block;
  animation: scroll 15s linear infinite;
  color: #9acd32;
  font-family: 'Montserrat', sans-serif;
  font-size: 50px;
  line-height: 100px;
}

@keyframes scroll {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>
