<script setup>
import { Button, ConfigProvider, Dropdown, Menu, MenuItem } from 'ant-design-vue';
import { BarsOutlined } from "@ant-design/icons-vue";
</script>
<template>
  <div class="headerBox">
    <Dropdown>
      <Button type="ghost" style="color: white;">
        <BarsOutlined style="font-size: 20px;"/>
      </Button>
      <template #overlay>
        <Menu>
          <Menu-item>语言 Languages</Menu-item>
          <Menu-item>关于</Menu-item>
        </Menu>
      </template>
    </Dropdown>
    <img src="../assets/Logo.svg" height="48px">
  </div>
</template>
<style>
.headerBox {
  width: 99%;
  height: fit-content;
  padding: 10px;
  color: white;
  background-color: rgb(0, 97, 195);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>