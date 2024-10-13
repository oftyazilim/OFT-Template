import { createApp } from 'vue'
import App from '@/App.vue'
import { registerPlugins } from '@core/utils/plugins'
import { FocusTrap } from 'focus-trap-vue'

// Styles
import '@core-scss/template/index.scss'
import '@styles/styles.scss'
import { config } from 'process';
// import 'devextreme/dist/css/dx.dark-oft.css';

// Create vue app
const app = createApp(App)

// Register plugins
registerPlugins(app)

// Mount vue app
app.mount('#app')
