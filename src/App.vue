<script setup>
import OurWork from "@/components/OurWork.vue";
import Price from "@/components/Price.vue";
import Main from "@/components/Main.vue";
import Pack from "./components/Pack.vue";
import Connect from "./components/Connect.vue";
</script>
<template>
  <div class="w-screen border-none">
    <Main />
    <div class="bg-dark">
      <OurWork />
      <Price />
      <Pack />
      <Connect />
    </div>
  </div>
</template>
