<script setup>
import Headers from "./components/Header.vue"
import { ConfigProvider } from "ant-design-vue";
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import {ref} from "vue"

const currentLocale = ref(zhCN)
</script>

<template>
  <ConfigProvider :theme="{
    token: {
      colorPrimary: '#0061C3',
    }
  }" :locale="currentLocale">
    <Headers/>
    <router-view/>
  </ConfigProvider>
</template>

<style>
@font-face {
  font-family: 'MiSans';
  src: url("./fonts/MiSans\ VF.ttf");
}
body {
  margin: 0px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
