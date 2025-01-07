<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const changeLanguage = () => {
  locale.value = locale.value == "en" ? "ru" : "en";
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
    class="flex flex-col justify-end text-lg md:relative max-md:text-sm"
    ref="containerRef"
  >
    <transition name="dropdown" mode="out-in">
      <div
        v-if="show"
        class="absolute flex gap-2 md:-left-[calc(100%+10px)] max-md:flex-col max-md:top-14 max-md:right-0"
      >
        <div
          @click="changeLanguage()"
          class="relative w-[74px]  z-[10] group h-[74px] max-md:w-12.5 max-md:h-12.5 hover:cursor-pointer uppercase"
        >
          <img
            src="@/assets/img/ramka.png"
            class="w-[74px]  max-md:w-12.5 group-hover:rotate-0 -rotate-90 transition-transform duration-300 ease-in-out"
          />
          <span
            class="absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          >
            <span class="text-inner-shadow pt-0.5 pl-0.5">
              {{ locale == "en" ? "ru" : "en" }}
            </span>
          </span>
        </div>
      </div>
    </transition>
    <div
      class="relative w-[74px]   h-[74px] max-md:w-12.5 max-md:h-12.5 group hover:cursor-pointer uppercase"
      @click="toggleShow"
    >
      <img
        src="@/assets/img/ramka.png"
        :class="`w-[74px]  absolute -rotate-90 inset-0 group-hover:hidden max-md:w-12.5 transition-transform duration-500 ease-in-out ${
          show ? 'animation-step-ramka hidden' : ''
        }`"
      />
      <img
        src="@/assets/img/ramka2.png"
        :class="`w-[74px] scale-[150%] ml-[2px] inset-0 group-hover:!flex max-md:w-12.5 transition-transform duration-500 ease-in-out ${
          show ? 'animation-step-ramka2' : 'hidden'
        }`"
      />
      <span
        class="absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      >
        <span class="pl-0.5 pt-0.5 text-inner-shadow">{{ locale }}</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
@keyframes ramkaAnimation {
  0% {
    transform: rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: rotate(45deg);
    opacity: 0.5;
  }
  100% {
    transform: rotate(90deg);
    opacity: 0;
  }
}

@keyframes ramka2Animation {
  0% {
    transform: rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.5) rotate(-45deg);
    opacity: 0.5;
  }
  100% {
    transform:scale(1.5) rotate(-90deg);
    margin-left: -0px;
    margin-top: -1px;
    opacity: 1;
  }
}

.animation-step-ramka {
  animation: ramkaAnimation 0.3s ease-in-out forwards;
}

.animation-step-ramka2 {
  animation: ramka2Animation 0.3s ease-in-out forwards;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.dropdown-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.dropdown-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.dropdown-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.dropdown-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
