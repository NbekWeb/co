<script setup></script>
<template>
  <div class="py-20">
    <div
      class="flex gap-5 pt-2.5 items-center overflow-x-hidden overflow-y-hidden max-lg:justify-center max-lg:mt-5"
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
    <div>
      <div class="flex flex-col items-center max-lg:hidden">
        <div class="flex gap-7 mt-25">
          <div
            class="relative flex hes items-center justify-center group h-78 min-w-70"
          >
            <img
              src="@/assets/img/hex.png"
              class="absolute top-0 left-0 h-full transition-opacity duration-300  group-hover:opacity-0 animation-hex"
            />
            <img
              src="@/assets/img/hex2.png"
              class="absolute top-0 left-0 h-full transition-opacity duration-300 scale-110 opacity-0 group-hover:opacity-100 animation-hex-reverse"
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
            class="relative hes flex items-center justify-center group h-78 min-w-70"
          >
            <img
              src="@/assets/img/hex.png"
              class="absolute top-0 left-0 animation-hex h-full transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src="@/assets/img/hex2.png"
              class="absolute top-0 left-0 animation-hex-reverse h-full transition-opacity duration-300 scale-110 opacity-0 group-hover:opacity-100"
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
            class="relative hes flex items-center justify-center group h-78 min-w-70"
          >
            <img
              src="@/assets/img/hex.png"
              class="absolute animation-hex top-0 left-0 h-full transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src="@/assets/img/hex2.png"
              class="absolute top-0 left-0 animation-hex-reverse h-full transition-opacity duration-300 scale-110 opacity-0 group-hover:opacity-100"
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
            class="relative hes flex items-center justify-center group h-78 min-w-70"
          >
            <img
              src="@/assets/img/hex.png"
              class="absolute animation-hex top-0 left-0 h-full transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src="@/assets/img/hex2.png"
              class="absolute top-0 left-0 animation-hex-reverse h-full transition-opacity duration-300 scale-110 opacity-0 group-hover:opacity-100"
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
            class="relative hes flex items-center justify-center group h-78 min-w-70"
          >
            <img
              src="@/assets/img/hex.png"
              class="absolute animation-hex top-0 left-0 h-full transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src="@/assets/img/hex2.png"
              class="absolute top-0 animation-hex-reverse left-0 h-full transition-opacity duration-300 scale-110 opacity-0 group-hover:opacity-100"
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
      <div class="flex flex-col items-center lg:hidden">
        <div class="flex gap-7 mt-15">
          <div
            class="relative hes flex items-center justify-center group h-[168px] min-w-[150px]"
          >
            <img
              src="@/assets/img/hex.png"
              class="absolute animation-hex top-0 left-0 h-full transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src="@/assets/img/hex2.png"
              class="absolute animation-hex-reverse top-0 left-0 h-full transition-opacity duration-300 scale-110 opacity-0 group-hover:opacity-100"
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
              class="absolute animation-hex top-0 left-0 h-full transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src="@/assets/img/hex2.png"
              class="absolute animation-hex-reverse top-0 left-0 h-full transition-opacity duration-300 scale-110 opacity-0 group-hover:opacity-100"
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
            class="absolute animation-hex top-0 left-0 h-full transition-opacity duration-300 group-hover:opacity-0"
          />
          <img
            src="@/assets/img/hex2.png"
            class="absolute animation-hex-reverse top-0 left-0 h-full transition-opacity duration-300 scale-110 opacity-0 group-hover:opacity-100"
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
              class="absolute animation-hex top-0 left-0 h-full transition-opacity duration-300 group-hover:opacity-0"
            />
            <img
              src="@/assets/img/hex2.png"
              class="absolute animation-hex-reverse top-0 left-0 h-full transition-opacity duration-300 scale-110 opacity-0 group-hover:opacity-100"
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
              class="absolute animation-hex top-0 left-0 h-full transition-opacity duration-300 animation-hex"
            />
            <img
              src="@/assets/img/hex2.png"
              class="absolute  animation-hex-reverse top-0 left-0 h-full transition-opacity duration-300 scale-110 opacity-0 animation-hex-reverse"
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
.hes:hover img {
  animation: none;
}
</style>
