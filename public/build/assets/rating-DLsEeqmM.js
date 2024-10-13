import{d as h,r as f,o as r,g,f as n,b as e,V as S,s as j,n as p,aY as _,c as V,e as l,x as U,F as y,i as k,v as a}from"./main-4HtaUiFJ.js";import{V as i}from"./VRating-BFo8Hh-K.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as F}from"./VSlider-CfMRc_BX.js";import{_ as I}from"./AppCardCode.vue_vue_type_style_index_0_lang-CrvxCsy6.js";import{a as d,V as B}from"./VRow-D3BW0X_c.js";import"./VSliderTrack-DV6VBUQt.js";import"./VInput-BFY35E5e.js";import"./form-DFwA6hGK.js";import"./VImg-_vWB6Zwl.js";import"./vue3-perfect-scrollbar-CbwDZVVd.js";import"./VCard-BmDiRtzo.js";import"./VAvatar-DqZM1Z9r.js";import"./VCardText-BPW3eqxe.js";import"./VDivider-BTqHSpsX.js";/* empty css              */const T=h({__name:"DemoRatingItemSlot",setup(c){const t=f(4.5);return(m,s)=>(r(),g(i,{modelValue:p(t),"onUpdate:modelValue":s[0]||(s[0]=o=>_(t)?t.value=o:null)},{item:n(o=>[e(S,j(o,{size:25,color:o.isFilled?"success":"secondary",class:"me-3",icon:o.isFilled?"tabler-mood-smile-beam":"tabler-mood-sad"}),null,16,["color","icon"])]),_:1},8,["modelValue"]))}}),L=h({__name:"DemoRatingIncremented",setup(c){const t=f(4.5);return(m,s)=>(r(),g(i,{modelValue:p(t),"onUpdate:modelValue":s[0]||(s[0]=o=>_(t)?t.value=o:null),"half-increments":"",hover:""},null,8,["modelValue"]))}}),M={};function N(c,t){return r(),g(i,{hover:""})}const H=v(M,[["render",N]]),P={};function A(c,t){return r(),g(i,{readonly:"","model-value":4})}const E=v(P,[["render",A]]),Y={};function q(c,t){return r(),g(i,{clearable:""})}const G=v(Y,[["render",q]]),J=l("div",{class:"text-caption"}," Custom length ",-1),K={class:"font-weight-medium mb-0"},O=h({__name:"DemoRatingLength",setup(c){const t=f(5),m=f(2);return(s,o)=>(r(),V(y,null,[J,e(F,{modelValue:p(t),"onUpdate:modelValue":o[0]||(o[0]=u=>_(t)?t.value=u:null),min:1,max:7},null,8,["modelValue"]),e(i,{modelValue:p(m),"onUpdate:modelValue":o[1]||(o[1]=u=>_(m)?m.value=u:null),length:p(t)},null,8,["modelValue","length"]),l("p",K," Model: "+U(p(m)),1)],64))}}),Q={class:"d-flex flex-column"},W=h({__name:"DemoRatingSize",setup(c){const t=f(4);return(m,s)=>(r(),V("div",Q,[e(i,{modelValue:p(t),"onUpdate:modelValue":s[0]||(s[0]=o=>_(t)?t.value=o:null),size:"x-small"},null,8,["modelValue"]),e(i,{modelValue:p(t),"onUpdate:modelValue":s[1]||(s[1]=o=>_(t)?t.value=o:null),size:"small"},null,8,["modelValue"]),e(i,{modelValue:p(t),"onUpdate:modelValue":s[2]||(s[2]=o=>_(t)?t.value=o:null),size:"large"},null,8,["modelValue"])]))}}),X={class:"d-flex flex-column"},Z=h({__name:"DemoRatingColors",setup(c){const t=f(4),m=["primary","secondary","success","info","warning","error"];return(s,o)=>(r(),V("div",X,[(r(),V(y,null,k(m,u=>e(i,{key:u,modelValue:p(t),"onUpdate:modelValue":o[0]||(o[0]=R=>_(t)?t.value=R:null),color:u},null,8,["modelValue","color"])),64))]))}}),ee={};function te(c,t){return r(),g(i,{density:"compact"})}const oe=v(ee,[["render",te]]),ne={};function le(c,t){return r(),g(i)}const ae=v(ne,[["render",le]]),se={ts:`<template>
  <VRating />
</template>
`,js:`<template>
  <VRating />
</template>
`},ie={ts:`<template>
  <VRating clearable />
</template>
`,js:`<template>
  <VRating clearable />
</template>
`},re={ts:`<script lang="ts" setup>
const rating = ref(4)
const ratingColors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)

const ratingColors = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`},ce={ts:`<template>
  <VRating density="compact" />
</template>
`,js:`<template>
  <VRating density="compact" />
</template>
`},me={ts:`<template>
  <VRating hover />
</template>
`,js:`<template>
  <VRating hover />
</template>
`},de={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`},pe={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'tabler-mood-smile-beam' : 'tabler-mood-sad'"
      />
    </template>
  </VRating>
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'tabler-mood-smile-beam' : 'tabler-mood-sad'"
      />
    </template>
  </VRating>
</template>
`},ue={ts:`<script lang="ts" setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`,js:`<script setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`},_e={ts:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`,js:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`},ge={ts:`<script lang="ts" setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating
      v-model="rating"
      size="large"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating
      v-model="rating"
      size="large"
    />
  </div>
</template>
`},fe=l("p",null,[a("The "),l("code",null,"v-rating"),a(" component provides a simple interface for gathering user feedback.")],-1),he=l("p",null,[a("Control the space occupied by "),l("code",null,"v-rating"),a(" items using the "),l("code",null,"density"),a(" prop.")],-1),ve=l("p",null,[a("The "),l("code",null,"v-rating"),a(" component can be colored as you want, you can set both selected and not selected colors.")],-1),Ve=l("p",null,[a("Utilize the same sizing classes available in "),l("code",null,"v-icon"),a(" or provide your own with the "),l("code",null,"size"),a(" prop.")],-1),Re=l("p",null,[a("Change the number of items by modifying the the "),l("code",null,"length"),a(" prop.")],-1),ye=l("p",null,[a("Use "),l("code",null,"clearable"),a(" prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.")],-1),xe=l("p",null,[a("For ratings that are not meant to be changed you can use "),l("code",null,"readonly"),a(" prop.")],-1),be=l("p",null,"Provides visual feedback when hovering over icons",-1),ze=l("p",null,[a("The "),l("code",null,"half-increments"),a(" prop increases the granularity of the ratings, allow for .5 values as well.")],-1),Ce=l("p",null,"Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating.",-1),Ae=h({__name:"rating",setup(c){return(t,m)=>{const s=ae,o=I,u=oe,R=Z,x=W,b=O,z=G,C=E,$=H,w=L,D=T;return r(),g(B,{class:"match-height"},{default:n(()=>[e(d,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Basic",code:se},{default:n(()=>[fe,e(s)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Density",code:ce},{default:n(()=>[he,e(u)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Colors",code:re},{default:n(()=>[ve,e(R)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Size",code:ge},{default:n(()=>[Ve,e(x)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Length",code:ue},{default:n(()=>[Re,e(b)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Clearable",code:ie},{default:n(()=>[ye,e(z)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Readonly",code:_e},{default:n(()=>[xe,e(C)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Hover",code:me},{default:n(()=>[be,e($)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Incremented",code:de},{default:n(()=>[ze,e(w)]),_:1},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:n(()=>[e(o,{title:"Item slot",code:pe},{default:n(()=>[Ce,e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ae as default};
