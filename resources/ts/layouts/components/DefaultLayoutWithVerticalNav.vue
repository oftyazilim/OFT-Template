<script lang="ts" setup>
import navItems from '@/navigation/vertical'
import { themeConfig } from '@themeConfig'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
// import NavBarNotifications from '@/layouts/components/NavBarNotifications.vue'
// import NavSearchBar from '@/layouts/components/NavSearchBar.vue'
// import NavbarShortcuts from '@/layouts/components/NavbarShortcuts.vue'
// import NavBarI18n from '@core/components/I18n.vue'
// @layouts plugin
import { VerticalNavLayout } from '@layouts'




import { usePageTitleStore } from '@/stores/pageTitle.js';
import { computed } from 'vue';

// Pinia store'u kullanarak başlığı ve toplam kg değerini al
const pageTitleStore = usePageTitleStore();

const title = computed(() => pageTitleStore.title);
const toplam = computed(() => pageTitleStore.toplam);

// Toplam Kg'yi formatlayan bir fonksiyon
// function formatNumber(number) {
//   return new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 0 }).format(number);
// }

</script>




<template>
  <VerticalNavLayout :nav-items="navItems">
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <IconBtn id="vertical-nav-toggle-btn" class="ms-n3 d-lg-none" @click="toggleVerticalOverlayNavActive(true)">
          <VIcon size="26" icon="tabler-menu-2" />
        </IconBtn>

        <!-- <NavSearchBar class="ms-lg-n3" /> -->

        <!-- NavBar üzaerinde ki değişken başlık. Her sayfada ilgili bilgiyi alıyor -->
        <!-- <h5 class="text-h5 m-0 p-0">Sayfa: {{ baslik }}</h5> -->


        <h5 class="text-h5 m-0 p-0"> {{ title }} </h5> <!-- Dinamik başlık -->
        <h5 class="text-h5 m-0 ms-2 p-0"> {{ toplam }} </h5>


        <VSpacer />

        <!-- <NavBarI18n
          v-if="themeConfig.app.i18n.enable && themeConfig.app.i18n.langConfig?.length"
          :languages="themeConfig.app.i18n.langConfig"
        /> -->
        <NavbarThemeSwitcher />
        <!-- <NavbarShortcuts /> -->
        <!-- <NavBarNotifications class="me-1" /> -->
        <UserProfile />
      </div>
    </template>

    <!-- 👉 Pages -->
    <slot />

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>

    <!-- 👉 Customizer -->
    <TheCustomizer />
  </VerticalNavLayout>
</template>
