<script setup>
import Works from "./Works.vue";
</script>
<template>
  <div class="bg-dark pt-50">
    <div
      class="flex gap-5 pt-2.5 items-center overflow-x-hidden overflow-y-hidden max-lg:justify-center max-lg:mt-5"
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
    <div class="px-25 max-lg:px-5">
      <Works />
      <div
        class="grid items-center grid-cols-3 gap-10 py-10 max-lg:grid-cols-1"
      >
        <img src="@/assets/img/card.png" class="col-span-2 max-lg:col-span-1" />
        <div class="flex flex-col items-center text-white/50 gap-7">
          <img src="@/assets/img/logo.png" class="h-24" />
          <p class="2xl:text-2xl xl:text-xl max-xl:text-base ">
            Welcome to a world where creativity and teztechnology come together
            to create unique game worlds! We are a team of experienced designers
            who turn ideas into exciting, living universes. Our services include
            conceptual art projects, character creation, character design,
            design
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="" scoped></style>
