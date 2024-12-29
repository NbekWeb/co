<template>
  <div class="flex flex-col items-center gap-4 max-md:flex-row max-md:gap-1.5 ">
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
</template>
<style scoped>
.icon {
  background: url("@/assets/img/icon.png") center center no-repeat;
  background-size: cover;
  transition:  .3s ease;
}
.icon:hover {
  background: url("@/assets/img/icon2.png") center center no-repeat;
  background-size: cover;
}
</style>
