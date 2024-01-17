import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import { Quill, QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

createApp(App).use(router).use(Antd).component("QuillEditor", QuillEditor).mount('#app')
