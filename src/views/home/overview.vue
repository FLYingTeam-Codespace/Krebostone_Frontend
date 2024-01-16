<script setup>
import {Card, TypographyTitle, CardMeta, Button, Avatar, List, ListItem, Drawer, Collapse, CollapsePanel, Empty } from "ant-design-vue"
import {ref} from "vue"
import {HomeOutlined, ExpandOutlined, DeleteOutlined, PlusCircleOutlined, ReloadOutlined, LikeOutlined, ApartmentOutlined, GlobalOutlined, HddOutlined, AppstoreAddOutlined } from "@ant-design/icons-vue"

const showBulletinDetails = ref(false)

function triggerBulletinDetails() {
    showBulletinDetails.value = !showBulletinDetails.value
}
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
                <Button type="primary"><PlusCircleOutlined />添加公告</Button>
            </div>
            <Card hoverable style="margin-bottom: 10px;" v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]">
                <CardMeta title="这是一条公告" description="这是一条公告的描述">
                    <template #avatar>
                        <Avatar/>
                    </template>
                </CardMeta>
                <template #actions>
                    <ExpandOutlined key="expand" @click="triggerBulletinDetails"/>
                    <DeleteOutlined key="delete" />
                    <LikeOutlined key="like" />
                </template>
            </Card>
            <div class="extended-row-view">
                <Button>
                    <ReloadOutlined />
                    加载更多
                </Button>
            </div>
        </Card>
    </div>
    <Drawer title="公告详情" size="large" :open="showBulletinDetails" @close="triggerBulletinDetails">
        <Card hoverable style="margin-bottom: 10px;">
            <CardMeta title="这是一条公告" description="这是一条公告的描述">
                <template #avatar>
                    <Avatar/>
                </template>
            </CardMeta>
            <template #actions>
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
</style>