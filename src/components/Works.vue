<script setup>
import tagline from "./tagline.vue";
import taglinea from "./taglinea.vue";
import { ref } from "vue";
import Slides from "./Slides.vue";
const selected = ref(0);

const selects = [
  "all",
  "logotype",
  "art",
  "webGameDesign",
  "gameInterface",
  "animation",
];

const changeSelect = (i) => {
  selected.value = i;
};
</script>
<template>
  <div>
    <div
      class="flex justify-center w-full gap-5 text-white mt-12.5 text-xl px-20 max-xl:px-0 flex-wrap max-lg:text-base max-sm:text-sm"
    >
      <div
        v-for="(select, i) of selects"
        :key="i"
        :class="`${
          selected == i ? 'text-work' : 'text-grey'
        } '  relative  flex group    hover:cursor-pointer  group text-center  '`"
        @click="changeSelect(i)"
      >
        <span class="flex justify-center min-w-25">
          {{ $t(select) }}
        </span>
        <tagline
          class="opacity-0 group-hover:opacity-100 b1"
          v-if="selected != i"
        />
        <taglinea v-else />
      </div>
    </div>
    <Slides />
  </div>
</template>
<style scoped>
.text-work {
  text-shadow: 0px 0px 8px rgba(255, 68, 83, 1);
}
</style>
