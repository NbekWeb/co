<script setup>
import Works from "./Works.vue";
</script>
<template>
  <div class="pt-32 max-lg:pt-15">
    <div
      class="flex  px-25 max-lg:px-5   gap-5 pt-2.5 items-center overflow-x-hidden overflow-y-hidden max-lg:justify-center max-lg:mt-5"
    >
      <img
        src="@/assets/img/leftarrow.png"
        class="w-[calc(50%-180px)] max-lg:hidden"
      />
      <div
        class="flex justify-center flex-grow min-h-full pt-3 text-4xl font-semibold text-inner-shadow"
      >
        {{ $t("our_work") }}
      </div>

      <img
        src="@/assets/img/arrow.png"
        class="w-[calc(50%-180px)] max-lg:hidden"
      />
    </div>
    <div class=" px-25 max-lg:px-5">
      <Works />
      <div
        class="grid items-center grid-cols-3 gap-10 py-10 max-lg:grid-cols-1 max-lg:gap-0"
      >
        <div class="relative col-span-2 p-10 max-lg:p-4">
          <img
            src="@/assets/img/r1.png"
            class="w-[280px] absolute top-0 right-0 max-lg:w-[180px]"
          />
          <img
            src="@/assets/img/r2.png"
            class="w-[280px] absolute bottom-0 left-0 max-lg:w-[180px]"
          />

          <video
            src="@/assets/img/gi.mp4"
            class="object-cover w-full h-full max-lg:col-span-1"
            autoplay
            loop
            muted
          ></video>
        </div>
        <div
          class="relative flex flex-col items-center w-full h-full text-white/50 gap-7"
        >
          <img
            src="@/assets/img/lbg.png"
            class="opacity-[8%] h-full absolute top-1/2 transform -translate-x-1/2 left-1/2 -translate-y-1/2"
          />
          <img src="@/assets/img/logo2.png" class="h-24 relative z-[10]" />
          <p
            class="2xl:text-2xl xl:text-base relative z-[10] "
            v-html="$t('text_1')"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="" scoped></style>
