<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import axios from 'axios'

interface Details {
  miktar: number
  miktarTemp: number
  id: number
  ieId: number
  userId: number
  tur: string
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
    miktarTemp: 0,
    id: 0,
    ieId: 0,
    userId: 0,
    tur: ''
  }),
})

const emit = defineEmits<Emit>()

//const cardDetails = ref({ miktar: 0, miktarTemp: 0, id: 0, ieId: 0, userId: 0, tur: '' })
const inputRef = ref<any>(null)

watch(() => props.isDialogVisible, async (newVal) => {
  if (newVal) {
    await nextTick() // DOM'un tam render edilmesini bekliyoruz
    inputRef.value.$el.querySelector('input')?.focus()
  }
})

const formSubmit = () => {
  if (props.cardDetails.miktar === null || props.cardDetails.miktar === 0) return
  if (props.cardDetails.tur != ' (düzeltme)')
    addDatabase(props.cardDetails.miktar)
  else
    updateDatabase(props.cardDetails.miktar, props.cardDetails.miktarTemp, props.cardDetails.ieId)
  emit('submit', props.cardDetails)
  emit('update:isDialogVisible', false)
}

const addDatabase = async (miktar: number) => {
  const kayitID = props.cardDetails.id
  const userId = props.cardDetails.userId
  try {
    await axios.put(`/api/uretimekle`, {
      userId: userId,
      kayitID: kayitID,
      miktar: miktar,
    })
  } catch (error) {
    console.error("Veri güncellenirken hata oluştu: ", error)
  }
  props.cardDetails.miktar = 0
  props.cardDetails.miktarTemp = 0
}

const updateDatabase = async (miktar: number, miktarTemp: number, ieId: number) => {
  const kayitID = props.cardDetails.id
  const ieID = props.cardDetails.ieId
  const userID = props.cardDetails.userId
  try {
    await axios.put(`/api/uretimduzelt`, {
      userID: userID,
      kayitID: kayitID,
      ieID: ieID,
      miktar: miktar,
      miktarTemp: miktarTemp,
    })
  } catch (error) {
    console.error("Veri güncellenirken hata oluştu: ", error)
  }
  props.cardDetails.miktar = 0
  props.cardDetails.miktarTemp = 0
}

const dialogModelValueUpdate = (val: boolean) => {
  props.cardDetails.miktar = 0
  props.cardDetails.miktarTemp = 0
  emit('update:isDialogVisible', val)
}


</script>

<template>
  <VDialog :width="$vuetify.display.smAndDown ? 'auto' : 400" :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate">
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />
    <VCard class="pa-2 pa-sm-10">
      <VCardItem class="text-center">
        <VCardTitle>
          <h4 class="text-h4 mb-2">
            Üretim Girişi {{ props.cardDetails.tur }}
          </h4>
        </VCardTitle>
        <p class="text-body-1 mb-0">
          Üretim miktarını giriniz...
        </p>
      </VCardItem>
      <VCardText class="pt-6">
        <VForm @submit.prevent="() => { }">
          <VRow>
            <VCol cols="12">
              <AppTextField ref="inputRef" v-model="props.cardDetails.miktar" type="number" />
            </VCol>
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
