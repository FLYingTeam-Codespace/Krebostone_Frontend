<script setup>
import {Button, TypographyTitle, Input, message, Modal} from "ant-design-vue";
import ServerList from "../ServerList.vue";
import {getServerStatus, getKrebostoneServerInfo} from "../../js/Requests/Server.js"
import {login, getUserInfo} from "../../js/Requests/Users.js"
import {removeSavedServer, createServerInstance} from "../../js/savedServerManager.js"
import {cacheToken} from "../../js/users.js"
import {ref} from "vue"
import { useRouter } from "vue-router";

const router = useRouter()

const currentServerName = ref("")
const currentServerAddress = ref("")
const currentServerPort = ref("")
const isSelectingServer = ref(true);
const isLoggingIn = ref(false);
const userInfo = ref({
    "username": "",
    "password": ""
})

function switchToLogin(name, address, port) {
    isSelectingServer.value = false
    currentServerName.value = name
    currentServerAddress.value = address
    currentServerPort.value = port
}

function switchToSelect() {
    isSelectingServer.value = true
    userInfo.value = {
        "username": "",
        "password": ""
    }
}

function handleLogin() {
    isLoggingIn.value = true
    getServerStatus(currentServerAddress.value, currentServerPort.value).then((res) => {
        console.log(res)
        login(userInfo.value.username, userInfo.value.password).then((res) => {
            console.log(res)
            message.success("登录成功！")
            cacheToken(res.data.data.token)
            isLoggingIn.value = false
            // saveUserID
            getUserInfo().then((res) => {
                console.log(res)
                localStorage.setItem("krebostone:userID", res.data.id)
                localStorage.setItem("krebostone:isAdmin", res.data.admin)
            })
            // check reset password
            if (res.data.data.needReset === true) {
                Modal.info({
                    title: "需要重置密码",
                    content: "貌似您当前的密码是初始密码，为了您的账户安全，请重置密码。"
                })
            }
            router.push("/app/dashboard")
            
        }).catch((err) => {
            console.log(err)
            message.error("登录失败！")
            isLoggingIn.value = false
        })
    }).catch((err) => {
        console.log(err)
        message.error("无法连接到服务器！确保服务器地址与端口号正确")
        isLoggingIn.value = false
    })

}

function handleDeleteServer() {
    Modal.confirm({
        title: "确认删除服务器？",
        content: "删除后将无法使用该服务器",
        okText: "确认",
        cancelText: "取消",
        onOk: () => {
            removeSavedServer(createServerInstance(currentServerName.value, currentServerAddress.value, currentServerPort.value))
            router.go(0)
        }
    })
}
</script>
<template>
    <div class="loginDialogBox">
        <div class="wrap-box" v-if="isSelectingServer === true">
            <img src="../../assets/Logo 2.svg" height="48px">
            <TypographyTitle :level="2">登录到Krebostone服务器</TypographyTitle>
            <div>从下面的服务器列表中选择一个服务器以登录，若不在列表中，请点击添加服务器。</div>
            <ServerList @onSelectServer="switchToLogin"/>
        </div>
        <div class="wrap-box" v-else>
            <img src="../../assets/Logo 2.svg" height="48px">
            <TypographyTitle :level="2">登录到{{currentServerName}}</TypographyTitle>
            <div>输入用户名与密码以继续</div>
            <div class="login-form-box">
                <div class="input-description-container">
                    <div>用户名</div>
                </div>
                <Input v-model:value="userInfo.username" placeholder="请输入用户名"/>
                <div class="input-description-container">
                    <div>密码</div>
                </div>
                <Input.Password v-model:value="userInfo.password" placeholder="请输入密码"/>
                <Button type="primary" style="margin-top: 10px;" @click="handleLogin" :loading="isLoggingIn">登录</Button>
                <Button type="link" style="margin-top: 10px;" @click="switchToSelect">返回服务器列表</Button>
                <Button type="link" style="margin-top: 10px;" danger @click="handleDeleteServer">删除服务器</Button>
            </div>
        </div>
    </div>
</template>
<style>
.loginDialogBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 45%;
    height: 55%;
    border-radius: 10px;
    background-color: #0062c33f;
    padding:20px;
}
.wrap-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
.login-form-box {
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 50%;
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