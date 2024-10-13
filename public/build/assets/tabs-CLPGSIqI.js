import{a as r,V}from"./VTabs-DEqKtvLT.js";import{d as k,r as x,o as c,c as b,e as s,b as e,f as a,V as W,v as l,n as u,aY as m,F as p,i as f,x as w,w as O,g as T,ak as P}from"./main-4HtaUiFJ.js";import{V as C}from"./VCardText-BPW3eqxe.js";import{V as y,a as v}from"./VWindowItem-BP3UZ1n6.js";import{V as I}from"./VCard-BmDiRtzo.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as N}from"./AppCardCode.vue_vue_type_style_index_0_lang-CrvxCsy6.js";import{a as h,V as E}from"./VRow-D3BW0X_c.js";import"./forwardRefs-C-GTDzx5.js";import"./easing-CjukEv2V.js";import"./VSlideGroup-CJyjfXC_.js";import"./scopeId-DbRFQ7mK.js";import"./lazy-Df-tM7SF.js";import"./ssrBoot-Dof1CZuO.js";import"./VImg-_vWB6Zwl.js";import"./VAvatar-DqZM1Z9r.js";import"./vue3-perfect-scrollbar-CbwDZVVd.js";import"./VDivider-BTqHSpsX.js";/* empty css              */const M={class:"d-flex gap-6"},G=s("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),H=s("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et. ",-1),R=s("p",{class:"mb-0"}," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),L=s("p",{class:"mb-0"}," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),Y=k({__name:"DemoTabsVerticalPill",setup(_){const t=x("window-1");return(d,n)=>(c(),b("div",M,[s("div",null,[e(V,{modelValue:u(t),"onUpdate:modelValue":n[0]||(n[0]=o=>m(t)?t.value=o:null),direction:"vertical",class:"v-tabs-pill"},{default:a(()=>[e(r,null,{default:a(()=>[e(W,{start:"",icon:"tabler-user"}),l(" Option 1 ")]),_:1}),e(r,null,{default:a(()=>[e(W,{start:"",icon:"tabler-lock"}),l(" Option 2 ")]),_:1}),e(r,null,{default:a(()=>[e(W,{start:"",icon:"tabler-access-point"}),l(" Option 3 ")]),_:1})]),_:1},8,["modelValue"])]),e(I,null,{default:a(()=>[e(C,null,{default:a(()=>[e(y,{modelValue:u(t),"onUpdate:modelValue":n[1]||(n[1]=o=>m(t)?t.value=o:null)},{default:a(()=>[e(v,{value:"window-1"},{default:a(()=>[G,H]),_:1}),e(v,{value:"window-2"},{default:a(()=>[R]),_:1}),e(v,{value:"window-3"},{default:a(()=>[L]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]))}}),J="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.",K=k({__name:"DemoTabsBasicPill",setup(_){const t=x("window1");return(d,n)=>(c(),b(p,null,[e(V,{modelValue:u(t),"onUpdate:modelValue":n[0]||(n[0]=o=>m(t)?t.value=o:null),class:"v-tabs-pill"},{default:a(()=>[e(r,null,{default:a(()=>[l("Tab One")]),_:1}),e(r,null,{default:a(()=>[l("Tab Two")]),_:1}),e(r,null,{default:a(()=>[l("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(I,{class:"mt-5"},{default:a(()=>[e(C,null,{default:a(()=>[e(y,{modelValue:u(t),"onUpdate:modelValue":n[1]||(n[1]=o=>m(t)?t.value=o:null)},{default:a(()=>[(c(),b(p,null,f(3,o=>e(v,{key:`window${o}`},{default:a(()=>[l(w(J))]),_:2},1024)),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})],64))}}),Q=k({__name:"DemoTabsDynamic",setup(_){const t=x(3),d=x(0);return O(t,n=>{d.value=n-1}),(n,o)=>(c(),T(I,null,{default:a(()=>[e(V,{modelValue:u(d),"onUpdate:modelValue":o[0]||(o[0]=i=>m(d)?d.value=i:null)},{default:a(()=>[(c(!0),b(p,null,f(u(t),i=>(c(),T(r,{key:i,value:i},{default:a(()=>[l(" Tab "+w(i),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(C,{class:"text-center d-flex items-center gap-y-2 flex-wrap"},{default:a(()=>[e(P,{disabled:!u(t),class:"me-4",variant:u(t)?void 0:"tonal",onClick:o[1]||(o[1]=i=>t.value--)},{default:a(()=>[l(" Remove Tab ")]),_:1},8,["disabled","variant"]),e(P,{onClick:o[2]||(o[2]=i=>t.value++)},{default:a(()=>[l(" Add Tab ")]),_:1})]),_:1})]),_:1}))}}),X={class:"d-flex justify-center gap-4 mt-3"},Z="Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.",ee=k({__name:"DemoTabsProgrammaticNavigation",setup(_){const t=x(1),d=["Appetizers","Entrees","Deserts","Cocktails"],n=d.length,o=()=>{t.value!==1&&(t.value-=1)},i=()=>{t.value!==n&&(t.value+=1)};return($,q)=>(c(),T(I,null,{default:a(()=>[e(V,{modelValue:u(t),"onUpdate:modelValue":q[0]||(q[0]=g=>m(t)?t.value=g:null),grow:""},{default:a(()=>[(c(!0),b(p,null,f(d.length,g=>(c(),T(r,{key:g,value:g},{default:a(()=>[l(w(d[g-1]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(C,null,{default:a(()=>[e(y,{modelValue:u(t),"onUpdate:modelValue":q[1]||(q[1]=g=>m(t)?t.value=g:null)},{default:a(()=>[(c(!0),b(p,null,f(d.length,g=>(c(),T(v,{key:g,value:g},{default:a(()=>[l(w(Z))]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),s("div",X,[e(P,{disabled:u(t)===1,onClick:o},{default:a(()=>[l(" Previous ")]),_:1},8,["disabled"]),e(P,{disabled:u(t)===u(n),onClick:i},{default:a(()=>[l(" Next ")]),_:1},8,["disabled"])])]),_:1})]),_:1}))}}),ae="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.",te=k({__name:"DemoTabsGrow",setup(_){const t=x("Appetizers"),d=["Appetizers","Entrees","Deserts","Cocktails"];return(n,o)=>(c(),T(I,null,{default:a(()=>[e(V,{modelValue:u(t),"onUpdate:modelValue":o[0]||(o[0]=i=>m(t)?t.value=i:null),grow:""},{default:a(()=>[(c(),b(p,null,f(d,i=>e(r,{key:i},{default:a(()=>[l(w(i),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),e(C,null,{default:a(()=>[e(y,{modelValue:u(t),"onUpdate:modelValue":o[1]||(o[1]=i=>m(t)?t.value=i:null)},{default:a(()=>[(c(),b(p,null,f(d,i=>e(v,{key:i,value:i},{default:a(()=>[l(w(ae))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),oe="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.",le=k({__name:"DemoTabsFixed",setup(_){const t=x("Appetizers"),d=["Fixed Tab 1","Fixed Tab 2","Fixed Tab 3","Fixed Tab 4"];return(n,o)=>(c(),T(I,null,{default:a(()=>[e(V,{modelValue:u(t),"onUpdate:modelValue":o[0]||(o[0]=i=>m(t)?t.value=i:null),"fixed-tabs":""},{default:a(()=>[(c(),b(p,null,f(d,i=>e(r,{key:i,value:i},{default:a(()=>[l(w(i),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(C,null,{default:a(()=>[e(y,{modelValue:u(t),"onUpdate:modelValue":o[1]||(o[1]=i=>m(t)?t.value=i:null)},{default:a(()=>[(c(),b(p,null,f(d,i=>e(v,{key:i,value:i},{default:a(()=>[l(w(oe))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),ne="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.",se=k({__name:"DemoTabsCustomIcons",setup(_){const t=x(0);return(d,n)=>(c(),T(I,null,{default:a(()=>[e(V,{"next-icon":"tabler-arrow-right","prev-icon":"tabler-arrow-left"},{default:a(()=>[(c(),b(p,null,f(10,o=>e(r,{key:o},{default:a(()=>[l(" Item "+w(o),1)]),_:2},1024)),64))]),_:1}),e(C,null,{default:a(()=>[e(y,{modelValue:u(t),"onUpdate:modelValue":n[0]||(n[0]=o=>m(t)?t.value=o:null)},{default:a(()=>[(c(),b(p,null,f(10,o=>e(v,{key:o,value:o},{default:a(()=>[l(w(ne))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),ie="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.",re=k({__name:"DemoTabsPagination",setup(_){const t=x("item1");return(d,n)=>(c(),T(I,null,{default:a(()=>[e(V,{modelValue:u(t),"onUpdate:modelValue":n[0]||(n[0]=o=>m(t)?t.value=o:null)},{default:a(()=>[(c(),b(p,null,f(10,o=>e(r,{key:o},{default:a(()=>[l(" Item "+w(o),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),e(C,null,{default:a(()=>[e(y,{modelValue:u(t),"onUpdate:modelValue":n[1]||(n[1]=o=>m(t)?t.value=o:null)},{default:a(()=>[(c(),b(p,null,f(10,o=>e(v,{key:o,value:`item${o}`},{default:a(()=>[l(w(ie))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),ce={};function ue(_,t){return c(),T(I,null,{default:a(()=>[e(C,{class:"d-flex flex-column gap-4"},{default:a(()=>[s("div",null,[e(V,null,{default:a(()=>[e(r,null,{default:a(()=>[l("Home")]),_:1}),e(r,null,{default:a(()=>[l("Service")]),_:1}),e(r,null,{default:a(()=>[l("Account")]),_:1})]),_:1})]),s("div",null,[e(V,{"align-tabs":"center"},{default:a(()=>[e(r,null,{default:a(()=>[l("Home")]),_:1}),e(r,null,{default:a(()=>[l("Service")]),_:1}),e(r,null,{default:a(()=>[l("Account")]),_:1})]),_:1})]),s("div",null,[e(V,{"align-tabs":"end"},{default:a(()=>[e(r,null,{default:a(()=>[l("Home")]),_:1}),e(r,null,{default:a(()=>[l("Service")]),_:1}),e(r,null,{default:a(()=>[l("Account")]),_:1})]),_:1})])]),_:1})]),_:1})}const de=U(ce,[["render",ue]]),me={class:"d-flex"},be=s("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),pe=s("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget. ",-1),Ve=s("p",{class:"mb-0"}," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero. ",-1),Te=s("p",{class:"mb-0"}," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper. ",-1),ve=k({__name:"DemoTabsVertical",setup(_){const t=x("tab-1");return(d,n)=>(c(),T(I,null,{default:a(()=>[s("div",me,[s("div",null,[e(V,{modelValue:u(t),"onUpdate:modelValue":n[0]||(n[0]=o=>m(t)?t.value=o:null),direction:"vertical"},{default:a(()=>[e(r,null,{default:a(()=>[e(W,{start:"",icon:"tabler-user"}),l(" Option 1 ")]),_:1}),e(r,null,{default:a(()=>[e(W,{start:"",icon:"tabler-lock"}),l(" Option 2 ")]),_:1}),e(r,null,{default:a(()=>[e(W,{start:"",icon:"tabler-access-point"}),l(" Option 3 ")]),_:1})]),_:1},8,["modelValue"])]),e(C,null,{default:a(()=>[e(y,{modelValue:u(t),"onUpdate:modelValue":n[1]||(n[1]=o=>m(t)?t.value=o:null),class:"ms-3"},{default:a(()=>[e(v,{value:"tab-1"},{default:a(()=>[be,pe]),_:1}),e(v,{value:"tab-2"},{default:a(()=>[Ve]),_:1}),e(v,{value:"tab-3"},{default:a(()=>[Te]),_:1})]),_:1},8,["modelValue"])]),_:1})])]),_:1}))}}),fe=s("span",null,"Recent",-1),we=s("span",null,"Favorites",-1),_e=s("span",null,"Nearby",-1),ge="Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.",he=k({__name:"DemoTabsStacked",setup(_){const t=x("tab-1");return(d,n)=>(c(),T(I,null,{default:a(()=>[e(V,{modelValue:u(t),"onUpdate:modelValue":n[0]||(n[0]=o=>m(t)?t.value=o:null),grow:"",stacked:""},{default:a(()=>[e(r,null,{default:a(()=>[e(W,{icon:"tabler-phone",class:"mb-2"}),fe]),_:1}),e(r,null,{default:a(()=>[e(W,{icon:"tabler-heart",class:"mb-2"}),we]),_:1}),e(r,null,{default:a(()=>[e(W,{icon:"tabler-user",class:"mb-2"}),_e]),_:1})]),_:1},8,["modelValue"]),e(C,null,{default:a(()=>[e(y,{modelValue:u(t),"onUpdate:modelValue":n[1]||(n[1]=o=>m(t)?t.value=o:null)},{default:a(()=>[(c(),b(p,null,f(3,o=>e(v,{key:o,value:`tab-${o}`},{default:a(()=>[l(w(ge))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),xe="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.",ke=k({__name:"DemoTabsBasic",setup(_){const t=x("item-1");return(d,n)=>(c(),T(I,null,{default:a(()=>[e(V,{modelValue:u(t),"onUpdate:modelValue":n[0]||(n[0]=o=>m(t)?t.value=o:null)},{default:a(()=>[e(r,null,{default:a(()=>[l("Tab One")]),_:1}),e(r,null,{default:a(()=>[l("Tab Two")]),_:1}),e(r,null,{default:a(()=>[l("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(C,null,{default:a(()=>[e(y,{modelValue:u(t),"onUpdate:modelValue":n[1]||(n[1]=o=>m(t)?t.value=o:null)},{default:a(()=>[(c(),b(p,null,f(3,o=>e(v,{key:o,value:`item-${o}`},{default:a(()=>[l(w(xe))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),Ce={ts:`<template>
  <VCard>
    <VCardText class="d-flex flex-column gap-4">
      <!-- Default -->
      <div>
        <VTabs>
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- Center -->
      <div>
        <VTabs align-tabs="center">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- End -->
      <div>
        <VTabs align-tabs="end">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>
    </VCardText>
  </VCard>
</template>
`,js:`<template>
  <VCard>
    <VCardText class="d-flex flex-column gap-4">
      <!-- Default -->
      <div>
        <VTabs>
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- Center -->
      <div>
        <VTabs align-tabs="center">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- End -->
      <div>
        <VTabs align-tabs="end">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>
    </VCardText>
  </VCard>
</template>
`},Ie={ts:`<script lang="ts" setup>
const currentTab = ref('item-1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab>Tab One</VTab>
      <VTab>Tab Two</VTab>
      <VTab>Tab Three</VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="item"
          :value="\`item-\${item}\`"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('item-1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab>Tab One</VTab>
      <VTab>Tab Two</VTab>
      <VTab>Tab Three</VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="item"
          :value="\`item-\${item}\`"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},ye={ts:`<script lang="ts" setup>
const currentTab = ref('window1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VCard class="mt-5">
    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="\`window\${item}\`"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('window1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VCard class="mt-5">
    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="\`window\${item}\`"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},We={ts:`<script setup lang="ts">
const currentTab = ref(0)
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs
      next-icon="tabler-arrow-right"
      prev-icon="tabler-arrow-left"
    >
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
          :value="i"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs
      next-icon="tabler-arrow-right"
      prev-icon="tabler-arrow-left"
    >
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
          :value="i"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},qe={ts:`<script lang="ts" setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="n in totalTabs"
        :key="n"
        :value="n"
      >
        Tab {{ n }}
      </VTab>
    </VTabs>

    <!-- buttons -->
    <VCardText class="text-center d-flex items-center gap-y-2 flex-wrap">
      <VBtn
        :disabled="!totalTabs"
        class="me-4"
        :variant="!totalTabs ? 'tonal' : undefined"
        @click="totalTabs--"
      >
        Remove Tab
      </VBtn>

      <VBtn @click="totalTabs++">
        Add Tab
      </VBtn>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="n in totalTabs"
        :key="n"
        :value="n"
      >
        Tab {{ n }}
      </VTab>
    </VTabs>

    <!-- buttons -->
    <VCardText class="text-center d-flex items-center gap-y-2 flex-wrap">
      <VBtn
        :disabled="!totalTabs"
        class="me-4"
        :variant="!totalTabs ? 'tonal' : undefined"
        @click="totalTabs--"
      >
        Remove Tab
      </VBtn>

      <VBtn @click="totalTabs++">
        Add Tab
      </VBtn>
    </VCardText>
  </VCard>
</template>
`},Pe={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Fixed Tab 1', 'Fixed Tab 2', 'Fixed Tab 3', 'Fixed Tab 4']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      fixed-tabs
    >
      <VTab
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Fixed Tab 1',
  'Fixed Tab 2',
  'Fixed Tab 3',
  'Fixed Tab 4',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      fixed-tabs
    >
      <VTab
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},$e={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},Se={ts:`<script setup lang="ts">
const currentTab = ref('item1')
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
          :value="\`item\${i}\`"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('item1')
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
          :value="\`item\${i}\`"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},De={ts:`<script lang="ts" setup>
const currentTab = ref(1)
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items.length"
        :key="item"
        :value="item"
      >
        {{ items[item - 1] }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items.length"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>

      <div class="d-flex justify-center gap-4 mt-3">
        <VBtn
          :disabled="currentTab === 1"
          @click="preTab"
        >
          Previous
        </VBtn>

        <VBtn
          :disabled="currentTab === totalTabs"
          @click="nextTab"
        >
          Next
        </VBtn>
      </div>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref(1)

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items.length"
        :key="item"
        :value="item"
      >
        {{ items[item - 1] }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items.length"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>

      <div class="d-flex justify-center gap-4 mt-3">
        <VBtn
          :disabled="currentTab === 1"
          @click="preTab"
        >
          Previous
        </VBtn>

        <VBtn
          :disabled="currentTab === totalTabs"
          @click="nextTab"
        >
          Next
        </VBtn>
      </div>
    </VCardText>
  </VCard>
</template>
`},Fe={ts:`<script lang="ts" setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
      stacked
    >
      <VTab>
        <VIcon
          icon="tabler-phone"
          class="mb-2"
        />
        <span>Recent</span>
      </VTab>

      <VTab>
        <VIcon
          icon="tabler-heart"
          class="mb-2"
        />
        <span>Favorites</span>
      </VTab>

      <VTab>
        <VIcon
          icon="tabler-user"
          class="mb-2"
        />
        <span>Nearby</span>
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 3"
          :key="i"
          :value="\`tab-\${i}\`"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
      stacked
    >
      <VTab>
        <VIcon
          icon="tabler-phone"
          class="mb-2"
        />
        <span>Recent</span>
      </VTab>

      <VTab>
        <VIcon
          icon="tabler-heart"
          class="mb-2"
        />
        <span>Favorites</span>
      </VTab>

      <VTab>
        <VIcon
          icon="tabler-user"
          class="mb-2"
        />
        <span>Nearby</span>
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 3"
          :key="i"
          :value="\`tab-\${i}\`"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},je={ts:`<script setup lang="ts">
const currentTab = ref('tab-1')
<\/script>

<template>
  <VCard>
    <div class="d-flex">
      <div>
        <VTabs
          v-model="currentTab"
          direction="vertical"
        >
          <VTab>
            <VIcon
              start
              icon="tabler-user"
            />
            Option 1
          </VTab>

          <VTab>
            <VIcon
              start
              icon="tabler-lock"
            />
            Option 2
          </VTab>

          <VTab>
            <VIcon
              start
              icon="tabler-access-point"
            />
            Option 3
          </VTab>
        </VTabs>
      </div>

      <VCardText>
        <VWindow
          v-model="currentTab"
          class="ms-3"
        >
          <VWindowItem value="tab-1">
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget.
            </p>
          </VWindowItem>

          <VWindowItem value="tab-2">
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero.
            </p>
          </VWindowItem>

          <VWindowItem value="tab-3">
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </div>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('tab-1')
<\/script>

<template>
  <VCard>
    <div class="d-flex">
      <div>
        <VTabs
          v-model="currentTab"
          direction="vertical"
        >
          <VTab>
            <VIcon
              start
              icon="tabler-user"
            />
            Option 1
          </VTab>

          <VTab>
            <VIcon
              start
              icon="tabler-lock"
            />
            Option 2
          </VTab>

          <VTab>
            <VIcon
              start
              icon="tabler-access-point"
            />
            Option 3
          </VTab>
        </VTabs>
      </div>

      <VCardText>
        <VWindow
          v-model="currentTab"
          class="ms-3"
        >
          <VWindowItem value="tab-1">
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget.
            </p>
          </VWindowItem>

          <VWindowItem value="tab-2">
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero.
            </p>
          </VWindowItem>

          <VWindowItem value="tab-3">
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </div>
  </VCard>
</template>
`},Be={ts:`<script setup lang="ts">
const currentTab = ref('window-1')
<\/script>

<template>
  <div class="d-flex gap-6">
    <div>
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="tabler-user"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-lock"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-access-point"
          />
          Option 3
        </VTab>
      </VTabs>
    </div>

    <VCard>
      <VCardText>
        <VWindow v-model="currentTab">
          <VWindowItem value="window-1">
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et.
            </p>
          </VWindowItem>

          <VWindowItem value="window-2">
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>
          </VWindowItem>

          <VWindowItem value="window-3">
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </VCard>
  </div>
</template>
`,js:`<script setup>
const currentTab = ref('window-1')
<\/script>

<template>
  <div class="d-flex gap-6">
    <div>
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="tabler-user"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-lock"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-access-point"
          />
          Option 3
        </VTab>
      </VTabs>
    </div>

    <VCard>
      <VCardText>
        <VWindow v-model="currentTab">
          <VWindowItem value="window-1">
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et.
            </p>
          </VWindowItem>

          <VWindowItem value="window-2">
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>
          </VWindowItem>

          <VWindowItem value="window-3">
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </VCard>
  </div>
</template>
`},ze=s("p",null,[l("The "),s("code",null,"v-tabs"),l(" component is used for hiding content behind a selectable item.")],-1),Ae=s("p",null,[l("Using "),s("code",null,"stacked"),l(" prop you can have buttons that use both icons and text.")],-1),Oe=s("p",null,[l("The "),s("code",null,"vertical"),l(" prop allows for "),s("code",null,"v-tab"),l(" components to stack vertically.")],-1),Ue=s("p",null,[l("Use "),s("code",null,"align-tabs"),l(" prop to change the tabs alignment.")],-1),Ne=s("p",null,"If the tab items overflow their container, pagination controls will appear on desktop.",-1),Ee=s("p",null,[s("code",null,"prev-icon"),l(" and "),s("code",null,"next-icon"),l(" props can be used for applying custom pagination icons.")],-1),Me=s("p",null,[l("The "),s("code",null,"fixed-tabs"),l(" prop forces "),s("code",null,"v-tab"),l(" to take up all available space up to the maximum width (300px).")],-1),Ge=s("p",null,[l("The "),s("code",null,"grow"),l(" prop will make the tab items take up all available space with no limit.")],-1),He=s("p",null,[l("Tabs can be dynamically added and removed. This allows you to update to any number and the "),s("code",null,"v-tabs"),l(" component will react.")],-1),Re=s("p",null,[l("Use our custom class "),s("code",null,".v-tabs-pill"),l(" along with "),s("code",null,"v-tabs"),l(" component to style pill tabs.")],-1),Le=s("p",null,"Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs.",-1),ba=k({__name:"tabs",setup(_){return(t,d)=>{const n=ke,o=N,i=he,$=ve,q=de,g=re,S=se,D=le,F=te,j=ee,B=Q,z=K,A=Y;return c(),T(E,{class:"match-height"},{default:a(()=>[e(h,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Basic",variant:"outlined",code:Ie},{default:a(()=>[ze,e(n)]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Stacked",variant:"outlined",code:Fe},{default:a(()=>[Ae,e(i)]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Vertical",variant:"outlined",code:je},{default:a(()=>[Oe,e($)]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Alignment",variant:"outlined",code:Ce},{default:a(()=>[Ue,e(q)]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Pagination",variant:"outlined",code:Se},{default:a(()=>[Ne,e(g)]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Custom Icons",variant:"outlined",code:We},{default:a(()=>[Ee,e(S)]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Fixed",variant:"outlined",code:Pe},{default:a(()=>[Me,e(D)]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Grow",variant:"outlined",code:$e},{default:a(()=>[Ge,e(F)]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Programmatic Navigation",variant:"outlined",code:De},{default:a(()=>[e(j)]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Dynamic",variant:"outlined",code:qe},{default:a(()=>[He,e(B)]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Basic Pill",variant:"outlined",code:ye},{default:a(()=>[Re,e(z)]),_:1},8,["code"])]),_:1}),e(h,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Vertical Pill",variant:"outlined",code:Be},{default:a(()=>[Le,e(A)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{ba as default};
