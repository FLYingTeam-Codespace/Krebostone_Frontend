<script setup>
import {Card, TypographyTitle, CardMeta, Button, Avatar, List, ListItem, Drawer, Collapse, CollapsePanel, Empty, Input, message, Modal } from "ant-design-vue"
import {ref} from "vue"
import {HomeOutlined, ExpandOutlined, DeleteOutlined, PlusCircleOutlined, ReloadOutlined, LikeOutlined, ApartmentOutlined, GlobalOutlined, HddOutlined, AppstoreAddOutlined } from "@ant-design/icons-vue"
import {getLatestBulletin, addBulletin, getAllBulletin, removeBulletin} from "../../js/Requests/Bulletin"

const showBulletinDetails = ref(false)
const showAddBulletinDrawer = ref(false)
const usingLoadAllButton = ref(true)
const selectedBulletin = ref({})
const bulletinList = ref([])
const newBulletinInfo = ref({
    title: "",
    content: ""

})

function triggerBulletinDetails(selectedID) {
    for (let i = 0; i < bulletinList.value.length; i++) {
        if (bulletinList.value[i].id === selectedID) {
            selectedBulletin.value = bulletinList.value[i]
            break
        }
    }
    showBulletinDetails.value = !showBulletinDetails.value
}

function triggerAddBulletinDrawer() {
    showAddBulletinDrawer.value = !showAddBulletinDrawer.value
}

function getInitBulletin() {
    getLatestBulletin().then((res) => {
        console.log(res.data)
        bulletinList.value = [res.data]
    })
}

function getAll() {
    getAllBulletin().then((res) => {
        console.log(res.data)
        for (let i = res.data.length - 2; i >= 0; i--) {
            bulletinList.value.push(res.data[i])
        }
        usingLoadAllButton.value = false
    })
}

function sendNewBulletin() {
    addBulletin(newBulletinInfo.value.title, newBulletinInfo.value.content).then((res) => {
        if (res.statusCode !== 2000) {
            console.log(res)
            message.error("发布失败！")
            return
        }
        showAddBulletinDrawer.value = false
        newBulletinInfo.value = {
            title: "",
            content: ""
        }
        getInitBulletin()
        message.success("发布成功！")
    }).catch((err) => {
        console.log(err)
        message.error("发布失败！")
    })
}

function handleRemoveBulletin(userID, bID) {
    if (userID !== localStorage.getItem("krebostone:userID") && localStorage.getItem("krebostone:isAdmin") !== true) {
        message.error("您无权删除该公告！")
        return
    }
    Modal.confirm({
        title: "确认删除该公告？",
        content: "删除后将无法恢复",
        onOk() {
            removeBulletin(bID).then((res) => {
                if (res.statusCode !== 2000) {
                    console.log(res)
                    message.error("删除失败！")
                    return
                }
                message.success("删除成功！")
                getInitBulletin()
            }).catch((err) => {
                console.log(err)
                message.error("删除失败！")
            })
        }
    
    })
}

getInitBulletin()
</script>
<template>
<div>
    <TypographyTitle :level="2"><HomeOutlined /> 首页</TypographyTitle>
</div>
<div class="cardsContainer">
    <div class="cardsRow" style="flex: 2;">
        <Card title="服务器基本信息">
            <List>
                <ListItem>
                    <ApartmentOutlined />
                    服务器名称: KreboStone
                </ListItem>
                <ListItem>
                    <GlobalOutlined />
                    服务器地址: KreboStone
                </ListItem>
                <ListItem>
                    <HddOutlined />
                    服务器核心: KreboStone
                </ListItem>
                <ListItem>
                    <AppstoreAddOutlined />
                    已装载的Mod（如果可用）: KreboStone
                </ListItem>
            </List>
        </Card>
        <Card title="资源中心" style="margin-top: 5px">
            <Empty/>
        </Card>
    </div>
    <div class="cardsRow" style="flex: 3">
        <Card title="公告栏" class="scrollCard">
            <div class="row-view">
                <Button type="primary" @click="triggerAddBulletinDrawer"><PlusCircleOutlined />添加公告</Button>
            </div>
            <Card hoverable style="margin-bottom: 10px;" v-for="i in bulletinList">
                <CardMeta :title="i.title" :description="i.date">
                    <template #avatar>
                        <Avatar/>
                    </template>
                </CardMeta>
                <div style="margin-top: 20px; font-size: 15px;" v-html="i.content">
                    
                </div>
                <template #actions>
                    <ExpandOutlined key="expand" @click="triggerBulletinDetails(i.id)"/>
                    <DeleteOutlined key="delete" @click="handleRemoveBulletin(i.user, i.id)"/>
                    <LikeOutlined key="like" />
                </template>
            </Card>
            <div class="extended-row-view">
                <Button @click="getAll" :disabled="!usingLoadAllButton">
                    <ReloadOutlined />
                    加载更多
                </Button>
            </div>
        </Card>
    </div>
    <Drawer title="公告详情" size="large" :open="showBulletinDetails" @close="triggerBulletinDetails">
        <Card hoverable style="margin-bottom: 10px;">
            <CardMeta :title="selectedBulletin.title" :description="selectedBulletin.date">
                <template #avatar>
                    <Avatar/>
                </template>
            </CardMeta>
            <div style="margin-top: 20px; font-size: 15px;" v-html="selectedBulletin.content">
            
            </div>
            <template #actions>
                <ExpandOutlined key="expand" @click="triggerBulletinDetails"/>
                <DeleteOutlined key="delete" />
                <LikeOutlined key="like" />
            </template>
        </Card>
        <Collapse>
            <CollapsePanel header="评论" key="1">
                <Empty/>
            </CollapsePanel>
        </Collapse>
    </Drawer>
    <Drawer title="添加公告" size="large" :open="showAddBulletinDrawer" @close="triggerAddBulletinDrawer">
        <div class="columnView">
            <div class="input-description-container">
                <div>公告标题</div>
            </div>
            <Input v-model:value="newBulletinInfo.title" placeholder="请输入公告标题" style="margin-bottom: 10px;"/>
            <div class="input-description-container">
                <div>正文内容</div>
            </div>
            <QuillEditor contentType="html" v-model:content="newBulletinInfo.content" theme="snow" style="height: 300px;"/>
            <div class="rowView">
                <Button type="primary" style="margin-top: 10px; margin-right: 10px;" @click="sendNewBulletin">发布公告</Button>
                <Button style="margin-top: 10px;">取消</Button>
            </div>
        </div>
    </Drawer>
</div>
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
.row-view {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
}
.column-view {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

}
.extended-row-view {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    width: 100%;
    height: fit-content;
    justify-content: center;
    align-items: center;
}
.scrollCard {
    height: 100%; 
    overflow-y: scroll;
}
.scrollCard::-webkit-scrollbar {
    display: none;
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