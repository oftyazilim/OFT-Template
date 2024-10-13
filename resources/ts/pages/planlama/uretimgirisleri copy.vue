<template>
  <div>
    <VRow>
      <VCard>
        <DxContextMenu :data-source="menuItems" :width="200" target="#gridContainer" @item-click="itemClick" />
        <DxDataGrid id="gridContainer" key-expr="id" ref="dataGridRef" @content-ready="onContentReady"
          :data-source="gridData" :show-column-lines="true" :show-row-lines="false" :show-borders="true"
          :row-alternation-enabled="false" :allow-column-reordering="true" :allow-column-resizing="true"
          @row-updated="onRowUpdated" @row-inserted="onRowInserted" @row-removed="onRowRemoved" @exporting="onExporting"
          :column-hiding-enabled="true" @init-new-row="initNewRow">

          <DxEditing :allow-updating="true" :allow-adding="true" :allow-deleting="true" mode="popup">
            <DxPopup :show-title="true" :width="350" :height="480" title="2. Kalite" />
            <DxForm>
              <DxItem :col-count="1" :col-span="2" item-type="group">
                <DxItem data-field="mamul" editor-type="dxSelectBox" :editor-options="{
                  dataSource: mamul,
                  displayExpr: 'mamul',
                  valueExpr: 'mamul',
                  searchEnabled: true,
                }" />
                <DxItem data-field="boy" editor-type="dxNumberBox" :editor-options="{
                  showSpinButtons: true,
                  step: 1,
                  min: 0,
                  max: 12500,
                }" />
                <DxItem data-field="adet2" editor-type="dxNumberBox" :editor-options="{
                  showSpinButtons: true,
                  format: '#,##0',
                  step: 1,
                  min: 0,
                }" />
                <DxItem data-field="kantarkg" editor-type="dxNumberBox" :editor-options="{
                  showSpinButtons: true,
                  format: '#,##0.00',
                  step: 0.01,
                  min: 0,
                  // value: gridData.kantarkg,
                }" />
                <DxItem data-field="hat" editor-type="dxSelectBox" :editor-options="{
                  dataSource: hat,
                  displayExpr: 'hat',
                  valueExpr: 'hat',
                  // dataSource: ['MA-1', 'MA-2', 'MA-3'],
                  // value: 'MA-1'
                }" />
                <DxItem data-field="nevi" editor-type="dxSelectBox" :editor-options="{
                  dataSource: nevi,
                  displayExpr: 'nevi',
                  valueExpr: 'nevi',
                }" />
                <DxItem data-field="basildi" editor-type="dxCheckBox" />
              </DxItem>
            </DxForm>
          </DxEditing>

          <DxColumn data-field="id" data-type="number" :visible="false" sort-order="desc" />
          <DxColumn data-field="mamul" caption="MAMUL" data-type="string" />
          <DxColumn data-field="boy" caption="BOY" data-type="number" />
          <DxColumn data-field="adet2" caption="GERÇ. AD" data-type="number" :visible="true" />
          <DxColumn data-field="kantarkg" caption="GERÇ. KG" data-type="number" style="font-weight: bold;"/>
          <DxColumn data-field="adet" caption="SİSTEM AD" data-type="number" :visible="true" />
          <DxColumn data-field="kg" caption="SİSTEM KG" data-type="number" :visible="true" />
          <DxColumn data-field="nevi" caption="NEVİ" width="100" data-type="string" />
          <DxColumn data-field="pkno" caption="PAKET NO" data-type="string" />
          <DxColumn data-field="tarih" caption="TARİH" data-type="date" :format="{
            formatter: (date) => {
              const formattedDate = new Intl.DateTimeFormat('tr-TR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
              }).format(new Date(date));

              return formattedDate.replace(/\//g, '.');
            }
          }" />
          <DxColumn data-field="saat" caption="SAAT" data-type="string" />
          <DxColumn data-field="basildi" caption="BASILDI" data-type="boolean" cell-template="cellTemplate" />
          <DxColumn data-field="hat" caption="HAT" width="100" data-type="string" :visible="true" />
          <DxColumn data-field="operator" caption="OPERATÖR" data-type="string" />
          <DxColumn data-field="mamulkodu" caption="MAMUL KODU" data-type="string" :visible="false" />
          <DxColumn data-field="kalinlik" caption="KALINLIK" data-type="number" :visible="false" />

          <DxStateStoring :enabled="true" type="localStorage" storage-key="storage" />
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

          <DxSelection mode="single" />
          <DxColumnChooser height="540px" :enabled="true" :mode="mode" title="Sütun Seçici">
            <DxPosition my="right top" at="right bottom" of=".dx-datagrid-column-chooser-button" />

            <DxColumnChooserSearch :enabled="true" :editor-options="editorOptions" />
            <DxColumnChooserSelection :allow-select-all="true" :select-by-click="true" :recursive="true" />
          </DxColumnChooser>

          <DxSummary>
            <DxTotalItem column="mamul" summary-type="count" display-format="{0} paket" />
            <DxTotalItem column="kantarkg" summary-type="sum" display-format="Tpl: {0}"
              :value-format="{ formatter: value => new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value) }" />
            <DxGroupItem :show-in-group-footer="false" :align-by-column="true" column="pkno" summary-type="count"
              display-format="{0} paket" />
            <DxGroupItem :show-in-group-footer="false" :align-by-column="true" column="kantarkg" summary-type="sum"
              display-format="Toplam: {0}" />
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
    
    <CardEkleKalite2 v-model:isDialogVisible="isCardAddDialogVisible" :cardDetails="selectedCardDetails"/>
<br>
<br>



  </div>
</template>

<script setup lang="ts">
import CardEkleKalite2 from '@/components/dialogs/CardEkleKalite2.vue';
import axios from "axios";
import { Workbook } from "exceljs";
import { saveAs } from "file-saver-es";
import { exportDataGrid } from "devextreme/excel_exporter";
import DxContextMenu, { DxContextMenuTypes } from 'devextreme-vue/context-menu';
import notify from 'devextreme/ui/notify';
import { usePageTitleStore } from '@/stores/pageTitle';
import { ref, onMounted } from 'vue';
import { DxItem } from "devextreme-vue/form";
import { PositionConfig } from "devextreme/animation/position";
import { DxTextBoxTypes } from "devextreme-vue/text-box";
import {
  DxDataGrid,
  DxSummary,
  DxGroupItem,
  DxTotalItem,
  DxButton,
  DxColumn,
  DxPosition,
  DxGrouping,
  DxGroupPanel,
  DxHeaderFilter,
  DxFilterRow,
  DxStateStoring,
  DxColumnChooser,
  DxSearchPanel,
  DxDataGridTypes,
  DxScrolling,
  DxSelection,
  DxLoadPanel,
  DxEditing,
  DxExport,
  DxPopup,
  DxFilterBuilderPopup,
  DxFilterPanel,
  DxForm,
  DxColumnChooserSearch,
  DxColumnChooserSelection
} from "devextreme-vue/data-grid";

// Pinia store'u kullan
const pageTitleStore = usePageTitleStore();
const dataGridRef = ref<DxDataGrid | null>(null);
const mode = ref("select");
const conn = "sqlAkyazi"
const gridData = ref([]);
const mamul = ref([]);
const hat = ref([]);
const nevi = ref([]);
const userData = useCookie<any>('userData')
var sayilanlar = 3
var mesaj = 'Akyazı 2. Kalite Stok: '
var isCardAddDialogVisible = ref(false)





const selectedCardDetails = ref({
  conn: 'sqlAkyazi',
});


const getData = () => {
  axios
    .get(`/api/data/${conn}`, {
      params: {
        sayildi: sayilanlar
      }
    })
    .then((response) => {
      gridData.value = response.data.data;
      if (sayilanlar == 3) mesaj = 'Akyazı 2. Kalite Stok: '
      else if (sayilanlar === 1) mesaj = 'Akyazı 2. Kalite (Sayılanlar)'
      else mesaj = 'Akyazı 2. Kalite (Sayılmayanlar)'
      sayilanlar = 3
      pageTitleStore.setTitle(mesaj)
      pageTitleStore.setToplam(formatNumber(response.data.toplam).toString() + ' Kg ')
    })
    .catch((error) => {
      console.error("Veri çekilirken hata oluştu: ", error);
    });
};

const getVeri = () => {
  axios
    .get(`/api/veri/${conn}`)
    .then((response) => {
      mamul.value = response.data.mamul;
      hat.value = response.data.hat;
      nevi.value = response.data.nevi;
    })
    .catch((error) => {
      console.error("Mamul verileri çekilirken hata oluştu: ", error);
    });
};

const editorOptions: DxTextBoxTypes.Properties = { placeholder: "Sütun ara" };

const onContentReady = (e: DxDataGridTypes.ContentReadyEvent) => {
  e.component.option("loadPanel.enabled", false);
};

const initNewRow = (e: any) => {
  e.data.boy = 0;
  e.data.kantarkg = 0;
  e.data.adet2 = 0;
  e.data.basildi = 0;
};

const filterBuilderPopupPosition: PositionConfig = {
  of: window,
  at: "top",
  my: "top",
  offset: { y: 10 },
};

const formatNumber = (number) => {
  return new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 0 }).format(number);
}

onMounted(() => {
  getData();
  getVeri();
});

const onStateResetClick = () => {
  dataGridRef.value!.instance!.state(null);
};

const onRowUpdated = (e: any) => {
  axios
    .put(`/api/data/${e.key}`, e.data, {
      headers: {
        'X-User-Name': userData._rawValue.name,
        'conn': conn
      }
    })
    .then((response) => {
      // console.log("Veri başarıyla güncellendi", response);
      getData();
    })
    .catch((error) => {
      console.error("Veri güncellenirken hata oluştu: ", error);
    });
};

const onRowInserted = (e: any) => {
  axios
    .post("/api/data", e.data, {
      headers: {
        'X-User-Name': userData._rawValue.name,
        'conn': conn
      }
    })
    .then((response) => {
      // console.log("Veri başarıyla eklendi", response);
      getData();
    })
    .catch((error) => {
      console.error("Veri eklenirken hata oluştu: ", error);
    });
};

const onRowRemoved = (e: any) => {
  axios.get('/sanctum/csrf-cookie').then(() => {
    axios.put(`/api/datasil/${e.key}`, e.data, {
      headers: {
        'X-User-Name': userData._rawValue.name,
        'conn': conn
      }
    })
      .then(response => {
        // console.log("Veri başarıyla silindi", response);
        getData();
      })
      .catch(error => {
        console.error("Veri silinirken hata oluştu: ", error);
      });
  });
};

const onExporting = (e: DxDataGridTypes.ExportingEvent) => {
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet("StokKalite2Akyazi");

  exportDataGrid({
    component: e.component,
    worksheet,
    autoFilterEnabled: true,
  }).then(() => {
    workbook.xlsx.writeBuffer().then((buffer) => {
      saveAs(
        new Blob([buffer], { type: "application/octet-stream" }),
        "StokKalite2Akyazi.xlsx"
      );
    });
  });

  e.cancel = true;
};

const menuItems = [
  { text: 'Yenile (Tam Liste)' },
  {
    text: 'Sayım',
    items: [
      { text: 'Sayılmayanlar' },
      { text: 'Sayılanlar' },
      { text: 'Sayım Yap' },
      { text: 'Sayım Sıfırla' },
      { text: 'Sayılmayanları Sil' }],
  },
  { text: 'Grid Düzenini Sıfırla' },
  { text: 'Günün Sözü' }
];

function itemClick({ itemData }: DxContextMenuTypes.ItemClickEvent) {
  if (!itemData?.items) {
    switch (itemData?.text) {
      case 'Yenile (Tam Liste)':
        sayilanlar = 3
        getData()
        notify(`Veriler Yenilendi`, 'success', 1500)
        break;
      case 'Grid Düzenini Sıfırla':
        onStateResetClick()
        notify(`Düzen Sıfırlandı`, 'success', 1500)
        break;
      case 'Günün Sözü':
        notify(`İşini düzgün yap. Dalga geçme :)`, 'success', 1500)
        break;
      case 'Sayılmayanlar':
        sayilanlar = 0
        getData()
        notify(`Sayılmayanlar Yenilendi`, 'success', 1500)
        break;
      case 'Sayılanlar':
        sayilanlar = 1
        getData()
        notify(`Sayılanlar yenilendi`, 'success', 1500)
        break;
      case 'Sayım Yap':
      isCardAddDialogVisible.value = !isCardAddDialogVisible.value
        notify(`Sayım başladı`, 'success', 1500)
        break;
      case 'Sayım Sıfırla':
        axios
          .put(`/api/sayim/sifirla/${conn}`)
          .then((response) => {
            // console.log("Veri başarıyla güncellendi", response);
          })
          .catch((error) => {
            console.error("Veri güncellenirken hata oluştu: ", error);
          });
        notify(`Sayım sıfırlandı`, 'success', 1500)
        sayilanlar = 0
        getData()
        break;
      case 'Sayılmayanları Sil':
        axios
          .get(`/api/sayilmayanlari/sil/${conn}`, {
            params: {
              userName: userData._rawValue.name,
            }
          })
          .then((response) => {
            // console.log("Veri başarıyla güncellendi", response);
          })
          .catch((error) => {
            console.error("Veri güncellenirken hata oluştu: ", error);
          });
        notify(`Sayılmayanlar Silindi`, 'success', 1500)
        sayilanlar = 0
        getData()
        break;

      default:
        break;
    }
  }
}






const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};



</script>
<style>
html,
body {
  height: 95%;
  margin: 0;
}

#gridContainer {
  display: flex;
  flex-direction: column;
  height: 80vh;
  margin: 10px;
}

.dx-filterbuilder-overlay .dx-scrollable-container {
  max-height: 400px;
}
</style>
