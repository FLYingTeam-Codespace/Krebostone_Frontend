<script setup>
import { Button, ConfigProvider, Dropdown, Menu, MenuItem, message, Modal } from 'ant-design-vue';
import { BarsOutlined, LogoutOutlined, InfoCircleOutlined, GlobalOutlined } from "@ant-design/icons-vue";
import { loginWithToken } from "../js/Requests/Users.js"
import { useRouter } from "vue-router";

const router = useRouter()

function autoLogin() {
  let address = localStorage.getItem("krebostone:serverAddress")
  let token = localStorage.getItem("krebostone:token")
  console.log("address: " + address)
  console.log("token: " + token)
  if (address !== undefined && token !== undefined) {
    loginWithToken(address, token).then((res) => {
      console.log(res)
      message.success("登录成功！")
      router.push("/app")
    }).catch((err) => {
      console.log(err)
      message.error("自动登录失败")
    })
  }
}

function logout() {
  Modal.confirm({
    title: "确认登出？",
    content: "登出后将无法使用部分功能",
    okText: "确认",
    cancelText: "取消",
    onOk: () => {
      localStorage.removeItem("krebostone:token")
      localStorage.removeItem("krebostone:serverAddress")
      router.push("/")
    }
  })
}

autoLogin();
</script>
<template>
  <div class="headerBox">
    <Dropdown>
      <Button type="ghost" style="color: white;">
        <BarsOutlined style="font-size: 20px;"/>
      </Button>
      <template #overlay>
        <Menu>
          <MenuItem>
            <template #icon>
              <GlobalOutlined/>
            </template>
            语言 Languages
          </MenuItem>
          <MenuItem>
            <template #icon>
              <InfoCircleOutlined/>
            </template>
            关于
          </MenuItem>
          <MenuItem @click="logout">
            <template #icon>
              <LogoutOutlined/>
            </template>
            登出
          </MenuItem>
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