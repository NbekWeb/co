<template>
  <div class="relati px-25 max-lg:px-5">
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
    <div class="mt-10">
      <div class="flex items-center gap-4 max-md:gap-1.5 justify-center">
        <a
          class="flex w-[74px] h-[74px] items-center justify-center icon group p-2"
        >
          <img src="@/assets/img/tg.png" class="w-full" />
        </a>
        <a
          class="flex w-[74px] h-[74px] items-center justify-center icon group p-2"
        >
          <img src="@/assets/img/dis.png" class="w-full" />
        </a>
        <a
          class="flex w-[74px] h-[74px] items-center justify-center icon group p-2"
        >
          <img src="@/assets/img/ve.png" class="w-full" />
        </a>
      </div>
      <div class="pt-12.5 relative">
        <img src="@/assets/img/el.png" class="absolute bottom-0 w-full" />
        <span
          class="flex justify-center pb-10 text-xl text-center max-sm:text-sm text-white/30"
          >MEV STUDIO - 2024</span
        >
      </div>
    </div>
  </div>
</template>


