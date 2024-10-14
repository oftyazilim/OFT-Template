<script setup lang="ts">
import axios from 'axios'

interface Details {
  miktar: number
  id: number
  userId: number
}

interface Emit {
  (e: 'submit', value: Details): void
  (e: 'update:isDialogVisible', value: boolean): void
}

interface Props {
  cardDetails?: Details
  isDialogVisible: boolean
}

const props = withDefaults(defineProps<Props>(), {
  cardDetails: () => ({
    miktar: 0,
    id: 0,
    userId: 0,
  }),
})

const emit = defineEmits<Emit>()

// const cardDetails = ref<Details>(structuredClone(toRaw(props.cardDetails)))
const cardDetails = ref({ miktar: 0, id: 0, userId: 0 })

watch(() => props, () => {
  cardDetails.value = structuredClone(toRaw(props.cardDetails))
})

const formSubmit = () => {
  if (cardDetails.value.miktar === null || cardDetails.value.miktar === 0) return
  updateDatabase(cardDetails.value.miktar)
  emit('submit', cardDetails.value)
  emit('update:isDialogVisible', false)
}

const updateDatabase = async (miktar: number) => {
  const kayitID = props.cardDetails.id
  const userId = props.cardDetails.userId
  try {
    axios
      .put(`/api/update-uretim`, {
        userId: userId,
        kayitID: kayitID,
        miktar: miktar
      })
      .then((response) => {
        cardDetails.value.miktar = 0
      })
      .catch((error) => {
        console.error("Veri güncellenirken hata oluştu: ", error);
      });
  } catch (error) {
    console.error('Veritabanı güncelleme hatası:', error)
  }
}

const dialogModelValueUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}
</script>

<template>
  <VDialog :width="$vuetify.display.smAndDown ? 'auto' : 400" :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate">
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-2 pa-sm-10">
      <!-- 👉 Title -->
      <VCardItem class="text-center">
        <VCardTitle>
          <h4 class="text-h4 mb-2">
            Üretim Girişi
          </h4>
        </VCardTitle>
        <p class="text-body-1 mb-0">
          Üretim miktarını giriniz...
        </p>
      </VCardItem>

      <VCardText class="pt-6">
        <VForm @submit.prevent="() => { }">
          <VRow>
            <!-- 👉 Miktar -->
            <VCol cols="12">
              <AppTextField v-model="cardDetails.miktar" type="number">

              </AppTextField>
            </VCol>

            <!-- 👉 Aksiyon -->
            <VCol cols="12" class="text-center">
              <VBtn class="me-4" type="submit" @click="formSubmit">
                Kaydet
              </VBtn>
              <VBtn color="warning" variant="tonal" @click="$emit('update:isDialogVisible', false)">
                Vazgeç
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
