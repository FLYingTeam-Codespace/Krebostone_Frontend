<script setup>

</script>
<template>
    <div class="app-btn-container">
        <div class="icon">
            <slot name="icon"></slot>
        </div>
        <div class="title">
            <slot name="title"></slot>
        </div>
    </div>
</template>
<style>
.app-btn-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: fit-content;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.1s;
    color: black;
    text-decoration: none;
}
.app-btn-container:hover {
    background-color: #0062c33f;
}
.title {
    text-decoration: none;
}
.router-link-active {
    text-decoration: none;
}
.router-link-inactive {
    text-decoration: none;
}
</style>