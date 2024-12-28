<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const changeLanguage = (lang) => {
  locale.value = lang;
  toggleShow();
};

const show = ref(false);
const containerRef = ref(null);

const toggleShow = () => {
  show.value = !show.value;
};

const handleClickOutside = (event) => {
  if (containerRef.value && !containerRef.value.contains(event.target)) {
    show.value = false;
  }
};

const handleScroll = () => {
  show.value = false; // Hide the dropdown when scrolling
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("scroll", handleScroll); // Listen for scroll events
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("scroll", handleScroll); // Remove scroll event listener
});
</script>

<template>
  <div
    class="flex flex-col justify-end text-xl md:relative max-md:text-base"
    ref="containerRef"
  >
    <div
      class="absolute flex gap-2 md:-left-[calc(200%+10px)] max-md:flex-col max-md:top-14 max-md:right-0"
      v-if="show"
    >
      <div
        @click="changeLanguage('en')"
        class="relative w-[74px] h-[74px] max-md:w-12.5 max-md:h-12.5 hover:cursor-pointer uppercase"
      >
        <img src="@/assets/img/ramka2.png" class="w-[74px]" />
        <span
          class="absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        >
          <span class="text-inner-shadow">En</span>
        </span>
      </div>
      <div
        @click="changeLanguage('ru')"
        class="relative w-[74px] h-[74px] max-md:w-12.5 max-md:h-12.5 hover:cursor-pointer uppercase"
      >
        <img src="@/assets/img/ramka2.png" class="w-[74px] max-md:w-12.5" />
        <span
          class="absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        >
          <span class="text-inner-shadow">Ru</span>
        </span>
      </div>
    </div>
    <div
      class="relative w-[74px] h-[74px] max-md:w-12.5 max-md:h-12.5 hover:cursor-pointer uppercase"
      @click="toggleShow"
    >
      <img src="@/assets/img/ramka.png" class="w-[74px] max-md:w-12.5" />
      <span
        class="absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      >
        <span class="text-inner-shadow">{{ locale }}</span>
      </span>
    </div>
  </div>
</template>
