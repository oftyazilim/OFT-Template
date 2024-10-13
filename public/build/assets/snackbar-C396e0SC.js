import{a4 as K,av as G,aw as X,ax as Q,bF as Z,az as aa,aJ as ea,aA as ta,aK as na,aH as la,aB as ia,bI as oa,aI as sa,r as d,a7 as E,W as ra,d8 as ca,bW as ba,cF as ua,bX as ka,w as L,H as ma,d9 as da,a1 as Va,ab as Sa,b as a,bM as pa,b8 as fa,bv as va,s as M,bY as Ba,b0 as _a,d as y,o as x,c as T,f as e,v as n,ak as m,n as S,aY as p,V as g,F as $,g as ga,e as V}from"./main-4HtaUiFJ.js";import{m as ya,V as j}from"./VOverlay-C0_cIW55.js";import{f as xa}from"./forwardRefs-C-GTDzx5.js";import{u as Ia}from"./scopeId-DbRFQ7mK.js";import{_ as Ta}from"./AppCardCode.vue_vue_type_style_index_0_lang-CrvxCsy6.js";import{a as I,V as wa}from"./VRow-D3BW0X_c.js";import"./easing-CjukEv2V.js";import"./delay-B6n6jnpn.js";import"./lazy-Df-tM7SF.js";import"./VImg-_vWB6Zwl.js";import"./vue3-perfect-scrollbar-CbwDZVVd.js";import"./VCard-BmDiRtzo.js";import"./VAvatar-DqZM1Z9r.js";import"./VCardText-BPW3eqxe.js";import"./VDivider-BTqHSpsX.js";/* empty css              */function Ca(s){const l=E(s);let r=-1;function t(){clearInterval(r)}function o(){t(),_a(()=>l.value=s)}function u(v){const c=v?getComputedStyle(v):{transitionDuration:.2},k=parseFloat(c.transitionDuration)*1e3||200;if(t(),l.value<=0)return;const _=performance.now();r=window.setInterval(()=>{const w=performance.now()-_+k;l.value=Math.max(s-w,0),l.value<=0&&t()},k)}return Ba(t),{clear:t,time:l,start:u,reset:o}}const $a=K({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...G({location:"bottom"}),...X(),...Q(),...Z(),...aa(),...ea(ya({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),f=ta()({name:"VSnackbar",props:$a(),emits:{"update:modelValue":s=>!0},setup(s,l){let{slots:r}=l;const t=na(s,"modelValue"),{positionClasses:o}=la(s),{scopeId:u}=Ia(),{themeClasses:v}=ia(s),{colorClasses:c,colorStyles:k,variantClasses:_}=oa(s),{roundedClasses:w}=sa(s),i=Ca(Number(s.timeout)),b=d(),F=d(),U=E(!1),R=E(0),h=d(),H=ra(ca,void 0);ba(()=>!!H,()=>{const B=ua();ka(()=>{h.value=B.mainStyles.value})}),L(t,O),L(()=>s.timeout,O),ma(()=>{t.value&&O()});let P=-1;function O(){i.reset(),window.clearTimeout(P);const B=Number(s.timeout);if(!t.value||B===-1)return;const C=da(F.value);i.start(C),P=window.setTimeout(()=>{t.value=!1},B)}function q(){i.reset(),window.clearTimeout(P)}function N(){U.value=!0,q()}function z(){U.value=!1,O()}function W(B){R.value=B.touches[0].clientY}function Y(B){Math.abs(R.value-B.changedTouches[0].clientY)>50&&(t.value=!1)}const J=Va(()=>s.location.split(" ").reduce((B,C)=>(B[`v-snackbar--${C}`]=!0,B),{}));return Sa(()=>{const B=j.filterProps(s),C=!!(r.default||r.text||s.text);return a(j,M({ref:b,class:["v-snackbar",{"v-snackbar--active":t.value,"v-snackbar--multi-line":s.multiLine&&!s.vertical,"v-snackbar--timer":!!s.timer,"v-snackbar--vertical":s.vertical},J.value,o.value,s.class],style:[h.value,s.style]},B,{modelValue:t.value,"onUpdate:modelValue":D=>t.value=D,contentProps:M({class:["v-snackbar__wrapper",v.value,c.value,w.value,_.value],style:[k.value],onPointerenter:N,onPointerleave:z},B.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0,onTouchstartPassive:W,onTouchend:Y},u),{default:()=>{var D,A;return[pa(!1,"v-snackbar"),s.timer&&!U.value&&a("div",{key:"timer",class:"v-snackbar__timer"},[a(fa,{ref:F,color:typeof s.timer=="string"?s.timer:"info",max:s.timeout,"model-value":i.time.value},null)]),C&&a("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((D=r.text)==null?void 0:D.call(r))??s.text,(A=r.default)==null?void 0:A.call(r)]),r.actions&&a(va,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[a("div",{class:"v-snackbar__actions"},[r.actions({isActive:t})])]})]},activator:r.activator})}),xa({},b)}}),Oa={class:"demo-space-x"},Da=y({__name:"DemoSnackbarTransition",setup(s){const l=d(!1),r=d(!1),t=d(!1);return(o,u)=>(x(),T("div",Oa,[a(m,{onClick:u[0]||(u[0]=v=>l.value=!0)},{default:e(()=>[n(" fade snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":u[1]||(u[1]=v=>p(l)?l.value=v:null),transition:"fade-transition",location:"top start"},{default:e(()=>[n(" I'm a fade transition snackbar. ")]),_:1},8,["modelValue"]),a(m,{onClick:u[2]||(u[2]=v=>r.value=!0)},{default:e(()=>[n(" Scale snackbar ")]),_:1}),a(f,{modelValue:S(r),"onUpdate:modelValue":u[3]||(u[3]=v=>p(r)?r.value=v:null),transition:"scale-transition",location:"bottom end"},{default:e(()=>[n(" I'm a scale transition snackbar. ")]),_:1},8,["modelValue"]),a(m,{onClick:u[4]||(u[4]=v=>t.value=!0)},{default:e(()=>[n(" scroll y reverse ")]),_:1}),a(f,{modelValue:S(t),"onUpdate:modelValue":u[5]||(u[5]=v=>p(t)?t.value=v:null),transition:"scroll-y-reverse-transition",location:"top end"},{default:e(()=>[n(" I'm a scroll y reverse transition snackbar. ")]),_:1},8,["modelValue"])]))}}),Ua={class:"demo-space-x"},Pa=y({__name:"DemoSnackbarVariants",setup(s){const l=d(!1),r=d(!1),t=d(!1),o=d(!1),u=d(!1);return(v,c)=>(x(),T("div",Ua,[a(m,{onClick:c[0]||(c[0]=k=>l.value=!0)},{default:e(()=>[n(" Default ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":c[1]||(c[1]=k=>p(l)?l.value=k:null),location:"top start"},{default:e(()=>[n(" Jelly chocolate bar candy canes apple pie. ")]),_:1},8,["modelValue"]),a(m,{onClick:c[2]||(c[2]=k=>r.value=!0)},{default:e(()=>[n(" tonal ")]),_:1}),a(f,{modelValue:S(r),"onUpdate:modelValue":c[3]||(c[3]=k=>p(r)?r.value=k:null),location:"top end",variant:"tonal"},{default:e(()=>[n(" Ice cream cake candy canes. ")]),_:1},8,["modelValue"]),a(m,{onClick:c[4]||(c[4]=k=>t.value=!0)},{default:e(()=>[n(" Text ")]),_:1}),a(f,{modelValue:S(t),"onUpdate:modelValue":c[5]||(c[5]=k=>p(t)?t.value=k:null),location:"end center",variant:"text"},{default:e(()=>[n(" Pie icing biscuit soufflé liquorice topping. ")]),_:1},8,["modelValue"]),a(m,{onClick:c[6]||(c[6]=k=>o.value=!0)},{default:e(()=>[n(" Outlined ")]),_:1}),a(f,{modelValue:S(o),"onUpdate:modelValue":c[7]||(c[7]=k=>p(o)?o.value=k:null),location:"bottom end",variant:"outlined",color:"error"},{default:e(()=>[n(" Oat cake caramels sesame snaps candy. ")]),_:1},8,["modelValue"]),a(m,{onClick:c[8]||(c[8]=k=>u.value=!0)},{default:e(()=>[n(" Flat ")]),_:1}),a(f,{modelValue:S(u),"onUpdate:modelValue":c[9]||(c[9]=k=>p(u)?u.value=k:null),location:"bottom start",variant:"flat",color:"error"},{default:e(()=>[n(" Oat cake caramels sesame snaps candy. ")]),_:1},8,["modelValue"])]))}}),Ea={class:"demo-space-x"},Fa=y({__name:"DemoSnackbarPosition",setup(s){const l=d(!1),r=d(!1),t=d(!1),o=d(!1),u=d(!1),v=d(!1),c=d(!1),k=d(!1),_=d(!1);return(w,i)=>(x(),T("div",Ea,[a(m,{icon:"",variant:"text",onClick:i[0]||(i[0]=b=>r.value=!0)},{default:e(()=>[a(g,{icon:"tabler-arrow-up"})]),_:1}),a(f,{modelValue:S(r),"onUpdate:modelValue":i[1]||(i[1]=b=>p(r)?r.value=b:null),location:"top"},{default:e(()=>[n(" I'm a top snackbar. ")]),_:1},8,["modelValue"]),a(m,{icon:"",variant:"text",onClick:i[2]||(i[2]=b=>t.value=!0)},{default:e(()=>[a(g,{icon:"tabler-arrow-up-right"})]),_:1}),a(f,{modelValue:S(t),"onUpdate:modelValue":i[3]||(i[3]=b=>p(t)?t.value=b:null),location:"top end"},{default:e(()=>[n(" I'm a top right snackbar. ")]),_:1},8,["modelValue"]),a(m,{icon:"",variant:"text",onClick:i[4]||(i[4]=b=>c.value=!0)},{default:e(()=>[a(g,{icon:"tabler-arrow-right"})]),_:1}),a(f,{modelValue:S(c),"onUpdate:modelValue":i[5]||(i[5]=b=>p(c)?c.value=b:null),location:"end center"},{default:e(()=>[n(" I'm a center end snackbar. ")]),_:1},8,["modelValue"]),a(m,{icon:"",variant:"text",onClick:i[6]||(i[6]=b=>o.value=!0)},{default:e(()=>[a(g,{icon:"tabler-arrow-down-right"})]),_:1}),a(f,{modelValue:S(o),"onUpdate:modelValue":i[7]||(i[7]=b=>p(o)?o.value=b:null),location:"bottom end"},{default:e(()=>[n(" I'm a bottom end snackbar. ")]),_:1},8,["modelValue"]),a(m,{icon:"",variant:"text",onClick:i[8]||(i[8]=b=>u.value=!0)},{default:e(()=>[a(g,{icon:"tabler-arrow-down"})]),_:1}),a(f,{modelValue:S(u),"onUpdate:modelValue":i[9]||(i[9]=b=>p(u)?u.value=b:null)},{default:e(()=>[n(" I'm a bottom snackbar. ")]),_:1},8,["modelValue"]),a(m,{icon:"",variant:"text",onClick:i[10]||(i[10]=b=>v.value=!0)},{default:e(()=>[a(g,{icon:"tabler-arrow-down-left"})]),_:1}),a(f,{modelValue:S(v),"onUpdate:modelValue":i[11]||(i[11]=b=>p(v)?v.value=b:null),location:"bottom start"},{default:e(()=>[n(" I'm a bottom start snackbar. ")]),_:1},8,["modelValue"]),a(m,{icon:"",variant:"text",onClick:i[12]||(i[12]=b=>k.value=!0)},{default:e(()=>[a(g,{icon:"tabler-arrow-left"})]),_:1}),a(f,{modelValue:S(k),"onUpdate:modelValue":i[13]||(i[13]=b=>p(k)?k.value=b:null),location:"start center"},{default:e(()=>[n(" I'm a center start snackbar. ")]),_:1},8,["modelValue"]),a(m,{icon:"",variant:"text",onClick:i[14]||(i[14]=b=>l.value=!0)},{default:e(()=>[a(g,{icon:"tabler-arrow-up-left"})]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":i[15]||(i[15]=b=>p(l)?l.value=b:null),location:"top start"},{default:e(()=>[n(" I'm a top start snackbar. ")]),_:1},8,["modelValue"]),a(m,{icon:"",variant:"text",onClick:i[16]||(i[16]=b=>_.value=!0)},{default:e(()=>[a(g,{icon:"tabler-arrows-minimize"})]),_:1}),a(f,{modelValue:S(_),"onUpdate:modelValue":i[17]||(i[17]=b=>p(_)?_.value=b:null),location:"center"},{default:e(()=>[n(" I'm a center snackbar. ")]),_:1},8,["modelValue"])]))}}),Ra=y({__name:"DemoSnackbarVertical",setup(s){const l=d(!1);return(r,t)=>(x(),T($,null,[a(m,{onClick:t[0]||(t[0]=o=>l.value=!0)},{default:e(()=>[n(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":t[3]||(t[3]=o=>p(l)?l.value=o:null),vertical:""},{actions:e(()=>[a(m,{color:"success",onClick:t[1]||(t[1]=o=>l.value=!1)},{default:e(()=>[n(" Undo ")]),_:1}),a(m,{color:"error",onClick:t[2]||(t[2]=o=>l.value=!1)},{default:e(()=>[n(" Close ")]),_:1})]),default:e(()=>[n(" Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy. ")]),_:1},8,["modelValue"])],64))}}),ha=y({__name:"DemoSnackbarTimeout",setup(s){const l=d(!1);return(r,t)=>(x(),T($,null,[a(m,{onClick:t[0]||(t[0]=o=>l.value=!0)},{default:e(()=>[n(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":t[1]||(t[1]=o=>p(l)?l.value=o:null),timeout:2e3},{default:e(()=>[n(" My timeout is set to 2000. ")]),_:1},8,["modelValue"])],64))}}),Aa=y({__name:"DemoSnackbarMultiLine",setup(s){const l=d(!1);return(r,t)=>(x(),T($,null,[a(m,{onClick:t[0]||(t[0]=o=>l.value=!0)},{default:e(()=>[n(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":t[2]||(t[2]=o=>p(l)?l.value=o:null),"multi-line":""},{actions:e(()=>[a(m,{color:"error",onClick:t[1]||(t[1]=o=>l.value=!1)},{default:e(()=>[n(" Close ")]),_:1})]),default:e(()=>[n(" I am a multi-line snackbar. I can have more than one line. This is another line that is quite long. ")]),_:1},8,["modelValue"])],64))}}),La=y({__name:"DemoSnackbarWithAction",setup(s){const l=d(!1);return(r,t)=>(x(),T($,null,[a(m,{onClick:t[0]||(t[0]=o=>l.value=!0)},{default:e(()=>[n(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":t[2]||(t[2]=o=>p(l)?l.value=o:null)},{actions:e(()=>[a(m,{color:"error",onClick:t[1]||(t[1]=o=>l.value=!1)},{default:e(()=>[n(" Close ")]),_:1})]),default:e(()=>[n(" Hello, I'm a snackbar with actions. ")]),_:1},8,["modelValue"])],64))}}),Ma=y({__name:"DemoSnackbarBasic",setup(s){const l=d(!1);return(r,t)=>(x(),T($,null,[a(m,{onClick:t[0]||(t[0]=o=>l.value=!0)},{default:e(()=>[n(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":t[1]||(t[1]=o=>p(l)?l.value=o:null)},{default:e(()=>[n(" Hello, I'm a snackbar ")]),_:1},8,["modelValue"])],64))}}),ja={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`},Ha={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},qa={ts:`<script lang="ts" setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="tabler-arrow-up" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="tabler-arrow-up-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="tabler-arrow-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="tabler-arrow-down-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="tabler-arrow-down" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="tabler-arrow-down-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="tabler-arrow-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="tabler-arrow-up-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="tabler-arrows-minimize" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="tabler-arrow-up" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="tabler-arrow-up-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="tabler-arrow-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="tabler-arrow-down-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="tabler-arrow-down" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="tabler-arrow-down-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="tabler-arrow-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="tabler-arrow-up-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="tabler-arrows-minimize" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`},Na={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`},za={ts:`<script lang="ts" setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`},Wa={ts:`<script lang="ts" setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`},Ya={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},Ja={ts:`<script lang="ts" setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},Ka=V("p",null,[n("The "),V("code",null,"v-snackbar"),n(" component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.")],-1),Ga=V("p",null,[n("Use "),V("code",null,"actions"),n(" slot to add action button. A "),V("code",null,"v-snackbar"),n(" in its simplest form displays a temporary and closable notification to the user.")],-1),Xa=V("p",null,[n("The "),V("code",null,"multi-line"),n(" property extends the height of the "),V("code",null,"v-snackbar"),n(" to give you a little more room for content.")],-1),Qa=V("p",null,[n("The "),V("code",null,"timeout"),n(" property lets you customize the delay before the "),V("code",null,"v-snackbar"),n(" is hidden.")],-1),Za=V("p",null,[n("The "),V("code",null,"vertical"),n(" property allows you to stack the content of your "),V("code",null,"v-snackbar"),n(".")],-1),ae=V("p",null,[n("Use "),V("code",null,"location"),n(" prop to change the position of snackbar.")],-1),ee=V("p",null,[n("Apply different styles to the snackbar using props such as "),V("code",null,"shaped"),n(", "),V("code",null,"rounded"),n(", "),V("code",null,"color"),n(", "),V("code",null,"text"),n(", "),V("code",null,"outlined"),n(", "),V("code",null,"tile"),n(" and more.")],-1),te=V("p",null,"Use transition prop to sets the component transition.",-1),ve=y({__name:"snackbar",setup(s){return(l,r)=>{const t=Ma,o=Ta,u=La,v=Aa,c=ha,k=Ra,_=Fa,w=Pa,i=Da;return x(),ga(wa,{class:"match-height"},{default:e(()=>[a(I,{cols:"12",md:"6"},{default:e(()=>[a(o,{title:"Basic",code:ja},{default:e(()=>[Ka,a(t)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(o,{title:"With Action",code:Ja},{default:e(()=>[Ga,a(u)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(o,{title:"Multi Line",code:Ha},{default:e(()=>[Xa,a(v)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(o,{title:"Timeout",code:Na},{default:e(()=>[Qa,a(c)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(o,{title:"Vertical",code:Ya},{default:e(()=>[Za,a(k)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(o,{title:"Position",code:qa},{default:e(()=>[ae,a(_)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(o,{title:"Variants",code:Wa},{default:e(()=>[ee,a(w)]),_:1},8,["code"])]),_:1}),a(I,{cols:"12",md:"6"},{default:e(()=>[a(o,{title:"Transition",code:za},{default:e(()=>[te,a(i)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{ve as default};
