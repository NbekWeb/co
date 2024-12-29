<script setup>
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
      class="flex  justify-center w-full gap-5 text-white mt-12.5 text-xl px-20 max-xl:px-0 flex-wrap max-lg:text-base max-sm:text-sm"
    >
      <div
        v-for="(select, i) of selects"
        :key="i"
        :class="`${
          selected == i ? 'text-work' : 'text-grey'
        } 'min-w-22.5  flex  flex-col hover:cursor-pointer items-center group text-center '`"
        @click="changeSelect(i)"
      >
        <span class="">
          {{ $t(select) }}
        </span>
        <img
          src="@/assets/img/line.png"
          :class="`w-22.5 -mt-3 group-hover:opacity-100 ${
            selected == i ? 'opacity-100' : 'opacity-0'
          } `"
        />
      </div>
    </div>
    <Slides/>
  </div>
</template>
<style scoped>
.text-work {
  text-shadow: 0px 0px 8px rgba(255, 68, 83, 1);
}
</style>
