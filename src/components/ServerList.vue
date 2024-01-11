<script setup>
import {addSavedServer, initializeSavedServerManager, getSavedServers, createServerInstance, removeSavedServer} from "../js/savedServerManager.js"
import {styles} from "../js/globalStyles.js"
import {CloudServerOutlined, RightOutlined, PlusCircleOutlined, QuestionCircleOutlined} from "@ant-design/icons-vue"
import {ref} from "vue"
import { Button, Modal, Input, message } from "ant-design-vue"
const savedServers = ref([])
const showAddServerModal = ref(false)
const addServerInfo = ref({
    "name": "",
    "address": "",
    "port": ""
})

function updateSavedServers() {
    savedServers.value = getSavedServers()
}

function addServer() {
    // check form data
    if (addServerInfo.value.name == "") {
        message.error("服务器名称不能为空！")
        return
    }
    if (addServerInfo.value.address == "") {
        message.error("服务器地址不能为空！")
        return
    }
    if (addServerInfo.value.port == "") {
        message.error("服务器端口号不能为空！")
        return
    }
    addSavedServer(addServerInfo.value.name, addServerInfo.value.address, addServerInfo.value.port)
    updateSavedServers()
    addServerInfo.value = {
        "name": "",
        "address": "",
        "port": ""
    }
    showAddServerModal.value = false
    message.success("添加成功！")
}
initializeSavedServerManager()
updateSavedServers()
</script>
<template>
    <div class="list-container">
        <div class="list-item-container" v-for="i in savedServers" @click="$emit('onSelectServer', i.name, i.address, i.port)">
            <div class="row-view">
                <CloudServerOutlined style="font-size: 30px; margin-right: 10px; margin-left: 10px;"/>
                <div>
                    <div class="list-item-title">{{i.name}}</div>
                    <div class="list-item-description">{{ i.address + ":" + i.port }}</div>
                </div>
            </div>
            <RightOutlined style="font-size: 20px; margin-right: 10px;"/>
        </div>
    </div>
    <div class="row-view">
        <Button type="link" @click="showAddServerModal = true"><PlusCircleOutlined/>添加新的Krebostone服务器</Button>
        <Button type="link"><QuestionCircleOutlined/>什么是Krebostone服务器？</Button>
    </div>
    <Modal v-model:open="showAddServerModal" title="添加新的服务器" width="50%" height="50%">
        <div>添加一个新的服务器，请填写以下所有信息</div>
        <div class="input-description-container">
            <CloudServerOutlined style="margin-right: 10px;"/>
            <div>服务器名称</div>
        </div>
        <Input v-model:value="addServerInfo.name" placeholder="Krebostone服务器（名称随意）"/>
        <div class="input-description-container">
            <CloudServerOutlined style="margin-right: 10px;"/>
            <div>服务器（管理端）地址</div>
        </div>
        <Input v-model:value="addServerInfo.address" placeholder="https://www.krebostone.org"/>
        <div class="input-description-container">
            <CloudServerOutlined style="margin-right: 10px;"/>
            <div>服务器（管理端）端口号</div>
        </div>
        <Input v-model:value="addServerInfo.port" placeholder="8080"/>
        <template #footer>
            <Button type="primary" @click="addServer">添加</Button>
            <Button @click="showAddServerModal = false">取消</Button>
        </template>
    </Modal>
</template>
<style>
.row-view {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.list-container {
    width: 75%;
    height: 50%;
    margin: 7px;
    padding: 5px;
    overflow: hidden;
}
.list-item-container {
    width: 95%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0);
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    overflow-x: hidden;
    overflow-y: scroll;
}
.list-item-container::-webkit-scrollbar {
    display: none;
}
.list-item-container:hover {
    background-color: rgba(0, 0, 0, 0.1);
}
.list-item-title {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 3px;
}
.list-item-description {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
}
.input-description-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10px;
    font-weight: bold;
    margin-bottom: 5px;
}
</style>