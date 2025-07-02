import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import VueViewer from 'v-viewer';

createApp(App).use(VueViewer).use(createRouter({
  history: createWebHistory(),
  routes: [],
})).mount('#app')
