import{d as f,r as V,a1 as z,o as b,c as k,e as s,x as T,n,b as e,f as t,g as _,J as D,z as L,cz as O,V as Y,ak as y,aY as m,F as j,R as E,U as N,v as c}from"./main-4HtaUiFJ.js";import{V as G}from"./VAvatar-DqZM1Z9r.js";import{V as p}from"./VSlider-CfMRc_BX.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as J}from"./VImg-_vWB6Zwl.js";import{a as u,V as x}from"./VRow-D3BW0X_c.js";import{V as S}from"./VTextField-B9XLf_50.js";import{_ as q}from"./AppTextField.vue_vue_type_script_setup_true_lang-CgXasaHP.js";import{_ as H}from"./AppCardCode.vue_vue_type_style_index_0_lang-CrvxCsy6.js";import"./VSliderTrack-DV6VBUQt.js";import"./VInput-BFY35E5e.js";import"./form-DFwA6hGK.js";/* empty css              *//* empty css                   */import"./VCounter-1zqnpjd5.js";import"./VField-BAjGSKE3.js";import"./easing-CjukEv2V.js";import"./forwardRefs-C-GTDzx5.js";import"./vue3-perfect-scrollbar-CbwDZVVd.js";import"./VCard-BmDiRtzo.js";import"./VCardText-BPW3eqxe.js";import"./VDivider-BTqHSpsX.js";const K=v=>(E("data-v-b105f5d8"),v=v(),N(),v),Q={class:"d-flex justify-space-between ma-4"},W=["textContent"],X=K(()=>s("span",{class:"subheading font-weight-light me-1"},"BPM",-1)),$=40,R=218,Z=f({__name:"DemoSliderAppendAndPrepend",setup(v){const l=V(40),a=V(!1),i=z(()=>l.value<100?"primary":l.value<125?"success":l.value<140?"info":l.value<175?"warning":"error"),r=z(()=>`${60/l.value}s`),o=()=>{l.value>$&&(l.value-=1)},d=()=>{l.value<R&&(l.value+=1)};return(h,C)=>(b(),k(j,null,[s("div",Q,[s("div",null,[s("span",{class:"text-6xl font-weight-light",textContent:T(n(l))},null,8,W),X,e(O,null,{default:t(()=>[n(a)?(b(),_(G,{key:0,color:n(i),style:D({animationDuration:n(r)}),class:"mb-1 v-avatar--metronome",size:"12"},null,8,["color","style"])):L("",!0)]),_:1})]),s("div",null,[e(y,{color:n(i),icon:"",elevation:"0",onClick:C[0]||(C[0]=w=>a.value=!n(a))},{default:t(()=>[e(Y,{size:"large",icon:n(a)?"tabler-pause":"tabler-play"},null,8,["icon"])]),_:1},8,["color"])])]),e(p,{modelValue:n(l),"onUpdate:modelValue":C[1]||(C[1]=w=>m(l)?l.value=w:null),color:n(i),step:1,min:$,max:R,"track-color":"secondary"},{prepend:t(()=>[e(y,{size:"small",variant:"text",icon:"tabler-minus",color:n(i),onClick:o},null,8,["color"])]),append:t(()=>[e(y,{size:"small",variant:"text",icon:"tabler-plus",color:n(i),onClick:d},null,8,["color"])]),_:1},8,["modelValue","color"])],64))}}),ee=g(Z,[["__scopeId","data-v-b105f5d8"]]),le={class:"d-flex justify-space-between"},te={class:"d-flex justify-space-between"},oe={class:"d-flex justify-space-between"},se=f({__name:"DemoSliderAppendTextField",setup(v){const l=V(161),a=V(105),i=V(225);return(r,o)=>(b(),k(j,null,[e(J,{style:D({background:`rgb(${n(l)}, ${n(a)}, ${n(i)})`}),height:"150px"},null,8,["style"]),e(x,{class:"mt-5"},{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[s("div",le,[e(p,{modelValue:n(l),"onUpdate:modelValue":o[0]||(o[0]=d=>m(l)?l.value=d:null),max:255,step:1,"prepend-icon":"tabler-letter-r"},null,8,["modelValue"]),e(S,{modelValue:n(l),"onUpdate:modelValue":o[1]||(o[1]=d=>m(l)?l.value=d:null),type:"number",placeholder:"10",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1}),e(u,{cols:"12"},{default:t(()=>[s("div",te,[e(p,{modelValue:n(a),"onUpdate:modelValue":o[2]||(o[2]=d=>m(a)?a.value=d:null),max:255,step:1,"prepend-icon":"tabler-letter-g"},null,8,["modelValue"]),e(S,{modelValue:n(a),"onUpdate:modelValue":o[3]||(o[3]=d=>m(a)?a.value=d:null),type:"number",placeholder:"20",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1}),e(u,{cols:"12"},{default:t(()=>[s("div",oe,[e(p,{modelValue:n(i),"onUpdate:modelValue":o[4]||(o[4]=d=>m(i)?i.value=d:null),max:255,step:1,"prepend-icon":"tabler-letter-b"},null,8,["modelValue"]),e(S,{modelValue:n(i),"onUpdate:modelValue":o[5]||(o[5]=d=>m(i)?i.value=d:null),type:"number",placeholder:"30",max:255,style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])]),_:1})]),_:1})],64))}}),ae=f({__name:"DemoSliderVertical",setup(v){const l=V(10);return(a,i)=>(b(),_(p,{modelValue:n(l),"onUpdate:modelValue":i[0]||(i[0]=r=>m(l)?l.value=r:null),direction:"vertical"},null,8,["modelValue"]))}}),ie=s("div",{class:"text-caption"}," Show ticks when using slider ",-1),ne=s("div",{class:"text-caption"}," Always show ticks ",-1),re=s("div",{class:"text-caption"}," Tick size ",-1),de=s("div",{class:"text-caption"}," Tick labels ",-1),ce=f({__name:"DemoSliderTicks",setup(v){const l=V(0),a=V(1),i={0:"Figs",1:"Lemon",2:"Pear",3:"Apple"};return(r,o)=>(b(),_(x,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[ie,e(p,{modelValue:n(l),"onUpdate:modelValue":o[0]||(o[0]=d=>m(l)?l.value=d:null),step:10,"show-ticks":""},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[ne,e(p,{modelValue:n(l),"onUpdate:modelValue":o[1]||(o[1]=d=>m(l)?l.value=d:null),step:10,"show-ticks":"always"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[re,e(p,{modelValue:n(l),"onUpdate:modelValue":o[2]||(o[2]=d=>m(l)?l.value=d:null),step:10,"show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[de,e(p,{modelValue:n(a),"onUpdate:modelValue":o[3]||(o[3]=d=>m(a)?a.value=d:null),ticks:i,max:3,step:"1","show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1})]),_:1}))}}),ue=s("div",{class:"text-caption"}," Show thumb when using slider ",-1),me=s("div",{class:"text-caption"}," Always show thumb label ",-1),pe=s("div",{class:"text-caption"}," Custom thumb size ",-1),Ve=s("div",{class:"text-caption"}," Custom thumb label ",-1),ve=f({__name:"DemoSliderThumb",setup(v){const l=["😭","😢","😔","🙁","😐","🙂","😊","😁","😄","😍"],a=V(45);return(i,r)=>(b(),_(x,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[ue,e(p,{modelValue:n(a),"onUpdate:modelValue":r[0]||(r[0]=o=>m(a)?a.value=o:null),"thumb-label":""},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[me,e(p,{modelValue:n(a),"onUpdate:modelValue":r[1]||(r[1]=o=>m(a)?a.value=o:null),"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[pe,e(p,{modelValue:n(a),"onUpdate:modelValue":r[2]||(r[2]=o=>m(a)?a.value=o:null),"thumb-size":30,"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[Ve,e(p,{modelValue:n(a),"onUpdate:modelValue":r[3]||(r[3]=o=>m(a)?a.value=o:null),"thumb-label":"always"},{"thumb-label":t(({modelValue:o})=>[c(T(l[Math.min(Math.floor(o/10),9)]),1)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),be={};function fe(v,l){return b(),_(p,{step:10,"show-ticks":"","thumb-size":18,"tick-size":3,"track-size":2})}const _e=g(be,[["render",fe]]),xe={class:"d-flex justify-space-between"},he=f({__name:"DemoSliderMinAndMax",setup(v){const l=V(-50),a=V(90),i=V(40);return(r,o)=>{const d=q;return b(),k("div",xe,[e(p,{modelValue:n(i),"onUpdate:modelValue":o[0]||(o[0]=h=>m(i)?i.value=h:null),max:n(a),min:n(l),step:1},null,8,["modelValue","max","min"]),e(d,{modelValue:n(i),"onUpdate:modelValue":o[1]||(o[1]=h=>m(i)?i.value=h:null),type:"number",placeholder:"10",style:{"max-inline-size":"5rem"}},null,8,["modelValue"])])}}}),Ce=f({__name:"DemoSliderValidation",setup(v){const l=V(30),a=[i=>i<=40||"Only 40 in stock"];return(i,r)=>(b(),_(p,{modelValue:n(l),"onUpdate:modelValue":r[0]||(r[0]=o=>m(l)?l.value=o:null),error:n(l)>40,rules:a,step:10,"thumb-label":"always","show-ticks":""},null,8,["modelValue","error"]))}}),we=f({__name:"DemoSliderStep",setup(v){const l=V(0);return(a,i)=>(b(),_(p,{modelValue:n(l),"onUpdate:modelValue":i[0]||(i[0]=r=>m(l)?l.value=r:null),min:0,max:1,step:.2,"thumb-label":""},null,8,["modelValue"]))}}),ye=f({__name:"DemoSliderIcons",setup(v){const l=V(0),a=V(0),i=V(10);return(r,o)=>(b(),_(x,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[e(p,{modelValue:n(l),"onUpdate:modelValue":o[0]||(o[0]=d=>m(l)?l.value=d:null),"prepend-icon":"tabler-volume"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(p,{modelValue:n(a),"onUpdate:modelValue":o[1]||(o[1]=d=>m(a)?a.value=d:null),"append-icon":"tabler-alarm"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(p,{modelValue:n(i),"onUpdate:modelValue":o[2]||(o[2]=d=>m(i)?i.value=d:null),"append-icon":"tabler-minus","prepend-icon":"tabler-plus"},null,8,["modelValue"])]),_:1})]),_:1}))}}),Se=s("div",{class:"text-caption"}," color ",-1),ke=s("div",{class:"text-caption"}," track-color ",-1),ge=s("div",{class:"text-caption"}," thumb-color ",-1),ze=f({__name:"DemoSliderColors",setup(v){const l=V(25),a=V(75),i=V(50);return(r,o)=>(b(),_(x,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[Se,e(p,{modelValue:n(l),"onUpdate:modelValue":o[0]||(o[0]=d=>m(l)?l.value=d:null),color:"error"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[ke,e(p,{modelValue:n(a),"onUpdate:modelValue":o[1]||(o[1]=d=>m(a)?a.value=d:null),"track-color":"error"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:t(()=>[ge,e(p,{modelValue:n(i),"onUpdate:modelValue":o[2]||(o[2]=d=>m(i)?i.value=d:null),"thumb-color":"error","thumb-label":"always"},null,8,["modelValue"])]),_:1})]),_:1}))}}),$e={},Re=s("div",{class:"text-caption"}," Disabled ",-1),Te=s("div",{class:"text-caption"}," Readonly ",-1);function De(v,l){return b(),_(x,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[Re,e(p,{disabled:"",label:"Disabled","model-value":30})]),_:1}),e(u,{cols:"12"},{default:t(()=>[Te,e(p,{readonly:"",label:"Readonly","model-value":30})]),_:1})]),_:1})}const je=g($e,[["render",De]]),Ue=f({__name:"DemoSliderBasic",setup(v){const l=V(30);return(a,i)=>(b(),_(x,null,{default:t(()=>[e(u,{cols:"12"},{default:t(()=>[e(p)]),_:1}),e(u,{cols:"12"},{default:t(()=>[e(p,{modelValue:n(l),"onUpdate:modelValue":i[0]||(i[0]=r=>m(l)?l.value=r:null)},null,8,["modelValue"])]),_:1})]),_:1}))}}),Ae={ts:`<script lang="ts" setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'

  return 'error'
})

const animationDuration = computed(() => {
  return \`\${60 / bpm.value}s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'tabler-pause' : 'tabler-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`,js:`<script setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'
  
  return 'error'
})

const animationDuration = computed(() => {
  return \`\${ 60 / bpm.value }s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'tabler-pause' : 'tabler-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="tabler-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`},Fe={ts:`<script lang="ts" setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(225)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-r"
        />

        <VTextField
          v-model="redColorValue"
          type="number"
          placeholder="10"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-g"
        />

        <VTextField
          v-model="greenColorValue"
          type="number"
          placeholder="20"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-b"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          placeholder="30"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(225)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-r"
        />

        <VTextField
          v-model="redColorValue"
          type="number"
          placeholder="10"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-g"
        />

        <VTextField
          v-model="greenColorValue"
          type="number"
          placeholder="20"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex justify-space-between">
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
          prepend-icon="tabler-letter-b"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          placeholder="30"
          :max="255"
          style="max-inline-size: 5rem;"
        />
      </div>
    </VCol>
  </VRow>
</template>
`},Be={ts:`<script setup lang="ts">
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`},Pe={ts:`<script lang="ts" setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`},Me={ts:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`},Ie={ts:`<script lang="ts" setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="tabler-volume"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="tabler-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="tabler-minus"
        prepend-icon="tabler-plus"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="tabler-volume"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="tabler-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="tabler-minus"
        prepend-icon="tabler-plus"
      />
    </VCol>
  </VRow>
</template>
`},Le={ts:`<script lang="ts" setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <div class="d-flex justify-space-between">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <AppTextField
      v-model="slider"
      type="number"
      placeholder="10"
      style="max-inline-size: 5rem;"
    />
  </div>
</template>
`,js:`<script setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <div class="d-flex justify-space-between">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <AppTextField
      v-model="slider"
      type="number"
      placeholder="10"
      style="max-inline-size: 5rem;"
    />
  </div>
</template>
`},Oe={ts:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="3"
    :track-size="2"
  />
</template>
`,js:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="18"
    :tick-size="3"
    :track-size="2"
  />
</template>
`},Ye={ts:`<script lang="ts" setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`,js:`<script setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`},Ee={ts:`<script lang="ts" setup>
const satisfactionEmojis = ['😭', '😢', '😔', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍']
const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const satisfactionEmojis = [
  '😭',
  '😢',
  '😔',
  '🙁',
  '😐',
  '🙂',
  '😊',
  '😁',
  '😄',
  '😍',
]

const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},Ne={ts:`<script lang="ts" setup>
const value = ref(0)
const fruits = ref(1)
const ticksLabels = { 0: 'Figs', 1: 'Lemon', 2: 'Pear', 3: 'Apple' }
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const value = ref(0)
const fruits = ref(1)

const ticksLabels = {
  0: 'Figs',
  1: 'Lemon',
  2: 'Pear',
  3: 'Apple',
}
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`},Ge={ts:`<script lang="ts" setup>
const value = ref(30)
const rules = [(v: number) => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`,js:`<script setup>
const value = ref(30)
const rules = [v => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`},Je={ts:`<script lang="ts" setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`},qe=s("p",null,[c("The "),s("code",null,"v-slider"),c(" component is a better visualization of the number input.")],-1),He=s("p",null,[c("You cannot interact with "),s("code",null,"disabled"),c(" and "),s("code",null,"readonly"),c(" sliders.")],-1),Ke=s("p",null,[c("You can set the colors of the slider using the props "),s("code",null,"color"),c(", "),s("code",null,"track-color"),c(" and "),s("code",null,"thumb-color"),c(".")],-1),Qe=s("p",null,[c("You can add icons to the slider with the "),s("code",null,"append-icon"),c(" and "),s("code",null,"prepend-icon"),c(" props.")],-1),We=s("p",null,[c("Using the "),s("code",null,"step"),c(" prop you can control the precision of the slider, and how much it should move each step.")],-1),Xe=s("p",null,[c("Vuetify includes simple validation through the "),s("code",null,"rules"),c(" prop.")],-1),Ze=s("p",null,[c("You can set "),s("code",null,"min"),c(" and "),s("code",null,"max"),c(" values of sliders.")],-1),el=s("p",null,[c("Use "),s("code",null,"thumb-size"),c(", "),s("code",null,"tick-size"),c(", and "),s("code",null,"track-size"),c(" prop to increase and decrease the size of thumb, tick and track. ")],-1),ll=s("p",null,[c("You can display a thumb label while sliding or always with the "),s("code",null,"thumb-label"),c(" prop.")],-1),tl=s("p",null,"Tick marks represent predetermined values to which the user can move the slider.",-1),ol=s("p",null,[c(" You can use the "),s("code",null,"vertical"),c(" prop to switch sliders to a vertical orientation. ")],-1),sl=s("p",null,[c("Sliders can be combined with other components in its "),s("code",null,"append"),c(" slot, such as "),s("code",null,"v-text-field"),c(", to add additional functionality to the component.")],-1),al=s("p",null,[c("Use slots such as "),s("code",null,"append"),c(" and "),s("code",null,"prepend"),c(" to easily customize the "),s("code",null,"v-slider"),c(" to fit any situation.")],-1),$l=f({__name:"slider",setup(v){return(l,a)=>{const i=Ue,r=H,o=je,d=ze,h=ye,C=we,w=Ce,U=he,A=_e,F=ve,B=ce,P=ae,M=se,I=ee;return b(),_(x,{class:"match-height"},{default:t(()=>[e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Basic",code:Be},{default:t(()=>[qe,e(i)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Disabled and Readonly",code:Me},{default:t(()=>[He,e(o)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Colors",code:Pe},{default:t(()=>[Ke,e(d)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Icons",code:Ie},{default:t(()=>[Qe,e(h)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Step",code:Ye},{default:t(()=>[We,e(C)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Validation",code:Ge},{default:t(()=>[Xe,e(w)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Min and Max",code:Le},{default:t(()=>[Ze,e(U)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Size",code:Oe},{default:t(()=>[el,e(A)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Thumb",code:Ee},{default:t(()=>[ll,e(F)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Ticks",code:Ne},{default:t(()=>[tl,e(B)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Vertical",code:Je},{default:t(()=>[ol,e(P)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Append text field",code:Fe},{default:t(()=>[sl,e(M)]),_:1},8,["code"])]),_:1}),e(u,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Append and prepend",code:Ae},{default:t(()=>[al,e(I)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{$l as default};
