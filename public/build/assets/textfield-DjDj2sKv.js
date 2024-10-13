import{_ as b}from"./AppTextField.vue_vue_type_script_setup_true_lang-CgXasaHP.js";import{V as U}from"./VNodeRenderer-Bltyti6v.js";import{d as v,r as _,o as u,g as f,f as l,b as e,V as F,s as S,v as n,cz as q,n as c,b9 as j,I as H,ak as N,c as z,z as L,aY as V,e as o}from"./main-4HtaUiFJ.js";import{V as B}from"./VTooltip-n36RNktB.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as s,V as C}from"./VRow-D3BW0X_c.js";import{r as E,e as W}from"./validators-BJEf8OaU.js";import{V as Y}from"./VForm-DfyEv3E_.js";import{V as w}from"./VTextField-B9XLf_50.js";import{_ as O}from"./AppCardCode.vue_vue_type_style_index_0_lang-CrvxCsy6.js";import"./form-DFwA6hGK.js";import"./VOverlay-C0_cIW55.js";import"./easing-CjukEv2V.js";import"./delay-B6n6jnpn.js";import"./lazy-Df-tM7SF.js";import"./scopeId-DbRFQ7mK.js";import"./VImg-_vWB6Zwl.js";import"./forwardRefs-C-GTDzx5.js";/* empty css              */import"./helpers-BGv4x_9E.js";/* empty css                   */import"./VCounter-1zqnpjd5.js";import"./VField-BAjGSKE3.js";import"./VInput-BFY35E5e.js";import"./vue3-perfect-scrollbar-CbwDZVVd.js";import"./VCard-BmDiRtzo.js";import"./VAvatar-DqZM1Z9r.js";import"./VCardText-BPW3eqxe.js";import"./VDivider-BTqHSpsX.js";const G={key:0,class:"ms-3"},J=v({__name:"DemoTextfieldIconSlots",setup(h){const a=_("Hey!"),t=_(!1),m=()=>{t.value=!0,a.value="Wait for it...",setTimeout(()=>{t.value=!1,a.value="You've clicked me!"},2e3)};return(r,d)=>{const p=b;return u(),f(p,{modelValue:c(a),"onUpdate:modelValue":d[0]||(d[0]=i=>V(a)?a.value=i:null),clearable:"",label:"Message",placeholder:"Hey!!",type:"text",class:"textfield-demo-icon-slot"},{prepend:l(()=>[e(B,{location:"bottom"},{activator:l(({props:i})=>[e(F,S(i,{icon:"tabler-help"}),null,16)]),default:l(()=>[n(" I'm a tooltip ")]),_:1})]),"append-inner":l(()=>[e(q,{"leave-absolute":""},{default:l(()=>[c(t)?(u(),f(j,{key:0,color:"primary",width:"3",size:"24",indeterminate:""})):(u(),f(c(U),{key:1,class:"text-2xl",nodes:c(H).app.logo},null,8,["nodes"]))]),_:1})]),append:l(()=>[e(N,{icon:r.$vuetify.display.smAndDown,onClick:m},{default:l(()=>[e(F,{icon:"tabler-viewfinder",color:"#fff",size:"22"}),r.$vuetify.display.mdAndUp?(u(),z("span",G,"Click me")):L("",!0)]),_:1},8,["icon"])]),_:1},8,["modelValue"])}}}),K=T(J,[["__scopeId","data-v-8f478c8f"]]),Q=v({__name:"DemoTextfieldPasswordInput",setup(h){const a=_(!1),t=_(!0),m=_("Password"),r=_("wqfasds"),d={required:p=>!!p||"Required.",min:p=>p.length>=8||"Min 8 characters"};return(p,i)=>{const x=b;return u(),f(C,null,{default:l(()=>[e(s,{cols:"12",sm:"6"},{default:l(()=>[e(x,{modelValue:c(m),"onUpdate:modelValue":i[0]||(i[0]=g=>V(m)?m.value=g:null),"append-inner-icon":c(a)?"tabler-eye-off":"tabler-eye",rules:[d.required,d.min],type:c(a)?"text":"password",name:"input-10-1",label:"Normal with hint text",hint:"At least 8 characters",placeholder:"············",counter:"","onClick:appendInner":i[1]||(i[1]=g=>a.value=!c(a))},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1}),e(s,{cols:"12",sm:"6"},{default:l(()=>[e(x,{modelValue:c(r),"onUpdate:modelValue":i[2]||(i[2]=g=>V(r)?r.value=g:null),rules:[d.required,d.min],"append-inner-icon":c(t)?"tabler-eye-off":"tabler-eye",type:c(t)?"text":"password",name:"input-10-2",placeholder:"············",label:"Visible",hint:"At least 8 characters","onClick:appendInner":i[3]||(i[3]=g=>t.value=!c(t))},null,8,["modelValue","rules","append-inner-icon","type"])]),_:1})]),_:1})}}}),X={},Z=o("strong",null,"icon",-1);function ee(h,a){const t=b;return u(),f(t,null,{label:l(()=>[n(" What about  "),Z,n(" here? "),e(F,{icon:"tabler-file-search"})]),_:1})}const le=T(X,[["render",ee]]),te=v({__name:"DemoTextfieldIconEvents",setup(h){const a=_("Hey!"),t=_(!0),m=_(0),r=()=>{t.value=!t.value},d=()=>{a.value=""},p=()=>{m.value=0},i=()=>{p(),d()};return(x,g)=>{const y=b;return u(),f(y,{modelValue:c(a),"onUpdate:modelValue":g[0]||(g[0]=A=>V(a)?a.value=A:null),clearable:"",type:"text",label:"Message",color:"primary",placeholder:"Hey!!","clear-icon":"tabler-circle-x","append-icon":c(a)?x.$vuetify.locale.isRtl?"tabler-arrow-big-left-lines":"tabler-arrow-big-right-lines":"tabler-microphone","append-inner-icon":c(t)?"tabler-map-pin":"tabler-map-pin-off","onClick:appendInner":r,"onClick:append":i,"onClick:clear":d},null,8,["modelValue","append-icon","append-inner-icon"])}}}),oe=v({__name:"DemoTextfieldValidation",setup(h){const a=_("");return(t,m)=>{const r=b;return u(),f(Y,null,{default:l(()=>[e(r,{modelValue:c(a),"onUpdate:modelValue":m[0]||(m[0]=d=>V(a)?a.value=d:null),rules:["requiredValidator"in t?t.requiredValidator:c(E),"emailValidator"in t?t.emailValidator:c(W)],placeholder:"johnedoe@email.com",label:"E-mail"},null,8,["modelValue","rules"])]),_:1})}}}),ne={};function ae(h,a){const t=b;return u(),f(t,{label:"Regular",placeholder:"Placeholder Text","single-line":""})}const se=T(ne,[["render",ae]]),re=v({__name:"DemoTextfieldPrefixesAndSuffixes",setup(h){const a=_(10.05),t=_(28.02),m=_("example"),r=_("04:56");return(d,p)=>{const i=b;return u(),f(C,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(i,{modelValue:c(a),"onUpdate:modelValue":p[0]||(p[0]=x=>V(a)?a.value=x:null),label:"Amount",prefix:"$",type:"number",placeholder:"10.05"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{modelValue:c(t),"onUpdate:modelValue":p[1]||(p[1]=x=>V(t)?t.value=x:null),label:"Weight",suffix:"lbs",type:"number",placeholder:"28.02"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{modelValue:c(m),"onUpdate:modelValue":p[2]||(p[2]=x=>V(m)?m.value=x:null),label:"Email address",suffix:"@gmail.com",placeholder:"example"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(i,{modelValue:c(r),"onUpdate:modelValue":p[3]||(p[3]=x=>V(r)?r.value=x:null),label:"Label Text",type:"time",suffix:"PST",placeholder:"04:56"},null,8,["modelValue"])]),_:1})]),_:1})}}}),ie={};function ce(h,a){const t=b;return u(),f(C,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(t,{label:"Prepend","prepend-icon":"tabler-map-pin",placeholder:"Placeholder Text"})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(t,{label:"Prepend Inner","prepend-inner-icon":"tabler-map-pin",placeholder:"Placeholder Text"})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(t,{label:"Append","append-icon":"tabler-map-pin",placeholder:"Placeholder Text"})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(t,{label:"Append Inner","append-inner-icon":"tabler-map-pin",placeholder:"Placeholder Text"})]),_:1})]),_:1})}const pe=T(ie,[["render",ce]]),de={};function me(h,a){const t=b;return u(),f(t,{color:"success",label:"First name",placeholder:"Placeholder Text"})}const ue=T(de,[["render",me]]),fe={};function _e(h,a){const t=b;return u(),f(t,{placeholder:"Placeholder Text",label:"Regular",clearable:""})}const he=T(fe,[["render",_e]]),xe=v({__name:"DemoTextfieldCounter",setup(h){const a=_("Preliminary report"),t=_("California is a state in the western United States"),m=[r=>r.length<=25||"Max 25 characters"];return(r,d)=>{const p=b;return u(),f(C,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(p,{modelValue:c(a),"onUpdate:modelValue":d[0]||(d[0]=i=>V(a)?a.value=i:null),rules:m,counter:"25",placeholder:"Placeholder Text",hint:"This field uses counter prop",label:"Regular"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(p,{modelValue:c(t),"onUpdate:modelValue":d[1]||(d[1]=i=>V(t)?t.value=i:null),rules:m,counter:"",maxlength:"25",placeholder:"Placeholder Text",hint:"This field uses maxlength attribute",label:"Limit exceeded"},null,8,["modelValue"])]),_:1})]),_:1})}}}),be={};function Ve(h,a){const t=b;return u(),f(C,null,{default:l(()=>[e(s,null,{default:l(()=>[e(t,{label:"Disabled",placeholder:"Placeholder Text",disabled:""})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(t,{placeholder:"Placeholder Text",label:"Readonly",readonly:""})]),_:1})]),_:1})}const ge=T(be,[["render",Ve]]),Te={};function ve(h,a){return u(),f(C,null,{default:l(()=>[e(s,{cols:"12",md:"6"},{default:l(()=>[e(w,{label:"Outlined",variant:"outlined"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(w,{label:"Filled",variant:"filled"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(w,{label:"Solo",variant:"solo"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(w,{label:"Plain",variant:"plain"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(w,{label:"Underlined",variant:"underlined"})]),_:1})]),_:1})}const Ce=T(Te,[["render",ve]]),we={};function ye(h,a){const t=b;return u(),f(t,{label:"Compact",density:"compact",placeholder:"Placeholder Text"})}const Ae=T(we,[["render",ye]]),Fe={};function Pe(h,a){const t=b;return u(),f(t,{label:"Regular",placeholder:"Placeholder Text"})}const ke=T(Fe,[["render",Pe]]),Re={ts:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
  />
</template>
`},Ie={ts:`<template>
  <AppTextField
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>
`,js:`<template>
  <AppTextField
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>
`},$e={ts:`<script lang="ts" setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`},Me={ts:`<template>
  <AppTextField
    color="success"
    label="First name"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    color="success"
    label="First name"
    placeholder="Placeholder Text"
  />
</template>
`},De={ts:`<template>
  <AppTextField
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
  />
</template>
`},Ue={ts:`<script lang="ts" setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="tabler-circle-x"
    :append-icon="message ? $vuetify.locale.isRtl ? 'tabler-arrow-big-left-lines' : 'tabler-arrow-big-right-lines' : 'tabler-microphone'"
    :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`,js:`<script setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="tabler-circle-x"
    :append-icon="message ? $vuetify.locale.isRtl ? 'tabler-arrow-big-left-lines' : 'tabler-arrow-big-right-lines' : 'tabler-microphone'"
    :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`},Se={ts:`<script setup lang="ts">
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'

  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    label="Message"
    placeholder="Hey!!"
    type="text"
    class="textfield-demo-icon-slot"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="tabler-help"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          color="primary"
          width="3"
          size="24"
          indeterminate
        />

        <VNodeRenderer
          v-else
          class="text-2xl"
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon
          icon="tabler-viewfinder"
          color="#fff"
          size="22"
        />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </AppTextField>
</template>

<style lang="scss" scoped>
// .textfield-demo-icon-slot {
//   :deep(.v-input) {
//     align-content: center;

//     .v-input__prepend,
//     .v-input__append {
//       padding-block-start: 0 !important;
//     }

//     .v-input__prepend {
//       align-items: center;
//     }

//     .v-field__append-inner .v-progress-circular svg {
//       block-size: 1.3em;
//       inline-size: 1.3em;
//     }

//     .v-field__append-inner svg {
//       margin-block-start: 0.1rem;
//     }
//   }
// }
</style>
`,js:`<script setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'
  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    label="Message"
    placeholder="Hey!!"
    type="text"
    class="textfield-demo-icon-slot"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="tabler-help"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          color="primary"
          width="3"
          size="24"
          indeterminate
        />

        <VNodeRenderer
          v-else
          class="text-2xl"
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon
          icon="tabler-viewfinder"
          color="#fff"
          size="22"
        />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </AppTextField>
</template>

<style lang="scss" scoped>
// .textfield-demo-icon-slot {
//   :deep(.v-input) {
//     align-content: center;

//     .v-input__prepend,
//     .v-input__append {
//       padding-block-start: 0 !important;
//     }

//     .v-input__prepend {
//       align-items: center;
//     }

//     .v-field__append-inner .v-progress-circular svg {
//       block-size: 1.3em;
//       inline-size: 1.3em;
//     }

//     .v-field__append-inner svg {
//       margin-block-start: 0.1rem;
//     }
//   }
// }
</style>
`},qe={ts:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        label="Prepend"
        prepend-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append"
        append-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        label="Prepend"
        prepend-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append"
        append-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`},je={ts:`<template>
  <AppTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="tabler-file-search" />
    </template>
  </AppTextField>
</template>
`,js:`<template>
  <AppTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="tabler-file-search" />
    </template>
  </AppTextField>
</template>
`},He={ts:`<script lang="ts" setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye-off' : 'tabler-eye' "
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'tabler-eye-off' : 'tabler-eye' "
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye-off' : 'tabler-eye' "
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'tabler-eye-off' : 'tabler-eye' "
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`},Ne={ts:`<script setup lang="ts">
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>
  </VRow>
</template>
`},ze={ts:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
    single-line
  />
</template>
`,js:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
    single-line
  />
</template>
`},Le={ts:`<template>
  <VRow>
    <VCol>
      <AppTextField
        label="Disabled"
        placeholder="Placeholder Text"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        placeholder="Placeholder Text"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol>
      <AppTextField
        label="Disabled"
        placeholder="Placeholder Text"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        placeholder="Placeholder Text"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`},Be={ts:`<script lang="ts" setup>
const email = ref('')
<\/script>

<template>
  <VForm>
    <AppTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      placeholder="johnedoe@email.com"
      label="E-mail"
    />
  </VForm>
</template>
`,js:`<script setup>
const email = ref('')
<\/script>

<template>
  <VForm>
    <AppTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      placeholder="johnedoe@email.com"
      label="E-mail"
    />
  </VForm>
</template>
`},Ee={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Outlined"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Outlined"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`},We=o("p",null,"Text fields components are used for collecting user provided information.",-1),Ye=o("p",null,[n("The "),o("code",null,"density"),n(" prop decreases the height of the text field based upon levels of density; "),o("code",null,"default"),n(","),o("code",null,"comfortable"),n(", and "),o("code",null,"compact"),n(".")],-1),Oe=o("p",null,[n("Use "),o("code",null,"solo"),n(", "),o("code",null,"filled"),n(", "),o("code",null,"outlined"),n(", "),o("code",null,"plain"),n(" and "),o("code",null,"underlined"),n(" option of "),o("code",null,"variant"),n(" prop to change the look of the textfield. ")],-1),Ge=o("p",null,"Text fields can be disabled or readonly.",-1),Je=o("p",null,[n("Use a "),o("code",null,"counter"),n(" prop to inform a user of the character limit.")],-1),Ke=o("p",null,"When clearable, you can customize the clear icon with clear-icon.",-1),Qe=o("p",null,[n("Use "),o("code",null,"color"),n(" prop to change the input border color.")],-1),Xe=o("p",null,[n("You can add icons to the text field with "),o("code",null,"prepend-icon"),n(", "),o("code",null,"append-icon"),n(" and "),o("code",null,"append-inner-icon"),n(" and "),o("code",null,"prepend-inner-icon"),n(" props.")],-1),Ze=o("p",null,[n("The "),o("code",null,"prefix"),n(" and "),o("code",null,"suffix"),n(" properties allows you to prepend and append inline non-modifiable text next to the text field.")],-1),el=o("p",null,[o("code",null,"single-line"),n(" text fields do not float their label on focus or with data.")],-1),ll=o("p",null,[n("Vuetify includes simple validation through the "),o("code",null,"rules"),n(" prop.")],-1),tl=o("p",null,[o("code",null,"click:prepend"),n(", "),o("code",null,"click:append"),n(", "),o("code",null,"click:append-inner"),n(", and "),o("code",null,"click:clear"),n(" will be emitted when you click on the respective icon")],-1),ol=o("p",null,[n("Text field label can be defined in "),o("code",null,"label"),n(" slot - that will allow to use HTML content.")],-1),nl=o("p",null,[n("Using the HTML input "),o("code",null,"type"),n(" password can be used with an appended icon and callback to control the visibility.")],-1),al=o("p",null,[n("Instead of using "),o("code",null,"prepend"),n("/"),o("code",null,"append"),n("/"),o("code",null,"append-inner"),n(" icons you can use slots to extend input's functionality.")],-1),Ul=v({__name:"textfield",setup(h){return(a,t)=>{const m=ke,r=O,d=Ae,p=Ce,i=ge,x=xe,g=he,y=ue,A=pe,P=re,k=se,R=oe,I=te,$=le,M=Q,D=K;return u(),f(C,{class:"match-height"},{default:l(()=>[e(s,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Basic",code:Re},{default:l(()=>[We,e(m)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Density",code:De},{default:l(()=>[Ye,e(d)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(r,{title:"Variant",code:Ee},{default:l(()=>[Oe,e(p)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"State",code:Le},{default:l(()=>[Ge,e(i)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Counter",code:$e},{default:l(()=>[Je,e(x)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Clearable",code:Ie},{default:l(()=>[Ke,e(g)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Custom Colors",code:Me},{default:l(()=>[Qe,e(y)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Icons",code:qe},{default:l(()=>[Xe,e(A)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Prefixes and suffixes",code:Ne},{default:l(()=>[Ze,e(P)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Single line",code:ze},{default:l(()=>[el,e(k)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Validation",code:Be},{default:l(()=>[ll,e(R)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Icon events",code:Ue},{default:l(()=>[tl,e(I)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Label Slot",code:je},{default:l(()=>[ol,e($)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Password input",code:He},{default:l(()=>[nl,e(M)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(r,{title:"Icon slots",code:Se},{default:l(()=>[al,e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Ul as default};
