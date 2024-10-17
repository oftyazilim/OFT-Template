<template>
  <div>
    <VRow>
      <VCard>
        <DxContextMenu :data-source="menuItems" :width="200" target="#gridContainer" @item-click="itemClick" />
        <DxDataGrid id="gridContainer" ref="dataGridRef" @content-ready="onContentReady" :data-source="gridData"
          :show-borders="true" key-expr="ID" :show-column-lines="true"
          :show-row-lines="false" :row-alternation-enabled="false" :allow-column-reordering="true"
          @row-removed="onRowRemoved" :allow-column-resizing="true" @exporting="onExporting" :column-width="100"
          :show-indicator="true" :repaint-changes-only="true">

          <DxEditing :allow-deleting="true" :use-icons="true"/>

          <!-- Özelleştirilmiş butonlar -->
          <DxColumn type="buttons" :fixed="true">
            <DxButton name="delete" icon="trash" />
            <DxButton hint="Üretim" icon="optionsgear" @click="onUretimClick" />
          </DxColumn>

          <DxColumn data-field="ISTTANIM" caption="İSTASYON" data-type="string"  :width="170"/>
          <DxColumn data-field="ID" data-type="number" caption="ID" :visible="false" sort-order="desc" :width="80" />
          <DxColumn data-field="OLUSTURANID" data-type="number" caption="KAYIT EDEN" :visible="true" :width="80" />
          <DxColumn data-field="DUZENLEYENID" data-type="number" caption="DÜZENLEYEN" :visible="false" :width="80" />
          <DxColumn data-field="STOKID" caption="URUN ID" :visible="true" data-type="number" />
          <DxColumn data-field="KOD" caption="STOK KODU" data-type="string"
            :visible="true" :width="120"/>
          <DxColumn data-field="TANIM" caption="STOK ADI" data-type="string"
            :width="300"/>
          <DxColumn data-field="MMLGRPKOD" :width="250" caption="GRUP KODU"
            data-type="string"/>
          <DxColumn data-field="MIKTAR" caption="MİKTAR" data-type="number" :visible="true" :width="110" />
          <DxColumn data-field="URETIMTARIH" caption="KYT TARİHİ" data-type="date" :width="100" :visible="true" :format="{
            formatter: (date) => {
              const formattedDate = new Intl.DateTimeFormat('tr-TR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
              }).format(new Date(date));

              return formattedDate.replace(/\//g, '.');
            }
          }" />
          <DxColumn data-field="DUZENTARIH" caption="DZN TARİHİ" data-type="date" :width="100" :visible="false" :format="{
            formatter: (date) => {
              const formattedDate = new Intl.DateTimeFormat('tr-TR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
              }).format(new Date(date));

              return formattedDate.replace(/\//g, '.');
            }
          }" />
          <DxColumn data-field="NOTLAR" caption="NOTLAR" data-type="string" />


          <DxStateStoring :enabled="true" type="localStorage" storage-key="storage" />
          <DxGroupPanel :visible="true" emptyPanelText="Gruplanacak sütunlar buraya..." />
          <DxGrouping :auto-expand-all="true" />
          <DxFilterPanel :visible="true" />
          <DxLoadPanel :enabled="true" />
          <DxScrolling mode="virtual" column-rendering-mode="virtual" />
          <DxFilterRow :visible="true" />
          <DxFilterBuilderPopup :position="filterBuilderPopupPosition" />
          <DxHeaderFilter :visible="true" />
          <DxSearchPanel :visible="true" :width="240" placeholder="Ara..." />
          <DxExport :enabled="true" :allow-export-selected-data="true" />
          <DxSelection mode="single" />
          <DxColumnFixing :enabled="true" />
          <DxColumnChooser height="540px" :enabled="true" title="Sütun Seçici">
            <DxPosition my="right top" at="right bottom" of=".dx-datagrid-column-chooser-button" />

            <DxColumnChooserSearch :enabled="true" :editor-options="editorOptions" />
            <DxColumnChooserSelection :allow-select-all="true" :select-by-click="true" :recursive="true" />
          </DxColumnChooser>

          <DxSummary>
            <DxTotalItem column="TANIM" summary-type="count" display-format="{0} adet" />
            <DxGroupItem :show-in-group-footer="false" :align-by-column="true" column="TANIM" summary-type="count"
              display-format="{0} adet" />
          </DxSummary>

        </DxDataGrid>
      </VCard>
    </VRow>

    <UretimGir v-model:isDialogVisible="isUretimGirisDialogVisible" :cardDetails="modalParametre" />

  </div>
</template>

<script setup lang="ts">

import { totalVisible } from "@/views/demos/components/pagination/demoCodePagination";
import axios from "axios";
import { DxTextBoxTypes } from "devextreme-vue/text-box";
import { PositionConfig } from "devextreme/animation/position";
import { onMounted, ref, computed } from 'vue';
import { exportDataGrid } from "devextreme/excel_exporter";
import { Workbook } from "exceljs";
import { saveAs } from "file-saver-es";
import DxContextMenu, { DxContextMenuTypes } from 'devextreme-vue/context-menu';
import notify from 'devextreme/ui/notify';
import { usePageTitleStore } from '@/stores/pageTitle';

import {
  DxColumn,
  DxDataGrid,
  DxDataGridTypes,
  DxEditing,
  DxButton,
  DxColumnChooser,
  DxColumnChooserSearch,
  DxColumnChooserSelection,
  DxExport,
  DxFilterBuilderPopup,
  DxFilterPanel,
  DxFilterRow,
  DxGrouping,
  DxGroupItem,
  DxGroupPanel,
  DxHeaderFilter,
  DxLoadPanel,
  DxPosition,
  DxScrolling,
  DxSearchPanel,
  DxSelection,
  DxStateStoring,
  DxSummary,
  DxTotalItem,
  DxColumnFixing,
} from "devextreme-vue/data-grid";

const isUretimGirisDialogVisible = ref(false);
const pageTitleStore = usePageTitleStore();
const userData = useCookie<any>('userData');
const gridData = ref([]);
const dataGridRef = ref<DxDataGrid | null>(null);
var mesaj = 'Üretim Girişleri'

onMounted(() => {
  getData();
});

const getData = () => {
  axios
    .get("/api/dataUretim")
    .then((response) => {
      gridData.value = response.data.data;
      pageTitleStore.setTitle(mesaj)
      pageTitleStore.setToplam('')
    })
    .catch((error) => {
      console.error("Veri çekilirken hata oluştu: ", error);
    });
};

const rowId = ref(null);
const rowMiktar = ref(null);
const rowIeId = ref(null);

function onUretimClick(e: any) {
  const rowData = e.row.data;
  rowId.value = rowData.ID;
  rowIeId.value = rowData.ISEMRIID;
  rowMiktar.value = rowData.MIKTAR;
  isUretimGirisDialogVisible.value = !isUretimGirisDialogVisible.value;
  getData();
}
const modalParametre = computed(() => ({
  id: rowId.value,
  ieId: rowIeId.value,
  userId: userData._rawValue.id,
  miktar: rowMiktar.value,
  tur: ' (düzeltme)',
}));
watch(isUretimGirisDialogVisible, (newValue, oldValue) => {
  if (!newValue && oldValue) {
    getData();
  }
});

const onRowRemoved = (e: any) => {
    axios.put(`/api/uretimsil/${e.key}`, e.data, {
      headers: {
        'userID': userData._rawValue.id,
      }
    })
      .then(response => {
        // console.log("Veri başarıyla silindi", response);
        getData();
      })
      .catch(error => {
        console.error("Veri silinirken hata oluştu: ", error);
      });
};

const filterBuilderPopupPosition: PositionConfig = {
  of: window,
  at: "top",
  my: "top",
  offset: { y: 10 },
};

const editorOptions: DxTextBoxTypes.Properties = { placeholder: "Sütun ara" };

const onContentReady = (e: DxDataGridTypes.ContentReadyEvent) => {
  e.component.option("loadPanel.enabled", false);
};

const onExporting = (e: DxDataGridTypes.ExportingEvent) => {
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet("UretimGirisleri");

  exportDataGrid({
    component: e.component,
    worksheet,
    autoFilterEnabled: true,
  }).then(() => {
    workbook.xlsx.writeBuffer().then((buffer) => {
      saveAs(
        new Blob([buffer], { type: "application/octet-stream" }),
        "UretimGirisleri.xlsx"
      );
    });
  });

  e.cancel = true;
};




const menuItems = [
  { text: 'Yenile (Tam Liste)' },
  // {
  //   text: 'Sayım',
  //   items: [
  //     { text: 'Sayılmayanlar' },
  //     { text: 'Sayılanlar' },
  //     { text: 'Sayım Yap' },
  //     { text: 'Sayım Sıfırla' },
  //     { text: 'Sayılmayanları Sil' }],
  // },
  { text: 'Grid Düzenini Sıfırla' },
  // { text: 'Günün Sözü' }
];
function itemClick({ itemData }: DxContextMenuTypes.ItemClickEvent) {
  if (!itemData?.items) {
    switch (itemData?.text) {
      case 'Yenile (Tam Liste)':
        getData()
        notify(`Veriler Yenilendi`, 'success', 1500)
        break;
      case 'Grid Düzenini Sıfırla':
        onStateResetClick()
        notify(`Düzen Sıfırlandı`, 'success', 1500)
        break;
      // case 'Günün Sözü':
      //   notify(`İşini düzgün yap. Dalga geçme :)`, 'success', 1500)
      //   break;
      default:
        break;
    }
  }
}
const onStateResetClick = () => {
  dataGridRef.value!.instance!.state(null);
};




</script>




<style>
html,
body {
  margin: 0;
  block: 90%;
}

#gridContainer {
  display: flex;
  flex-direction: column;
  margin: 10px;
  block-size: 80vh;
}

.dx-filterbuilder-overlay .dx-scrollable-container {
  max-block-size: 400px;
}
</style>
