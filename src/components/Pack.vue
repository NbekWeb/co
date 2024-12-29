<template>
  <div class="py-20 px-25 max-lg:px-5">
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
      {{ $t('ChooseYourPackaging') }}
      </div>
      <img
        src="@/assets/img/arrow.png"
        class="w-[calc(50%-220px)] max-lg:hidden"
      />
    </div>
    <div class="grid justify-center grid-cols-3 gap-10 mt-25 max-xl:gap-5 2xl:px-20 max-2xl:px-10 max-lg:grid-cols-2 max-lg:place-items-center max-sm:grid-cols-1 max-md:px-0">
      <div class="relative">
        <img src="@/assets/img/p1.png" class="h-full" />
        <div
          class="absolute flex flex-col items-center w-full text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        >
          <span class="text-5xl text-white uppercase max-2xl:text-3xl">{{ $t('Interface') }}</span>
          <span class="text-xl text-white/50 mt-2.5 w-full px-5"
            > {{ $t('text_2') }}
          </span>
          <span class="mt-12 text-lg max-xl:mt-5 text-inner-shadow">{{ $t('from') }} 100$</span>
        </div>
      </div>
      <div class="relative">
        <img src="@/assets/img/p2.png" class="h-full" />
        <div
          class="absolute flex flex-col items-center w-full text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        >
          <span class="text-5xl uppercase text-gold-sh max-2xl:text-3xl">{{ $t('GoldPack') }} </span>
          <span class="text-xl text-gold mt-2.5 px-5"
            >
            {{ $t('text_2') }}
          </span>
          <span class="mt-12 text-lg max-xl:mt-5 text-gold-sh">{{ $t('from') }} 300$</span>
        </div>
      </div>
      <div class="relative">
        <img src="@/assets/img/p3.png" class="h-full" />
        <div
          class="absolute flex flex-col items-center w-full text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        >
          <span class="text-5xl uppercase text-ice-sh max-2xl:text-3xl">{{ $t('DiamondPack') }} </span>
          <span class="text-xl text-ice mt-2.5 px-5"
            > {{ $t('text_2') }}
          </span>
          <span class="mt-12 text-lg max-xl:mt-5 text-ice-sh">{{ $t('from') }} 1000$</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.text-gold-sh {
  z-index: 1000;
  position: relative;
  font-weight: bold;
  background: url("@/assets/img/gold.png") center center no-repeat;
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.text-ice-sh {
  z-index: 1000;
  position: relative;
  font-weight: bold;
  background: url("@/assets/img/ice.png") center center no-repeat;
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
