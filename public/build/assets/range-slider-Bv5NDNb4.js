import{m as ee,u as le,a as ae,V as te,b as E,g as K}from"./VSliderTrack-DV6VBUQt.js";import{m as se,V as q}from"./VInput-BFY35E5e.js";import{m as oe,u as ue,V as ne}from"./form-DFwA6hGK.js";import{a4 as re,aA as ie,r as _,aL as de,aK as ce,a1 as G,ab as me,b as a,F as pe,s as ve,d as g,o as S,g as R,n as $,aY as x,f as d,V as fe,e as c,v}from"./main-4HtaUiFJ.js";import{_ as Ve}from"./AppCardCode.vue_vue_type_style_index_0_lang-CrvxCsy6.js";import{a as k,V as be}from"./VRow-D3BW0X_c.js";import"./VImg-_vWB6Zwl.js";import"./vue3-perfect-scrollbar-CbwDZVVd.js";import"./VCard-BmDiRtzo.js";import"./VAvatar-DqZM1Z9r.js";import"./VCardText-BPW3eqxe.js";import"./VDivider-BTqHSpsX.js";/* empty css              */const _e=re({...oe(),...se(),...ee(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),y=ie()({name:"VRangeSlider",props:_e(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,s){let{slots:u,emit:o}=s;const l=_(),i=_(),h=_(),{rtlClasses:M}=de();function j(m){if(!l.value||!i.value)return;const p=K(m,l.value.$el,e.direction),r=K(m,i.value.$el,e.direction),n=Math.abs(p),f=Math.abs(r);return n<f||n===f&&p<0?l.value.$el:i.value.$el}const U=le(e),t=ce(e,"modelValue",void 0,m=>m!=null&&m.length?m.map(p=>U.roundValue(p)):[0,0]),{activeThumbRef:V,hasLabels:H,max:L,min:I,mousePressed:J,onSliderMousedown:Q,onSliderTouchstart:X,position:z,trackContainerRef:Z,readonly:A}=ae({props:e,steps:U,onSliderStart:()=>{o("start",t.value)},onSliderEnd:m=>{var n;let{value:p}=m;const r=V.value===((n=l.value)==null?void 0:n.$el)?[p,t.value[1]]:[t.value[0],p];!e.strict&&r[0]<r[1]&&(t.value=r),o("end",t.value)},onSliderMove:m=>{var f,w,D,b;let{value:p}=m;const[r,n]=t.value;!e.strict&&r===n&&r!==I.value&&(V.value=p>r?(f=i.value)==null?void 0:f.$el:(w=l.value)==null?void 0:w.$el,(D=V.value)==null||D.focus()),V.value===((b=l.value)==null?void 0:b.$el)?t.value=[Math.min(p,n),n]:t.value=[r,Math.max(r,p)]},getActiveThumb:j}),{isFocused:B,focus:N,blur:O}=ue(e),W=G(()=>z(t.value[0])),Y=G(()=>z(t.value[1]));return me(()=>{const m=q.filterProps(e),p=!!(e.label||u.label||u.prepend);return a(q,ve({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!u["tick-label"]||H.value,"v-slider--focused":B.value,"v-slider--pressed":J.value,"v-slider--disabled":e.disabled},M.value,e.class],style:e.style,ref:h},m,{focused:B.value}),{...u,prepend:p?r=>{var n,f;return a(pe,null,[((n=u.label)==null?void 0:n.call(u,r))??(e.label?a(ne,{class:"v-slider__label",text:e.label},null):void 0),(f=u.prepend)==null?void 0:f.call(u,r)])}:void 0,default:r=>{var w,D;let{id:n,messagesId:f}=r;return a("div",{class:"v-slider__container",onMousedown:A.value?void 0:Q,onTouchstartPassive:A.value?void 0:X},[a("input",{id:`${n.value}_start`,name:e.name||n.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:t.value[0]},null),a("input",{id:`${n.value}_stop`,name:e.name||n.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:t.value[1]},null),a(te,{ref:Z,start:W.value,stop:Y.value},{"tick-label":u["tick-label"]}),a(E,{ref:l,"aria-describedby":f.value,focused:B&&V.value===((w=l.value)==null?void 0:w.$el),modelValue:t.value[0],"onUpdate:modelValue":b=>t.value=[b,t.value[1]],onFocus:b=>{var T,C,F,P;N(),V.value=(T=l.value)==null?void 0:T.$el,t.value[0]===t.value[1]&&t.value[1]===I.value&&b.relatedTarget!==((C=i.value)==null?void 0:C.$el)&&((F=l.value)==null||F.$el.blur(),(P=i.value)==null||P.$el.focus())},onBlur:()=>{O(),V.value=void 0},min:I.value,max:t.value[1],position:W.value,ripple:e.ripple},{"thumb-label":u["thumb-label"]}),a(E,{ref:i,"aria-describedby":f.value,focused:B&&V.value===((D=i.value)==null?void 0:D.$el),modelValue:t.value[1],"onUpdate:modelValue":b=>t.value=[t.value[0],b],onFocus:b=>{var T,C,F,P;N(),V.value=(T=i.value)==null?void 0:T.$el,t.value[0]===t.value[1]&&t.value[0]===L.value&&b.relatedTarget!==((C=l.value)==null?void 0:C.$el)&&((F=i.value)==null||F.$el.blur(),(P=l.value)==null||P.$el.focus())},onBlur:()=>{O(),V.value=void 0},min:t.value[0],max:L.value,position:Y.value,ripple:e.ripple},{"thumb-label":u["thumb-label"]})])}})}),{}}}),he=g({__name:"DemoRangeSliderVertical",setup(e){const s=_([20,40]);return(u,o)=>(S(),R(y,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>x(s)?s.value=l:null),direction:"vertical"},null,8,["modelValue"]))}}),ge=g({__name:"DemoRangeSliderThumbLabel",setup(e){const s=["Winter","Spring","Summer","Fall"],u=["tabler-snowflake","tabler-leaf","tabler-flame","tabler-droplet"],o=_([1,2]);return(l,i)=>(S(),R(y,{modelValue:$(o),"onUpdate:modelValue":i[0]||(i[0]=h=>x(o)?o.value=h:null),tick:s,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":d(({modelValue:h})=>[a(fe,{icon:u[h]},null,8,["icon"])]),_:1},8,["modelValue"]))}}),Se=g({__name:"DemoRangeSliderStep",setup(e){const s=_([20,40]);return(u,o)=>(S(),R(y,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>x(s)?s.value=l:null),step:"10"},null,8,["modelValue"]))}}),Re=g({__name:"DemoRangeSliderColor",setup(e){const s=_([10,60]);return(u,o)=>(S(),R(y,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>x(s)?s.value=l:null),color:"success"},null,8,["modelValue"]))}}),ke=g({__name:"DemoRangeSliderDisabled",setup(e){const s=_([30,60]);return(u,o)=>(S(),R(y,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>x(s)?s.value=l:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}}),$e=g({__name:"DemoRangeSliderBasic",setup(e){const s=_([10,60]);return(u,o)=>(S(),R(y,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>x(s)?s.value=l:null)},null,8,["modelValue"]))}}),xe={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},ye={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`},we={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},De={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},Te={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['tabler-snowflake', 'tabler-leaf', 'tabler-flame', 'tabler-droplet']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'tabler-snowflake',
  'tabler-leaf',
  'tabler-flame',
  'tabler-droplet',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},Ce={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},Fe=c("p",null,[v("The "),c("code",null,"v-slider"),v(" component is a better visualization of the number input.")],-1),Pe=c("p",null,[v("You cannot interact with "),c("code",null,"disabled"),v(" sliders.")],-1),Ue=c("p",null,[v("Use "),c("code",null,"color"),v(" prop to the sets the slider color. "),c("code",null,"track-color"),v(" prop to sets the color of slider's unfilled track.")],-1),Be=c("p",null,[c("code",null,"v-range-slider"),v(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),Me=c("p",null,[v(" Using the "),c("code",null,"tick-labels"),v(" prop along with the "),c("code",null,"thumb-label"),v(" slot, you can create a very customized solution. ")],-1),je=c("p",null,[v("You can use the "),c("code",null,"vertical"),v(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),Je=g({__name:"range-slider",setup(e){return(s,u)=>{const o=$e,l=Ve,i=ke,h=Re,M=Se,j=ge,U=he;return S(),R(be,null,{default:d(()=>[a(k,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Basic",code:xe},{default:d(()=>[Fe,a(o)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Disabled",code:we},{default:d(()=>[Pe,a(i)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Color",code:ye},{default:d(()=>[Ue,a(h)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Step",code:De},{default:d(()=>[Be,a(M)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Thumb label",code:Te},{default:d(()=>[Me,a(j)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:d(()=>[a(l,{title:"Vertical",code:Ce},{default:d(()=>[je,a(U)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Je as default};
