<script setup>
import { ref } from "vue";
import Lang from "./Lang.vue";
import Networks from "./Networks.vue";

// Create a reactive state for video loaded status
const isVideoLoaded = ref(false);

// Handle the video load event
const handleVideoLoad = () => {
  isVideoLoaded.value = true;
};
</script>

<template>
  <div
    class="relative flex flex-col justify-between w-full h-screen min-h-screen pb-20 bg-black main max-md:pb-5"
  >
    <video
      class="background-video"
      autoplay
      loop
      muted
      @canplay="handleVideoLoad"
      v-show="isVideoLoaded"
    >
      <source src="@/assets/img/bgVideo.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>

    <div
      class="flex px-25 max-lg:px-5 relative z-[2] min-h-max gap-5 pt-2.5 items-center overflow-x-hidden overflow-y-hidden max-lg:justify-center"
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
    </div>
    <div class="absolute z-[100] md:hidden right-5 top-5">
      <Lang />
    </div>
    <div
      class="flex relative z-[2] justify-between flex-grow px-25 max-lg:px-5 max-md:flex-col max-md:justify-end"
    >
      <div class="flex flex-col justify-end gap-11">
        <p
          class="text-inner-shadow font-semibold text-3xl max-w-[620px] uppercase max-md:max-w-full max-md:text-xl max-md:text-center"
        >
          {{ $t("creative_art_direction") }}
        </p>
        <div class="flex justify-center md:hidden">
          <Networks />
        </div>
        <button
          class="flex max-md:hidden order text-2xl group relative items-center justify-center h-18 w-[370px] text-white"
        >
          <img
            src="@/assets/img/pik.png"
            class="absolute object-cover w-20 h-20 p-2 transform -translate-x-1/2 -translate-y-1/2 rounded-full pik top-1/2 left-1/2"
          />
          <span class="relative z-10 uppercase">{{ $t("order_work") }}</span>
        </button>
      </div>
      <div
        class="flex flex-col justify-between gap-10 max-md:hidden md:h-full max-md:flex-row max-md:justify-center max-md:mt-5"
      >
        <span class=""></span>
        <Networks class="absolute transform -translate-y-1/2 top-1/2" />
        <Lang class="" />
      </div>
    </div>
  </div>
</template>

<style lang="css">
.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: 1;
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
