<script setup>
import LoginDialog from "../components/Login/LoginDialog.vue"
</script>
<template>
  <div class="spacingBox">
    <LoginDialog/>
  </div>
  
</template>
<style>
  .spacingBox {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>