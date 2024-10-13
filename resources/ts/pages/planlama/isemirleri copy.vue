<template>
  <div>
    <VRow>
      <VCard>
        <DxContextMenu :data-source="menuItems" :width="200" target="#gridContainer" @item-click="itemClick" />
        <DxDataGrid id="gridContainer" key-expr="ID" ref="dataGridRef" @content-ready="onContentReady"
          :data-source="gridData" :show-column-lines="true" :show-row-lines="false" :show-borders="true"
          :row-alternation-enabled="false" :allow-column-reordering="true" :allow-column-resizing="true"
          @row-inserted="onRowInserted" @row-inserting="onRowInserting" @exporting="onExporting"
          @row-updated="onRowUpdated" @row-updating="onRowUpdating" :column-hiding-enabled="true"
          @editing-start="onEditingStart">

          <DxEditing :allow-updating="true" :allow-adding="true" :allow-deleting="true" mode="popup">
            <DxPopup :show-title="true" :shading="true" :width="700" :height="480" title="İş Emri"
              :onHiding="resetForm" />
            <DxForm>
              <DxItem :col-count="2" :col-span="2" item-type="group">
                <DxItem data-field="ISTASYONID" editor-type="dxSelectBox" :editor-options="{
                  dataSource: istasyon,
                  displayExpr: 'TANIM',
                  valueExpr: 'ID',
                  searchEnabled: true,
                  value: selectedIstasyon,
                  onValueChanged: onIstasyonChange
                }" />

                <DxItem data-field="OZELLIKKOD1" editor-type="dxSelectBox" :editor-options="{
                  dataSource: filteredOzellik1,
                  displayExpr: 'OZELLIKKOD1',
                  valueExpr: 'OZELLIKKOD1',
                  searchEnabled: true,
                  value: selectedOzellik1,
                  onValueChanged: onOzellik1Change
                }" />

                <DxItem data-field="MMLGRPKOD" editor-type="dxSelectBox" :editor-options="{
                  dataSource: filteredMamulGrubu,
                  displayExpr: 'MMLGRPKOD',
                  valueExpr: 'MMLGRPKOD',
                  searchEnabled: true,
                  value: selectedGrup,
                  onValueChanged: onGrupChange
                }" />

                <DxItem data-field="OZELLIKKOD2" editor-type="dxSelectBox" :editor-options="{
                  dataSource: filteredOzellik2,
                  displayExpr: 'OZELLIKKOD2',
                  valueExpr: 'OZELLIKKOD2',
                  searchEnabled: true,
                  value: selectedOzellik2,
                  onValueChanged: onOzellik2Change
                }" />
                <DxItem data-field="OZELLIKKOD3" editor-type="dxSelectBox" :editor-options="{
                  dataSource: filteredOzellik3,
                  displayExpr: 'OZELLIKKOD3',
                  valueExpr: 'OZELLIKKOD3',
                  searchEnabled: true,
                  value: selectedOzellik3,
                  onValueChanged: onOzellik3Change
                }" />
                <DxItem data-field="KOD" editor-type="dxSelectBox" :editor-options="{
                  dataSource: filteredStokKodu,
                  displayExpr: 'KOD',
                  valueExpr: 'KOD',
                  value: selectedStokKodu,
                  searchEnabled: true,
                  onValueChanged: onKodChange
                }" />
                <DxItem data-field="TANIM" editor-type="dxSelectBox" :col-span="2" :editor-options="{
                  dataSource: filteredStokAdi,
                  displayExpr: 'TANIM',
                  valueExpr: 'TANIM',
                  searchEnabled: true,
                  value: selectedStokAdi,
                  onValueChanged: onTanimChange
                }" />
                <DxItem data-field="NOTLAR" editor-type="dxTextBox" :col-span="2" :editor-options="{
                  autoResizeEnabled: true,
                  maxLength: 255
                }" />
                <DxItem data-field="PLANLANANMIKTAR" editor-type="dxNumberBox" :editor-options="{
                  showSpinButtons: true,
                  format: '#,##0',
                  step: 1,
                  min: 0,
                }" />
                <DxItem data-field="DURUM" editor-type="dxSelectBox" :editor-options="{
                  dataSource: ['Beklemede', 'Üretimde', 'Üretildi', 'İptal'],
                  value: 'Beklemede'
                }" />
                <DxItem data-field="AKTIF" editor-type="dxCheckBox" :editor-options="{
                  value: true,
                }" />
              </DxItem>
            </DxForm>
          </DxEditing>

          <DxColumn data-field="ID" data-type="number" caption="İE NO" :visible="true" sort-order="desc" :width="80" />
          <DxColumn data-field="ISTASYONID" caption="İSTASYON" :visible="false" data-type="number" />
          <DxColumn data-field="URUNID" caption="URUN ID" :visible="false" data-type="number" />
          <DxColumn data-field="KOD" caption="STOK KODU" data-type="string" :visible="true" :width="120" />
          <DxColumn data-field="TANIM" caption="STOK ADI" data-type="string" :width="300" />
          <DxColumn data-field="MMLGRPKOD" caption="GRUP KODU" data-type="string" :visible="true" :width="250" />
          <DxColumn data-field="PLANLANANMIKTAR" caption="PL. MKTR" data-type="number" :visible="true" :width="110" />
          <DxColumn data-field="URETIMMIKTAR" caption="ÜR. MKTR" data-type="number" :width="110" />
          <DxColumn data-field="URETIMSIRA" caption="ÜRETİM SIRA" data-type="number" :visible="false" />
          <DxColumn data-field="KAYITTARIH" caption="TARİH" data-type="date" :width="100" :visible="true" :format="{
            formatter: (date) => {
              const formattedDate = new Intl.DateTimeFormat('tr-TR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
              }).format(new Date(date));

              return formattedDate.replace(/\//g, '.');
            }
          }" />
          <DxColumn data-field="DURUM" caption="DURUM" data-type="string" />
          <DxColumn data-field="NOTLAR" caption="NOTLAR" data-type="string" />
          <DxColumn data-field="PROSESNOT" caption="PROSES NOTU" width="100" data-type="string" :visible="true" />
          <DxColumn data-field="OZELLIKKOD1" caption="ÖZELLİK 1" data-type="string" />
          <DxColumn data-field="OZELLIKKOD2" caption="ÖZELLİK 2" data-type="string" />
          <DxColumn data-field="OZELLIKKOD3" caption="ÖZELLİK 3" data-type="string" />
          <DxColumn data-field="ISTKOD" caption="İSTASYON KODU" data-type="string" />
          <DxColumn data-field="ISTTANIM" caption="İSTASYON ADI" data-type="string" :visible="false" />
          <DxColumn data-field="AKTIF" caption="AKTİF" data-type="boolean" :visible="true"
            cell-template="cellTemplate" />

          <!-- <DxStateStoring :enabled="true" type="localStorage" storage-key="storage" /> -->
          <DxGroupPanel :visible="true" emptyPanelText="Gruplanacak sütunlar buraya..." />
          <DxGrouping :auto-expand-all="true" />
          <DxFilterPanel :visible="true" />
          <DxLoadPanel :enabled="true" />
          <DxScrolling mode="virtual" />
          <DxFilterRow :visible="true" />
          <DxFilterBuilderPopup :position="filterBuilderPopupPosition" />
          <DxHeaderFilter :visible="true" />
          <DxSearchPanel :visible="true" :width="240" placeholder="Ara..." />
          <DxExport :enabled="true" :allow-export-selected-data="true" />
          <DxPaging :enabled="false"/>
          <DxSelection mode="single" />
          <DxColumnChooser height="540px" :enabled="true" :mode="mode" title="Sütun Seçici">
            <DxPosition my="right top" at="right bottom" of=".dx-datagrid-column-chooser-button" />

            <DxColumnChooserSearch :enabled="true" :editor-options="editorOptions" />
            <DxColumnChooserSelection :allow-select-all="true" :select-by-click="true" :recursive="true" />
          </DxColumnChooser>

          <DxSummary>
            <DxTotalItem column="URUNID" summary-type="count" display-format="{0} adet" />
            <DxGroupItem :show-in-group-footer="false" :align-by-column="true" column="URUNID" summary-type="count"
              display-format="{0} adet" />
          </DxSummary>

          <!-- Özelleştirilmiş butonlar -->
          <DxColumn type="buttons">
            <DxButton name="edit" icon="edit" />
            <DxButton name="delete" icon="trash" />
          </DxColumn>

          <template #cellTemplate="{ data }">
            <template v-if="data.value === 0">
              <VIcon size="24" icon="tabler-x" />
            </template>
            <template v-else>
              <VIcon size="24" icon="tabler-check" />
            </template>
          </template>

        </DxDataGrid>
      </VCard>
    </VRow>
    <br>
    <br>

  </div>
</template>

<script setup lang="ts">

import {
  DxButton,
  DxColumn,
  DxColumnChooser,
  DxColumnChooserSearch,
  DxColumnChooserSelection,
  DxDataGrid,
  DxDataGridTypes,
  DxEditing,
  DxExport,
  DxFilterBuilderPopup,
  DxFilterPanel,
  DxFilterRow,
  DxForm,
  DxGrouping,
  DxGroupItem,
  DxGroupPanel,
  DxHeaderFilter,
  DxLoadPanel,
  DxPopup,
  DxPosition,
  DxScrolling,
  DxSearchPanel,
  DxSelection,
  DxStateStoring,
  DxSummary,
  DxTotalItem,
} from "devextreme-vue/data-grid";
import { usePageTitleStore } from '@/stores/pageTitle';
import axios from "axios";
import DxContextMenu, { DxContextMenuTypes } from 'devextreme-vue/context-menu';
import { DxItem } from "devextreme-vue/form";
import { DxTextBoxTypes } from "devextreme-vue/text-box";
import { PositionConfig } from "devextreme/animation/position";
import { exportDataGrid } from "devextreme/excel_exporter";
import { Workbook } from "exceljs";
import { saveAs } from "file-saver-es";
import { wrap } from 'module';
import { onMounted, ref } from 'vue';

// Pinia store'u kullan
const pageTitleStore = usePageTitleStore();
const dataGridRef = ref<DxDataGrid | null>(null);
const mode = ref("select");
const gridData = ref([]);

const selectedIstasyon = ref(null);
const selectedGrup = ref('');
const selectedOzellik1 = ref('');
const selectedOzellik2 = ref('');
const selectedOzellik3 = ref('');
const selectedStokKodu = ref('');
const selectedStokAdi = ref('');
const istasyon = ref([]);
// const ozellik1 = ref([]);
// const ozellik2 = ref([]);
// const ozellik3 = ref([]);
// const mamulGrubu = ref([]);
// const stokKodu = ref([]);
// const stokAdi = ref([]);
const filteredMamulGrubu = ref([]);
const filteredOzellik1 = ref([]);
const filteredOzellik2 = ref([]);
const filteredOzellik3 = ref([]);
const filteredStokKodu = ref([]);
const filteredStokAdi = ref([]);
const userData = useCookie<any>('userData')
var mesaj = 'İş Emirleri: '

const getData = () => {
  axios
    .get("/api/data")
    .then((response) => {
      gridData.value = response.data.data;
      pageTitleStore.setTitle(mesaj)
      pageTitleStore.setToplam(formatNumber(response.data.toplam).toString() + " Adet")
    })
    .catch((error) => {
      console.error("Veri çekilirken hata oluştu: ", error);
    });
};

const getVeri = () => {
  axios
    .get("/api/veri")
    .then((response) => {
      istasyon.value = response.data.istasyon;
    })
    .catch((error) => {
      console.error("Mamul verileri çekilirken hata oluştu: ", error);
    });
};

async function onIstasyonChange(e) {
  selectedIstasyon.value = e.value;
  filteredOzellik1.value = [];
  filteredOzellik2.value = [];
  filteredOzellik3.value = [];
  filteredMamulGrubu.value = [];
  try {
    const response = await axios.get('/api/ozellik1', {
      params: { istasyonId: selectedIstasyon.value }
    });
    filteredOzellik1.value = response.data.ozellik1;
    filteredStokKodu.value = response.data.mamuller;
    filteredStokAdi.value = response.data.mamuller;
  } catch (error) {
    console.error('Veri çekme hatası:', error);
  }
}

async function onOzellik1Change(e) {
  selectedOzellik1.value = e.value;
  try {
    const response = await axios.get('/api/mamul-grubu', {
      params: {
        istasyonId: selectedIstasyon.value,
        ozl1: selectedOzellik1.value
      }
    });
    filteredMamulGrubu.value = response.data.mamulGrubu;
    filteredStokKodu.value = response.data.mamuller;
    filteredStokAdi.value = response.data.mamuller;
  } catch (error) {
    console.error('Veri çekme hatası:', error);
  }
}

async function onGrupChange(e) {
  selectedGrup.value = e.value;
  try {
    const response = await axios.get('/api/ozellik2', {
      params: {
        mamulGrubu: selectedGrup.value,
        istasyonId: selectedIstasyon.value,
        ozellik1: selectedOzellik1.value
      }
    });
    filteredOzellik2.value = response.data.ozellik2;
    filteredStokKodu.value = response.data.mamuller;
    filteredStokAdi.value = response.data.mamuller;
  } catch (error) {
    console.error('Veri çekme hatası:', error);
  }
}

async function onOzellik2Change(e) {
  selectedOzellik2.value = e.value;
  try {
    const response = await axios.get('/api/ozellik3', {
      params: {
        mamulGrubu: selectedGrup.value,
        istasyonId: selectedIstasyon.value,
        ozellik1: selectedOzellik1.value,
        ozellik2: selectedOzellik2.value
      }
    });
    filteredOzellik3.value = response.data.ozellik3;
    filteredStokKodu.value = response.data.mamuller;
    filteredStokAdi.value = response.data.mamuller;
  } catch (error) {
    console.error('Veri çekme hatası:', error);
  }
}

async function onOzellik3Change(e) {
  selectedOzellik3.value = e.value;
  try {
    const response = await axios.get('/api/fitered-mamul', {
      params: {
        mamulGrubu: selectedGrup.value,
        istasyonId: selectedIstasyon.value,
        ozellik1: selectedOzellik1.value,
        ozellik2: selectedOzellik2.value,
        ozellik3: selectedOzellik3.value
      }
    });
    filteredStokKodu.value = response.data.mamuller;
    filteredStokAdi.value = response.data.mamuller;
  } catch (error) {
    console.error('Veri çekme hatası:', error);
  }
}

async function onKodChange(e) {
  selectedStokKodu.value = e.value;
  try {
    const response = await axios.get('/api/mamulden', {
      params: {
        kod: selectedStokKodu.value,
        tanim: ' ',
      }
    });
    filteredOzellik1.value = response.data.mamuller;
    filteredOzellik2.value = response.data.mamuller;
    filteredOzellik3.value = response.data.mamuller;
    filteredMamulGrubu.value = response.data.mamuller;

    selectedOzellik1.value = response.data.mamuller[0].OZELLIKKOD1;
    selectedOzellik2.value = response.data.mamuller[0].OZELLIKKOD2;
    selectedOzellik3.value = response.data.mamuller[0].OZELLIKKOD3;
    selectedGrup.value = response.data.mamuller[0].MMLGRPKOD;
    selectedStokKodu.value = response.data.mamuller[0].KOD;
    selectedStokAdi.value = response.data.mamuller[0].TANIM;
  } catch (error) {
    console.error('Veri çekme hatası:', error);
  }
}

async function onTanimChange(e) {
  selectedStokAdi.value = e.value;
  try {
    const response = await axios.get('/api/mamulden', {
      params: {
        kod: ' ',
        tanim: selectedStokAdi.value,
      }
    });
    filteredOzellik1.value = response.data.mamuller;
    filteredOzellik2.value = response.data.mamuller;
    filteredOzellik3.value = response.data.mamuller;
    filteredMamulGrubu.value = response.data.mamuller;

    selectedOzellik1.value = response.data.mamuller[0].OZELLIKKOD1;
    selectedOzellik2.value = response.data.mamuller[0].OZELLIKKOD2;
    selectedOzellik3.value = response.data.mamuller[0].OZELLIKKOD3;
    selectedGrup.value = response.data.mamuller[0].MMLGRPKOD;
    selectedStokKodu.value = response.data.mamuller[0].KOD;
    selectedStokAdi.value = response.data.mamuller[0].TANIM;
  } catch (error) {
    console.error('Veri çekme hatası:', error);
  }
}

const onRowInserting = (e) => {
  e.data.ISTASYONID = selectedIstasyon.value;
  e.data.KOD = selectedStokKodu.value;
  e.data.PLANLANANMIKTAR = e.data.PLANLANANMIKTAR || 0;
  e.data.DURUM = e.data.DURUM || 'Beklemede';
  e.data.AKTIF = e.data.AKTIF = true ? true : false;
};

const onRowInserted = (e: any) => {
  console.log(e.data);
  axios
    .post("/api/data", e.data, {
      headers: {
        'X-User-Name': userData._rawValue.id,
      }
    })
    .then((response) => {
      // console.log("Veri başarıyla eklendi", response);
      getData();
    })
    .catch((error) => {
      if (error.response && error.response.data) {
        console.error("Doğrulama hatası: ", error.response.data.errors);
      } else {
        console.error("Veri eklenirken hata oluştu: ", error);
      }
    });
};

const onRowUpdated = (e: any) => {
  const updatedData = e.data;
console.log(updatedData);
  if (Object.keys(updatedData).length === 0) {
    console.warn("Güncellenen veri boş geldi.");
  } else {
    console.log("Güncellenen veri:", updatedData);
  }
};

// const onRowUpdated = (e: any) => {
//   alert();
//   console.log('updated' + e.data.value);
//   // axios
//   //   .put(`/api/data/${e.key}`, e.data, {
//   //     headers: {
//   //       'X-User-Name': userData._rawValue.name,
//   //     }
//   //   })
//   //   .then((response) => {
//   //     // console.log("Veri başarıyla güncellendi", response);
//   //     getData();
//   //   })
//   //   .catch((error) => {
//   //     console.error("Veri güncellenirken hata oluştu: ", error);
//   //   });
// };

const onRowUpdating = (e: any) => {
  alert();
  console.log('updating' + e.data);
  // axios
  //   .put(`/api/data/${e.key}`, e.data, {
  //     headers: {
  //       'X-User-Name': userData._rawValue.name,
  //     }
  //   })
  //   .then((response) => {
  //     // console.log("Veri başarıyla güncellendi", response);
  //     getData();
  //   })
  //   .catch((error) => {
  //     console.error("Veri güncellenirken hata oluştu: ", error);
  //   });
};

const onEditingStart = (e: any) => {
  console.log('starting' + e.data.KOD);
  // onKodChange(e.data.KOD);
  fetchFilteredOzellik1(e.data.KOD);
  selectedIstasyon.value = e.data.ISTASYONID;
  selectedOzellik1.value = e.data.OZELLIKKOD1;
  selectedGrup.value = e.data.MMLGRPKOD;
};

const fetchFilteredOzellik1 = async (kod) => {
  try {
    const response = await axios.get('/api/mamulden', {
      params: {
        kod: kod,
        tanim: ' ',
      }
    });
    filteredOzellik1.value = response.data.mamuller;
    filteredOzellik2.value = response.data.mamuller;
    filteredOzellik3.value = response.data.mamuller;
    filteredMamulGrubu.value = response.data.mamuller;

    selectedOzellik1.value = response.data.mamuller[0].OZELLIKKOD1;
    selectedOzellik2.value = response.data.mamuller[0].OZELLIKKOD2;
    selectedOzellik3.value = response.data.mamuller[0].OZELLIKKOD3;
    selectedGrup.value = response.data.mamuller[0].MMLGRPKOD;
    selectedStokKodu.value = response.data.mamuller[0].KOD;
    selectedStokAdi.value = response.data.mamuller[0].TANIM;


    console.log('Filtered Ozellik1:', filteredOzellik1.value);
  } catch (error) {
    console.error('Veri çekme hatası:', error);
  }
};





onMounted(() => {
  getData();
  getVeri();
});

const formatNumber = (number) => {
  return new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 0 }).format(number);
}

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

// Form verilerini sıfırlayan fonksiyon
function resetForm() {
  selectedIstasyon.value = null;
  filteredMamulGrubu.value = [];
  filteredOzellik1.value = [];
  filteredOzellik2.value = [];
  filteredOzellik3.value = [];
  filteredStokKodu.value = [];
  filteredStokAdi.value = [];

}

const onExporting = (e: DxDataGridTypes.ExportingEvent) => {
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet("IsEmirleri");

  exportDataGrid({
    component: e.component,
    worksheet,
    autoFilterEnabled: true,
  }).then(() => {
    workbook.xlsx.writeBuffer().then((buffer) => {
      saveAs(
        new Blob([buffer], { type: "application/octet-stream" }),
        "IsEmirleri.xlsx"
      );
    });
  });

  e.cancel = true;
};


</script>




<style>
html,
body {
  margin: 0;
  block: 95%;
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
