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
          
          
                <Transition name="fade" appear>

                <h4 v-if="uretilenGorunur"  class="mt-4 pt-0 fade fade-in" :style="{ color: 'limegreen', fontSize: '70px', fontWeight: 'bold' }">
                  <span class="yuzdeIsareti">{{ durumYuzde }}</span>
                </h4>
              </Transition>
              <VProgressLinear :model-value="yuzdelik" height="15" color="warning" class="pa-0 mx-0" style="margin-block-end: -15px; margin-block-start: 28px;"/>
          
          
            </div>
            </VCardText>
          </VCard>
        </VCol>
        <!-- Alt Mesaj Kartı (Kayan Yazı)-->
        <VCol md="10" sm="6">
          <VCard class="pa-0 " elevation="0">
            <VCardText class="pt-4 pb-2 border mx-0">
              <div class="rounded p-0 pt-4">
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
import { rounded } from '@/views/demos/components/avatar/demoCodeAvatar';
import { VRow } from 'vuetify/components';

export default {
  props: {
    durumYuzde: {
      type: String,
      default: '0'
    },
    altMesaj: {
      type: String,
      default: ""
    },
    uretilenGorunur: Boolean,
    yuzdelik: {
      type: Number,
      required: true, // Yüzdeyi dışarıdan geçmek zorunda
    },
  }
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
  animation: scroll 12s linear infinite;
  color: #9acd32;
  font-family: 'Montserrat', sans-serif;
  font-size: 60px;
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
