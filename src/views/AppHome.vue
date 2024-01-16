<script setup>
import appShelf from '@/components/appShelf.vue';
import appContainer from '@/components/appContainer.vue';
</script>
<template>
<div class="main-container">
    <appShelf/>
    <appContainer>
        <RouterView>
            
        </RouterView>
    </appContainer>
</div>
</template>
<style>
.main-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 91vh;
    width: 100%;
    background-color: #0062c33f;
    padding: 10px;
}
</style>