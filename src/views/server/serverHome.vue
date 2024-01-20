<script setup>
import {TypographyTitle, Tabs, TabPane} from "ant-design-vue"
import {HomeOutlined, CloudServerOutlined} from "@ant-design/icons-vue"
import basicOperationsView from "./basicOperationsView.vue";
</script>
<template>
    <div>
        <TypographyTitle :level="2"><CloudServerOutlined /> 服务器</TypographyTitle>
    </div>
    <Tabs>
        <TabPane key="overview" tab="基本信息与操作">
            <basicOperationsView/>
        </TabPane>
        <TabPane key="console" tab="控制台">
            This is the console for the server
        </TabPane>
        <TabPane key="files" tab="文件管理">
            This is the file manager for the server
        </TabPane>
    </Tabs>
</template>
<style>
.cardsContainer {
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 10px;
    padding: 10px;
    flex: auto;
}
.cardsContainer::-webkit-scrollbar {
    display: none;
}
.cardsRow {
    display: flex;
    flex-direction: column;
    margin: 10px;
    overflow-y: auto;
}
.cardsRow::-webkit-scrollbar {
    display: none;
}
</style>