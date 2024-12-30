<script setup>
import tg from "./icons/tg.vue";
import be from "./icons/be.vue";
import ve from "./icons/ve.vue";
</script>

<template>
  <div class="flex flex-col items-center gap-4 max-md:flex-row max-md:gap-1.5">
    <a
      class="flex w-[74px] h-[74px] items-center group justify-center icon group p-2 "
    >
      <tg class="hidden mt-1 mr-2 text-2xl group-hover:flex" />
      <img
        src="@/assets/img/tg.png"
        class="w-full mt-1 mr-2 group-hover:hidden"
      />
    </a>
    <a
      class="flex w-[74px] h-[74px] items-center justify-center icon group p-2"
    >
      <be class="hidden text-2xl group-hover:flex" />
      <img src="@/assets/img/dis.png" class="w-full group-hover:hidden" />
    </a>
    <a
      class="flex w-[74px] h-[74px] items-center justify-center icon group p-2"
    >
      <ve class="hidden text-2xl group-hover:flex" />
      <img src="@/assets/img/ve.png" class="w-full group-hover:hidden" />
    </a>
  </div>
</template>
<style></style>
