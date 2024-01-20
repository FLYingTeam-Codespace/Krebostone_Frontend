<script setup>
import {Collapse, CollapsePanel, Empty, Card, List, ListItem, message} from "ant-design-vue"
import {ref} from "vue"
import {getMCServerStatus} from "../../js/Requests/OpenMCAPI"
import {getKrebostoneServerInfo} from "../../js/Requests/Server"

const biContainerActiveKey = ref("basicInfo")
const addressContainerActiveKey = ref("address")

function getMinecraftServerInfo() {
    getKrebostoneServerInfo().then((res) => {
        if (res.data.address !== undefined || res.data.address !== "") {
            getMCServerStatus(res.data.address).then((res) => {
                console.log(res)
                message.success("获取成功！")
            }).catch((err) => {
                console.log(err)
                message.error("获取失败！")
            })
        }
    })

}

getMinecraftServerInfo()
</script>
<template>
<div class="cardsContainer">
    <div class="cardsRow" style="flex: 3;">
        <Collapse v-model:active-key="biContainerActiveKey">
            <CollapsePanel key="basicInfo" header="服务器基本信息">
                <Empty/>
            </CollapsePanel>
            <CollapsePanel key="Description" header="服务器描述">
                <Empty/>
            </CollapsePanel>
        </Collapse>
    </div>
    <div class="cardsRow" style="flex: 2;">
        <Collapse v-model:active-key="addressContainerActiveKey">
            <CollapsePanel key="address" header="服务器地址&加入服务器">
                <Card>
                    <List>
                        <ListItem>

                        </ListItem>
                    </List>
                </Card>
            </CollapsePanel>
        </Collapse>
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
</style>