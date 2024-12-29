<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import images
import S1 from "@/assets/img/s1.png";
import S3 from "@/assets/img/s3.png";
import S4 from "@/assets/img/s4.png";
import S6 from "@/assets/img/s6.png";

// Correct slides array structure
const slides = [
  [S1, S1, S3, S4, S4, S6],
  [S1, S1, S3, S4, S4, S6],
  [S1, S1, S3, S4, S4, S6],
  [S1, S1, S3, S4, S4, S6],
];

// Reactive state for navigation button disable
const isPrevDisabled = ref(true);
const isNextDisabled = ref(false);

// Swiper instance to control state
let swiperInstance = null;

const onSwiperInit = (swiper) => {
  swiperInstance = swiper;
  updateNavigationState();
};

// Update navigation button state based on Swiper state
const updateNavigationState = () => {
  if (swiperInstance) {
    isPrevDisabled.value = swiperInstance.isBeginning;
    isNextDisabled.value = swiperInstance.isEnd;
  }
};
</script>

<template>
  <div class="relative pb-10 mt-18">
    <button
      class="absolute left-0 z-10 p-3 transform -translate-y-1/2 bg-transparent max-sm:hidden hover:cursor-pointer prev-button top-1/2 focus:outline-none"
      :class="{ 'opacity-50 cursor-not-allowed': isPrevDisabled }"
      :disabled="isPrevDisabled"
    >
      <img src="@/assets/img/nav.png" class="rotate-180 w-7" />
    </button>
    <button
      class="absolute right-0 z-10 transform -translate-y-1/2 bg-transparent max-sm:hidden hover:cursor-pointer next-button top-1/2 focus:outline-none"
      :class="{ 'opacity-50 cursor-not-allowed': isNextDisabled }"
      :disabled="isNextDisabled"
    >
      <img src="@/assets/img/nav.png" class="w-7" />
    </button>
    <div class="px-20 max-md:px-10">
      <Swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :navigation="{
          prevEl: '.prev-button',
          nextEl: '.next-button',
        }"
        :pagination="{ clickable: true }"
        :spaceBetween="20"
        :slidesPerView="1"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }"
        @swiper="onSwiperInit"
        @slideChange="updateNavigationState"
      >
        <SwiperSlide v-for="(slide, i) in slides" :key="i" class="">
          <div
            class="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1"
          >
            <img v-for="(item, j) in slide" :key="j" :src="item" class="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.opacity-50 {
  opacity: 0.5;
}

.cursor-not-allowed {
  cursor: not-allowed;
}
.swiper-wrapper {
  padding-bottom: 60px;
}
.swiper-pagination-bullet {
  width: 18px;
  height: 18px;
  border: 1px solid rgba(85, 85, 84);
  transition: 0.3s ease;
}
.swiper-pagination-bullet-active {
  border: 1px solid #b60101;
  background: transparent !important;
  position: relative;
}
.swiper-pagination-bullet-active::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid #b60101;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: rgba(182, 1, 1, 0.5);

  border-radius: 50%;
  opacity: 0.8;
}
</style>
