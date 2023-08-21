import { createApp } from 'vue'
import App from './App.vue'
import VButton from './components/base/VButton.vue'
import VInput from './components/base/VInput.vue'
import VDialog from './components/base/VDialog.vue'
import VToastMessage from './components/base/VToastMessage.vue'
import VLoading from './components/base/VLoading.vue'
import VCombobox from './components/base/VCombobox.vue'
import format from './helper/format.js'
import router from './router/router'
import MISAEnum from './helper/enum.js'
import axios from 'axios'
import emitter from 'tiny-emitter/instance'
import commonJS from './helper/common.js'
import resource from './helper/resource'

const app = createApp(App);
app.component("m-button", VButton);
app.component("m-input", VInput);
app.component("m-dialog",VDialog)
app.component('m-toast',VToastMessage)
app.component('m-loading',VLoading)
app.component('m-combobox',VCombobox)
app.config.globalProperties.$format = format;
app.config.globalProperties.$_axios = axios;
app.config.globalProperties.$_emitter = emitter;
app.config.globalProperties.$_commonJS = commonJS;
app.config.globalProperties.$_MISAEnum = MISAEnum;
app.config.globalProperties.$_resource = resource;



app.use(router);
app.mount("#app");

