<script setup>
import Lang from "./Lang.vue";
import Networks from "./Networks.vue";
</script>

<template>
  <div
    class="flex flex-col justify-between w-full h-screen min-h-screen pb-20 main max-md:pb-5"
  >
    <div
      class="flex gap-5 pt-2.5 items-center overflow-x-hidden overflow-y-hidden max-lg:justify-center "
    >
      <img
        src="@/assets/img/leftarrow.png"
        class="w-[calc(50%-123px)] max-lg:hidden"
      />
      <img src="@/assets/img/logo.png" class="h-20 max-lg:h-15" />
      <img
        src="@/assets/img/arrow.png"
        class="w-[calc(50%-123px)] max-lg:hidden"
      />
      <div class="absolute md:hidden right-5">
        <Lang />
      </div>
    </div>
    <div
      class="flex justify-between flex-grow px-25 max-lg:px-5 max-md:flex-col max-md:justify-end"
    >
      <div class="flex flex-col justify-end gap-11">
        <p
          class="text-inner-shadow font-semibold text-3xl max-w-[620px] uppercase max-md:max-w-full max-md:text-xl max-md:text-center"
        >
          {{ $t("creative_art_direction") }}
        </p>
        <button
          class="flex max-md:hidden text-2xl  group relative items-center justify-center h-18 w-[370px] text-white"
        >
          <img
            src="@/assets/img/btn.png"
            class="absolute top-0 object-cover w-full transition-opacity duration-300 rotate-180 group-hover:opacity-0"
          />
          <img
            src="@/assets/img/btn2.png"
            class="absolute top-0 object-cover w-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
          <span class="relative z-10">{{ $t("order_work") }}</span>
        </button>
      </div>
      <div
        class="flex flex-col justify-between gap-10 md:h-full max-md:flex-row max-md:justify-center max-md:mt-5"
      >
        <span class="max-md:hidden"></span>
        <Networks />
        <Lang class="max-md:hidden" />
      </div>
    </div>
  </div>
</template>

<style lang="css">
.main {
  background: url("@/assets/img/fon.png") center center no-repeat;
  background-size: cover;
}
.text-inner-shadow {
  z-index: 1000;
  position: relative;
  font-weight: bold;
  background: url("@/assets/img/text.png") center center no-repeat;
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.shadow-dark {
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 1);
}

.shadow-dark:hover {
  text-shadow: 0px 0px 4px rgba(237, 68, 81, 1);
}

.ramka {
  background: url("@/assets/img/ramka2.png") center center no-repeat;
  background-size: cover;
}
.tr-3 {
  transition: 30s ease;
}
</style>
