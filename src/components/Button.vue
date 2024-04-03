<script setup>
import router from "@/routers/router_index.js";

const Auth = () => {
  const token = "123"
  localStorage.setItem('token', token)
  router.push({ name: 'admin' })
}
</script>

<template>
  <button @click="Auth" class="btn btn-outline-primary col-12 col-md-6">Войти</button>
</template>

<style scoped>

</style>