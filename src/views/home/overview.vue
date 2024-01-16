<script setup>
import {Card, TypographyTitle, CardMeta, Button } from "ant-design-vue"
import {ref} from "vue"
import {HomeOutlined, ExpandOutlined, DeleteOutlined, PlusCircleOutlined, ReloadOutlined } from "@ant-design/icons-vue"
</script>
<template>
<div>
    <TypographyTitle :level="2"><HomeOutlined /> 首页</TypographyTitle>
</div>
<div class="cardsContainer">
    <div class="cardsRow" style="flex: 2;">
        <Card title="服务器基本信息"></Card>
        <Card title="资源中心" style="margin-top: 5px"></Card>
    </div>
    <div class="cardsRow" style="flex: 3">
        <Card title="公告栏">
            <div class="row-view">
                <Button type="primary"><PlusCircleOutlined />添加公告</Button>
            </div>
            <Card hoverable>
                <CardMeta title="这是一条公告" description="这是一条公告的描述">
                    <template #avatar>
                        
                    </template>
                </CardMeta>
                <template #actions>
                    <ExpandOutlined key="expand" />
                    <DeleteOutlined key="delete" />
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
</style>