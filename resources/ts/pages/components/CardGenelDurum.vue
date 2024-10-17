<template>
  <VCard class="ma-0">
    <VCardText class="pa-1 mt-0">
      <VContainer fluid class="pa-0">
        <!-- Genel Durum Kartı -->
        <VCard class="mx-1 pa-0" height="150" outlined>
          <VCardText class="pa-2">
            <div class="text-center border rounded py-2">
              <h6 class="baslik">Genel Durum</h6>
              <h4 class="fade-text1 mt-4 pt-3" :style="{ color: 'limegreen', fontSize: '70px', fontWeight: 'bold' }">
                <span class="yuzdeIsareti">%{{ durumYuzde }}</span>
              </h4>
            </div>
          </VCardText>
        </VCard>

        <!-- Alt Mesaj Kartı -->
        <VCard class="mx-1 pa-0" height="150" outlined>
          <VCardText class="pa-2">
            <div class="border rounded p-2">
              <div class="marquee">
                <h1 class="marquee-text">{{ altMesaj }}</h1>
              </div>
            </div>
          </VCardText>
        </VCard>

        <!-- Dinamik Yazı Konteyneri -->
        <div id="text-container" class="fade-text mt-4">
          <!-- Dinamik içerik buraya gelecek -->
        </div>
      </VContainer>
    </VCardText>
  </VCard>
</template>

<script>
export default {
  props: {
    durumYuzde: {
      type: Number,
      default: 0
    },
    altMesaj: {
      type: String,
      default: "Alt mesaj burada gösterilecek"
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
  white-space: nowrap;
  animation: marquee 10s linear infinite;
}

.marquee-text {
  display: inline-block;
  font-size: 24px;
  animation: scroll 15s linear infinite;
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
