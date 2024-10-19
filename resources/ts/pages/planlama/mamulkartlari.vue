<template>
  <div>
    <VRow>
      <VCard>
        <DxContextMenu :data-source="menuItems" :width="200" target="#gridContainer" @item-click="itemClick" />
        <DxDataGrid id="gridContainer" ref="dataGridRef" @content-ready="onContentReady" :data-source="gridData"
          :show-borders="true" key-expr="ID" @editor-preparing="onEditorPreparing" :show-column-lines="true"
          :show-row-lines="false" :row-alternation-enabled="false" :allow-column-reordering="true"
          @row-removed="onRowRemoved" :allow-column-resizing="true" @exporting="onExporting" :column-width="100"
          :show-indicator="true" @row-updated="onRowUpdated" @row-inserted="onRowInserted" @init-new-row="initNewRow"
          @cell-prepared="onCellPrepared" :repaint-changes-only="true">

          <DxEditing :allow-updating="true" :allow-adding="true" :allow-deleting="true" :use-icons="true" mode="popup">
            <DxPopup :show-title="true" :shading="true" :width="800" :height="480" title="Mamul Kartı" />
            <DxForm>
              <DxItem :col-count="2" :col-span="2" item-type="group">
                <DxItem data-field="ID" :visible="false" />
                <DxItem data-field="ISTASYONID" :visible="false" />
                <DxItem data-field="STGRPKOD" />
                <DxItem data-field="SINIF" />
                <DxItem data-field="OZELLIKKOD1" />
                <DxItem data-field="MMLGRPKOD" />
                <DxItem data-field="OZELLIKKOD2" />
                <DxItem data-field="OZELLIKKOD3" />
                <DxItem data-field="KOD" />
                <DxItem data-field="TANIM" :col-span="2" />
                <DxItem data-field="MEVCUT" />
                <DxItem data-field="AKTIF" editor-type="dxCheckBox" />
              </DxItem>
            </DxForm>
          </DxEditing>

          <!-- Özelleştirilmiş butonlar -->
          <DxColumn type="buttons" :fixed="true" :width="80">
            <DxButton name="edit" icon="edit" />
            <DxButton name="delete" icon="trash" />
          </DxColumn>
          <DxColumn data-field="AKTIF" caption="AKTİF" data-type="boolean" :visible="true" :width="60"
            />
          <DxColumn data-field="ID" data-type="number" caption="İE NO" :visible="true" sort-order="desc" :width="80" />
          <DxColumn data-field="KOD" caption="STOK KODU" data-type="string" />
          <DxColumn data-field="TANIM" caption="STOK ADI" data-type="string" :width="300" />
          <DxColumn data-field="STGRPKOD" :width="250" caption="İSTASYON" data-type="string">
            <DxLookup :data-source="gridIstasyon" display-expr="TANIM" value-expr="TANIM" />
          </DxColumn>
          <DxColumn data-field="MMLGRPKOD" :width="250" caption="GRUP KODU" data-type="string">
            <DxLookup :data-source="gridGrup" display-expr="MMLGRPKOD" value-expr="MMLGRPKOD" />
          </DxColumn>
          <DxColumn data-field="MEVCUT" data-type="number" :visible="true" :width="110" />
          <DxColumn data-field="SINIF" data-type="string">
            <DxLookup :data-source="gridSinif" display-expr="SINIF" value-expr="SINIF" />
          </DxColumn>
          <DxColumn data-field="OZELLIKKOD1" caption="ÖZELLİK 1" data-type="string" :width="110">
            <DxLookup :data-source="gridOz1" display-expr="OZELLIKKOD1" value-expr="OZELLIKKOD1" />
          </DxColumn>
          <DxColumn data-field="OZELLIKKOD2" caption="ÖZELLİK 2" data-type="string" :width="110">
            <DxLookup :data-source="gridOz2" display-expr="OZELLIKKOD2" value-expr="OZELLIKKOD2" />
          </DxColumn>
          <DxColumn data-field="OZELLIKKOD3" caption="ÖZELLİK 3" data-type="string" :width="110">
            <DxLookup :data-source="gridOz3" display-expr="OZELLIKKOD3" value-expr="OZELLIKKOD3" />
          </DxColumn>
          <DxColumn data-field="ISTASYONID" data-type="number" :visible="false" />


          <DxStateStoring :enabled="true" type="localStorage" storage-key="storageMamulKartlari" />
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
          <DxColumnChooser height="540px" :enabled="true" :mode="mode" title="Sütun Seçici">
            <DxPosition my="right top" at="right bottom" of=".dx-datagrid-column-chooser-button" />

            <DxColumnChooserSearch :enabled="true" :editor-options="editorOptions" />
            <DxColumnChooserSelection :allow-select-all="true" :select-by-click="true" :recursive="true" />
          </DxColumnChooser>

          <DxSummary>
            <DxTotalItem column="TANIM" summary-type="count" display-format="{0} adet" />
            <DxGroupItem :show-in-group-footer="false" :align-by-column="true" column="TANIM" summary-type="count"
              display-format="{0} adet" />
          </DxSummary>

          <template #aktifTemplate="{ data }">
            <template v-if="data.value === '0' || data.value === 0">
              <VIcon size="24" icon="tabler-x" />
            </template>
            <template v-else>
              <VIcon size="24" icon="tabler-check" />
            </template>
          </template>


        </DxDataGrid>
      </VCard>
    </VRow>
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
  DxLookup,
  DxEditing,
  DxPopup,
  DxForm,
  DxItem,
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

const pageTitleStore = usePageTitleStore();
const userData = useCookie<any>('userData');
const gridData = ref<GridData[]>([]);
const gridGrup = ref<GrupData[]>([]);
const gridOz1 = ref<Oz1Data[]>([]);
const gridOz2 = ref<Oz2Data[]>([]);
const gridOz3 = ref<Oz3Data[]>([]);
const gridIstasyon = ref<IstasyonData[]>([]);
const gridSinif = ref<SinifData[]>([]);
const dataGridRef = ref<DxDataGrid | null>(null);
var mesaj = 'Mamul Kartları: '


onMounted(() => {
  getVeri();
  getData();
});

const getData = () => {
  axios
    .get("/api/dataMamuller")
    .then((response) => {
      gridData.value = response.data.data;
      pageTitleStore.setTitle(mesaj)
      pageTitleStore.setToplam(formatNumber(response.data.toplam).toString())
    })
    .catch((error) => {
      console.error("Veri çekilirken hata oluştu: ", error);
    });
};

const getVeri = () => {
  axios
    .get("/api/veriMamuller")
    .then((response) => {
      // const uniqueById = (array, key) => {
      //   const seen = new Set();
      //   return array.filter(item => {
      //     const identifier = item[key];
      //     if (identifier === null || identifier === undefined || seen.has(identifier)) {
      //       return false;
      //     }
      //     seen.add(identifier);
      //     return true;
      //   });
      // };

      gridIstasyon.value = response.data.istasyon;
      gridGrup.value = response.data.mamulGrup;
      gridSinif.value = response.data.mamulSinif;
      gridOz1.value = response.data.mamulOz1;
      gridOz2.value = response.data.mamulOz2;
      gridOz3.value = response.data.mamulOz3;
    })
    .catch((error) => {
      console.error("Mamul verileri çekilirken hata oluştu: ", error);
    });
};

const onEditorPreparing = (e: any) => {
  if (e.parentType === 'dataRow' && e.dataField === 'MEVCUT') {
    e.editorOptions.disabled = true;
  }
};
const onRowRemoved = (e: any) => {
  axios.put(`/api/mamulsil/${e.key}`, {
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
const onRowUpdated = (e: any) => {
  axios
    .post("/api/mamul", e.data, {
      headers: {
        'userID': userData._rawValue.id,
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
    .post("/api/mamul", e.data, {
      headers: {
        'userID': userData._rawValue.id,
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
const initNewRow = (e: any) => {
  e.data.MEVCUT = 0;
  e.data.AKTIF = true;
};
const onCellPrepared = (e: any) => {
  if (e.rowType === "data" && e.column.dataField === "MEVCUT") {
    if (e.data.MEVCUT > 0) {
      e.cellElement.style.fontWeight = "bold";
    }
  }
}


interface GridData {
  ID?: number | null;
  ISTASYONID?: number | null;
  URUNID?: number | null;
  MEVCUT?: number | null;
  KOD?: string | null;
  TANIM?: string | null;
  STGRPKOD?: string | null;
  MMLGRPKOD?: string | null;
  OZELLIKKOD1?: string | null;
  OZELLIKKOD2?: string | null;
  OZELLIKKOD3?: string | null;
}
interface SinifData {
  SINIF?: string | null;
}
interface IstasyonData {
  ID?: number | null;
  KOD?: string | null;
  TANIM?: string | null;
}
interface Oz1Data {
  OZELLIKKOD1?: string | null;
}
interface GrupData {
  MMLGRPKOD?: string | null;
}
interface Oz2Data {
  OZELLIKKOD2?: string | null;
}
interface Oz3Data {
  OZELLIKKOD3?: string | null;
}

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

const onExporting = (e: DxDataGridTypes.ExportingEvent) => {
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet("MamulKartlari");

  exportDataGrid({
    component: e.component,
    worksheet,
    autoFilterEnabled: true,
  }).then(() => {
    workbook.xlsx.writeBuffer().then((buffer) => {
      saveAs(
        new Blob([buffer], { type: "application/octet-stream" }),
        "MamulKartlari.xlsx"
      );
    });
  });

  e.cancel = true;
};




const menuItems = [
  { text: 'Yenile' },
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
  { text: 'Günün Sözü' }
];
function itemClick({ itemData }: DxContextMenuTypes.ItemClickEvent) {
  if (!itemData?.items) {
    switch (itemData?.text) {
      case 'Yenile':
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
