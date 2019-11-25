import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'

import '@/assets/icons/iconfont.css'
import 'iview/dist/styles/iview.css'
import './index.less'

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})

/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
