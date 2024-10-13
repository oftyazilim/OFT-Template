<script setup lang="ts">
import { useConfigStore } from '@core/stores/config'
import type { ThemeSwitcherTheme } from '@layouts/types'
import { themes } from "devextreme/ui/themes";

const props = defineProps<{
  themes: ThemeSwitcherTheme[]
}>()

const configStore = useConfigStore()

const selectedItem = ref([configStore.theme])

watch(
  () => configStore.theme,
  () => {
    selectedItem.value = [configStore.theme]
    changeDevExpressTheme(configStore.theme)
   },
  { deep: true },
)




const changeDevExpressTheme = (theme) => {
  // Eski temayı kaldır
  const currentThemeLink = document.querySelector('link[rel="stylesheet"][data-theme]');
  if (currentThemeLink) {
    currentThemeLink.parentNode.removeChild(currentThemeLink);
  }

  // Yeni temayı yükle
  const newThemeLink = document.createElement('link');
  newThemeLink.rel = 'stylesheet';
  newThemeLink.setAttribute('data-theme', theme);

  if (theme === 'dark') {
    newThemeLink.href = '/dx.generic.dark-oft-orange.css';  // Karanlık tema için doğru yolu belirtin
  } else {
    newThemeLink.href = '/dx.carmine.css';  // Açık tema için doğru yolu belirtin
  }

  // Yeni temayı sayfaya ekle
  document.head.appendChild(newThemeLink);
};



</script>

<template>
  <IconBtn color="rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))">
    <VIcon :icon="props.themes.find(t => t.name === configStore.theme)?.icon" />

    <VTooltip
      activator="parent"
      open-delay="1000"
      scroll-strategy="close"
    >
      <span class="text-capitalize">{{ configStore.theme }}</span>
    </VTooltip>

    <VMenu

      activator="parent"
      offset="12px"
      :width="180"
    >
      <VList
        v-model:selected="selectedItem"
        mandatory
      >
        <VListItem
          v-for="{ name, icon } in props.themes"
          :key="name"
          :value="name"
          :prepend-icon="icon"
          color="primary"
          @click="() => { configStore.theme = name }"
        >
          <VListItemTitle class="text-capitalize">
            {{ name }}
          </VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
  </IconBtn>
</template>
