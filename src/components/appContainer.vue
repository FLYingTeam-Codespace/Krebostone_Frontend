<script setup>

</script>
<template>
<div class="container">
    <slot></slot>
</div>
</template>
<style>
.container {
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 30px;
    border-radius: 7px;
    background-color: white;
    flex: auto;
    height: 90%;
    overflow-y: auto;
}
</style>
