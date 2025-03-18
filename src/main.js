// import './assets/main.css'
import './styles/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import { lazyPlugin, directivePlugin } from './directives'
import App from './App.vue'
import router from './router'
import { componentPlugin } from '@/components'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
// 注册自定义指令
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
