<script setup></script>
<template>
  <div class="pt-20">
    <div
      class="flex px-25 max-lg:px-5 gap-5 pt-2.5 items-center overflow-x-hidden overflow-y-hidden max-lg:justify-center max-lg:mt-5"
    >
      <img
        src="@/assets/img/leftarrow.png"
        class="w-[calc(50%-60px)] max-lg:hidden"
      />
      <div
        class="flex justify-center flex-grow min-h-full pt-3 text-4xl font-semibold uppercase text-inner-shadow"
      >
        {{ $t("prices") }}
      </div>
      <img
        src="@/assets/img/arrow.png"
        class="w-[calc(50%-60px)] max-lg:hidden"
      />
    </div>
    <div class="relative mx-auto max-w-max py-25 max-lg:py-15">
      <div class="flex flex-col items-center max-lg:hidden">
        <div class="flex gap-7 mt-25">
          <div
            class="relative flex items-center justify-center hes group h-78 min-w-70 hex1"
          >
            <img
              src="@/assets/img/hex.png"
              class="absolute top-0 left-0 h-full transition-opacity duration-300 group-hover:opacity-0 animation-hex"
            />
            <img
              src="@/assets/img/hex2.png"
              class="absolute top-0 left-0 h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 animation-hex-reverse"
            />
            <div class="flex flex-col items-center gap-1 text-white">
              <span class="text-3xl text-center uppercase max-w-56">
                {{ $t("art") }}
              </span>
              <span class="text-xs text-inner-shadow"
                >{{ $t("from") }} 100 $</span
              >
            </div>
          </div>
          <div
            class="relative flex items-center justify-center hes group h-78 min-w-70"
          >
            <img
              src="@/assets/img/hex.png"
              class="absolute top-0 left-0 h-full transition-opacity duration-300 animation-hex group-hover:opacity-0"
            />
            <img
              src="@/assets/img/hex2.png"
              class="absolute top-0 left-0 h-full transition-opacity duration-300 opacity-0 animation-hex-reverse group-hover:opacity-100"
            />
            <div class="flex flex-col items-center gap-1 text-white">
              <span class="text-3xl text-center uppercase max-w-56">
                {{ $t("animation") }}
              </span>
              <span class="text-xs text-inner-shadow"
                >{{ $t("from") }} 100 $</span
              >
            </div>
          </div>
          <div
            class="relative flex items-center justify-center hes group h-78 min-w-70"
          >
            <img
              src="@/assets/img/hex.png"
              class="absolute top-0 left-0 h-full transition-opacity duration-300 animation-hex group-hover:opacity-0"
            />
            <img
              src="@/assets/img/hex2.png"
              class="absolute top-0 left-0 h-full transition-opacity duration-300 opacity-0 animation-hex-reverse group-hover:opacity-100"
            />
            <div class="flex flex-col items-center gap-1 text-white">
              <span class="text-3xl text-center uppercase max-w-56">
                {{ $t("webGameDesign") }}
              </span>
              <span class="text-xs text-inner-shadow"
                >{{ $t("from") }} 100 $</span
              >
            </div>
          </div>
        </div>
        <div class="flex -mt-10 gap-7">
          <div
            class="relative flex items-center justify-center hes group h-78 min-w-70"
          >
            <img
              src="@/assets/img/hex.png"
              class="absolute top-0 left-0 h-full transition-opacity duration-300 animation-hex group-hover:opacity-0"
            />
            <img
              src="@/assets/img/hex2.png"
              class="absolute top-0 left-0 h-full transition-opacity duration-300 opacity-0 animation-hex-reverse group-hover:opacity-100"
            />
            <div class="flex flex-col items-center gap-1 text-white">
              <span class="text-3xl text-center uppercase max-w-56">
                {{ $t("gameInterface") }}
              </span>
              <span class="text-xs text-inner-shadow"
                >{{ $t("from") }} 100 $</span
              >
            </div>
          </div>
          <div
            class="relative flex items-center justify-center hes group h-78 min-w-70"
          >
            <img
              src="@/assets/img/hex.png"
              class="absolute top-0 left-0 h-full transition-opacity duration-300 animation-hex group-hover:opacity-0"
            />
            <img
              src="@/assets/img/hex2.png"
              class="absolute top-0 left-0 h-full transition-opacity duration-300 opacity-0 animation-hex-reverse group-hover:opacity-100"
            />
            <div class="flex flex-col items-center gap-1 text-white">
              <span class="text-3xl text-center uppercase max-w-56">
                {{ $t("logotype") }}
              </span>
              <span class="text-xs text-inner-shadow"
                >{{ $t("from") }} 100 $</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center px-4 lg:hidden">
        <div class="flex gap-7 mt-15">
          <div
            class="relative hes flex items-center justify-center group h-[168px] min-w-[150px]"
          >
            <img
              src="@/assets/img/hex.png"
              class="absolute top-0 left-0 h-full transition-opacity duration-300 animation-hex group-hover:opacity-0"
            />
            <img
              src="@/assets/img/hex2.png"
              class="absolute top-0 left-0 h-full transition-opacity duration-300 opacity-0 animation-hex-reverse group-hover:opacity-100"
            />
            <div class="flex flex-col items-center gap-1 text-white">
              <span class="text-lg text-center uppercase max-w-36">
                {{ $t("art") }}
              </span>
              <span class="text-xs text-inner-shadow"
                >{{ $t("from") }} 100 $</span
              >
            </div>
          </div>
          <div
            class="relative hes flex items-center justify-center group h-[168px] min-w-[150px]"
          >
            <img
              src="@/assets/img/hex.png"
              class="absolute top-0 left-0 h-full transition-opacity duration-300 animation-hex group-hover:opacity-0"
            />
            <img
              src="@/assets/img/hex2.png"
              class="absolute top-0 left-0 h-full transition-opacity duration-300 opacity-0 animation-hex-reverse group-hover:opacity-100"
            />
            <div class="flex flex-col items-center gap-1 text-white">
              <span class="text-lg text-center uppercase max-w-36">
                {{ $t("art") }}
              </span>
              <span class="text-xs text-inner-shadow"
                >{{ $t("from") }} 100 $</span
              >
            </div>
          </div>
        </div>
        <div
          class="relative hes -mt-10 flex items-center justify-center group h-[168px] min-w-[150px]"
        >
          <img
            src="@/assets/img/hex.png"
            class="absolute top-0 left-0 h-full transition-opacity duration-300 animation-hex group-hover:opacity-0"
          />
          <img
            src="@/assets/img/hex2.png"
            class="absolute top-0 left-0 h-full transition-opacity duration-300 opacity-0 animation-hex-reverse group-hover:opacity-100"
          />
          <div class="flex flex-col items-center gap-1 text-white">
            <span class="text-lg text-center uppercase max-w-36">
              {{ $t("art") }}
            </span>
            <span class="text-xs text-inner-shadow"
              >{{ $t("from") }} 100 $</span
            >
          </div>
        </div>
        <div class="flex -mt-10 gap-7">
          <div
            class="relative hes flex items-center justify-center group h-[168px] min-w-[150px]"
          >
            <img
              src="@/assets/img/hex.png"
              class="absolute top-0 left-0 h-full transition-opacity duration-300 animation-hex group-hover:opacity-0"
            />
            <img
              src="@/assets/img/hex2.png"
              class="absolute top-0 left-0 h-full transition-opacity duration-300 opacity-0 animation-hex-reverse group-hover:opacity-100"
            />
            <div class="flex flex-col items-center gap-1 text-white">
              <span class="text-lg text-center uppercase max-w-36">
                {{ $t("art") }}
              </span>
              <span class="text-xs text-inner-shadow"
                >{{ $t("from") }} 100 $</span
              >
            </div>
          </div>
          <div
            class="relative hes flex items-center justify-center group h-[168px] min-w-[150px]"
          >
            <img
              src="@/assets/img/hex.png"
              class="absolute top-0 left-0 h-full transition-opacity duration-300 animation-hex"
            />
            <img
              src="@/assets/img/hex2.png"
              class="absolute top-0 left-0 h-full transition-opacity duration-300 opacity-0 animation-hex-reverse"
            />
            <div class="flex flex-col items-center gap-1 text-white">
              <span class="text-lg text-center uppercase max-w-36">
                {{ $t("art") }}
              </span>
              <span class="text-xs text-inner-shadow"
                >{{ $t("from") }} 100 $</span
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute w-full transform -translate-x-1/2 top-4 left-1/2 max-lg:top-1/2 max-lg:-translate-y-1/2"
      >
        <img src="@/assets/img/pict.png" class="w-full mt-10" />
      </div>
    </div>
  </div>
</template>
<style scoped>
@keyframes fade-in-out {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes fade-out-in {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.animation-hex {
  animation: fade-in-out 2s infinite;
}

.animation-hex-reverse {
  animation: fade-out-in 2s infinite;
}
</style>
