<script setup>
import appShelfIcon from './appShelfIcon.vue';
import {CloudServerOutlined, DesktopOutlined, UserOutlined} from "@ant-design/icons-vue";
</script>
<template>
<div class="app-shelf-container">
    <appShelfIcon>
        <template #icon>
            <DesktopOutlined style="font-size: 30px;"/>
        </template>
        <template #title>
            总览
        </template>
    </appShelfIcon>
    <appShelfIcon>
        <template #icon>
            <CloudServerOutlined style="font-size: 30px;"/>
        </template>
        <template #title>
            服务器
        </template>
    </appShelfIcon>
    <appShelfIcon>
        <template #icon>
            <UserOutlined style="font-size: 30px;"/>
        </template>
        <template #title>
            用户
        </template>
    </appShelfIcon>
</div>
</template>
<style>
.app-shelf-container {
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    margin: 7px;
    padding: 7px;
    font-size: smaller;
}
</style>