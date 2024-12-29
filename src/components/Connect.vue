<script setup>
import Networks from "./Networks.vue";
</script>

<template>
  <div class="px-25 max-lg:px-5">
    <div
      class="flex gap-5 pt-2.5 items-center overflow-x-hidden overflow-y-hidden max-lg:justify-center max-lg:mt-5"
    >
      <img
        src="@/assets/img/leftarrow.png"
        class="w-[calc(50%-220px)] max-lg:hidden"
      />
      <div
        class="flex justify-center flex-grow min-h-full pt-3 text-3xl font-semibold uppercase max-lg:text-2xl text-inner-shadow"
      >
        {{ $t("LetsWorkTogether") }}
      </div>
      <img
        src="@/assets/img/arrow.png"
        class="w-[calc(50%-220px)] max-lg:hidden"
      />
    </div>
    <div class="mt-10 col">
      <div class="flex justify-center">
        <Networks class="" />
      </div>
      <div class="pt-12.5 relative max-lg:pt-5">
        <img src="@/assets/img/el.png" class="absolute bottom-0 w-full" />
        <span
          class="flex justify-center pb-10 text-xl text-center max-lg:pb-6 max-sm:text-sm text-white/30"
          >MEV STUDIO - 2024</span
        >
      </div>
    </div>
  </div>
</template>
