import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as p,b as e,b9 as r,d as V,r as v,H as h,bd as y,f as s,v as o,x as d,n as t,g as z,e as a}from"./main-4HtaUiFJ.js";import{_ as w}from"./AppCardCode.vue_vue_type_style_index_0_lang-CrvxCsy6.js";import{a as m,V as x}from"./VRow-D3BW0X_c.js";import"./vue3-perfect-scrollbar-CbwDZVVd.js";import"./VCard-BmDiRtzo.js";import"./VAvatar-DqZM1Z9r.js";import"./VImg-_vWB6Zwl.js";import"./VCardText-BPW3eqxe.js";import"./VDivider-BTqHSpsX.js";/* empty css              */const $={},I={class:"demo-space-x"};function B(u,i){return n(),p("div",I,[e(r,{size:30,width:"3",color:"primary",indeterminate:""}),e(r,{size:40,color:"primary",indeterminate:""}),e(r,{size:50,color:"primary",indeterminate:""}),e(r,{size:60,color:"primary",indeterminate:""})])}const D=g($,[["render",B]]),b={class:"demo-space-x"},j=V({__name:"DemoProgressCircularRotate",setup(u){const i=v(),l=v(0);return h(()=>{i.value=setInterval(()=>{if(l.value===100)return l.value=0;l.value+=10},1e3)}),y(()=>{clearInterval(i.value)}),(_,c)=>(n(),p("div",b,[e(r,{rotate:360,size:70,width:6,"model-value":t(l),color:"primary"},{default:s(()=>[o(d(t(l)),1)]),_:1},8,["model-value"]),e(r,{rotate:90,size:70,width:6,"model-value":t(l),color:"primary"},{default:s(()=>[o(d(t(l)),1)]),_:1},8,["model-value"]),e(r,{rotate:170,size:70,width:6,"model-value":t(l),color:"primary"},{default:s(()=>[o(d(t(l)),1)]),_:1},8,["model-value"]),e(r,{rotate:-90,size:70,width:6,"model-value":t(l),color:"primary"},{default:s(()=>[o(d(t(l)),1)]),_:1},8,["model-value"])]))}}),R={},U={class:"demo-space-x"};function k(u,i){return n(),p("div",U,[e(r,{indeterminate:"",color:"primary"}),e(r,{indeterminate:"",color:"secondary"}),e(r,{indeterminate:"",color:"success"}),e(r,{indeterminate:"",color:"info"}),e(r,{indeterminate:"",color:"warning"}),e(r,{indeterminate:"",color:"error"})])}const M=g(R,[["render",k]]),N={},S={class:"demo-space-x"};function T(u,i){return n(),p("div",S,[e(r,{"model-value":"50",color:"primary"}),e(r,{"model-value":"50",color:"secondary"}),e(r,{"model-value":"50",color:"success"}),e(r,{"model-value":"50",color:"info"}),e(r,{"model-value":"50",color:"warning"}),e(r,{"model-value":"50",color:"error"})])}const A=g(N,[["render",T]]),E={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      model-value="50"
      color="primary"
    />

    <VProgressCircular
      model-value="50"
      color="secondary"
    />

    <VProgressCircular
      model-value="50"
      color="success"
    />

    <VProgressCircular
      model-value="50"
      color="info"
    />

    <VProgressCircular
      model-value="50"
      color="warning"
    />

    <VProgressCircular
      model-value="50"
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      model-value="50"
      color="primary"
    />

    <VProgressCircular
      model-value="50"
      color="secondary"
    />

    <VProgressCircular
      model-value="50"
      color="success"
    />

    <VProgressCircular
      model-value="50"
      color="info"
    />

    <VProgressCircular
      model-value="50"
      color="warning"
    />

    <VProgressCircular
      model-value="50"
      color="error"
    />
  </div>
</template>
`},H={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
`},q={ts:`<script setup lang="ts">
const interval = ref()
const progressValue = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100)
      return progressValue.value = 0
    progressValue.value += 10
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(interval.value)
})
<\/script>

<template>
  <div class="demo-space-x">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="170"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>
  </div>
</template>
`,js:`<script setup>
const interval = ref()
const progressValue = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100)
      return progressValue.value = 0
    progressValue.value += 10
  }, 1000)
})
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
<\/script>

<template>
  <div class="demo-space-x">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="170"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>
  </div>
</template>
`},F={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      :size="30"
      width="3"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="40"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="60"
      color="primary"
      indeterminate
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      :size="30"
      width="3"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="40"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="60"
      color="primary"
      indeterminate
    />
  </div>
</template>
`},G=a("p",null,[o("Alternate colors can be applied to "),a("code",null,"v-progress-circular"),o(" using the "),a("code",null,"color"),o(" prop.")],-1),J=a("p",null,[o("Using the "),a("code",null,"indeterminate"),o(" prop, a "),a("code",null,"v-progress-circular"),o(" continues to animate indefinitely.")],-1),K=a("p",null,[o("The "),a("code",null,"rotate"),o(" prop gives you the ability to customize the "),a("code",null,"v-progress-circular"),o("'s origin.")],-1),L=a("p",null,[o("The "),a("code",null,"size"),o(" and "),a("code",null,"width"),o(" props allow you to easily alter the size and width of the "),a("code",null,"v-progress-circular"),o(" component.")],-1),le=V({__name:"progress-circular",setup(u){return(i,l)=>{const _=A,c=w,C=M,P=j,f=D;return n(),z(x,{class:"match-height"},{default:s(()=>[e(m,{cols:"12",md:"6"},{default:s(()=>[e(c,{title:"color",code:E},{default:s(()=>[G,e(_)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:s(()=>[e(c,{title:"Indeterminate",code:H},{default:s(()=>[J,e(C)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:s(()=>[e(c,{title:"Rotate",code:q},{default:s(()=>[K,e(P)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:s(()=>[e(c,{title:"Size",code:F},{default:s(()=>[L,e(f)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{le as default};
