<script setup lang="ts">
</script>

<template>
<div class="flex flex-col gap-12 bg-white py-[60px]">
    <h2 class="text-x-black text-4xl text-center font-bold leading-[48px] tracking-[-2px]">
      Choose A Category
    </h2>
      <div class="flex items-center justify-between w-max-full gap-6">
        <a href="/category " class="w-[350px] h-[250px] flex flex-col gap-4 border border-x-lightgrey bg-opacity-30 p-6 hover:bg-x-blue hover:border-x-blue hover:cursor-pointer transition duration-200 ease-in-out group">
          <div class="w-[48px] h-[48px] bg-x-lightyellow rounded flex items-center justify-center">
            <img src="@/assets/images/logo/business.png" alt="Business">
          </div>
          <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px] group-hover:text-white transition duration-200 ease-in-out">
            Business
          </h3>
          <p class="text-x-mediumgrey text-xl leading-[28px] group-hover:text-white transition duration-200 ease-in-out">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </a>
        <a href="/category" class="w-[350px] h-[250px] flex flex-col gap-4 border border-x-lightgrey bg-opacity-30 p-6 hover:bg-x-blue hover:border-x-blue hover:cursor-pointer transition duration-200 ease-in-out group">
          <div class="w-[48px] h-[48px] bg-x-lightyellow rounded flex items-center justify-center">
            <img src="@/assets/images/logo/economy.png" alt="Economy">
          </div>
          <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px] group-hover:text-white transition duration-200 ease-in-out">
            Startup
          </h3>
          <p class="text-x-mediumgrey text-xl leading-[28px] group-hover:text-white transition duration-200 ease-in-out">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </a>
        <a href="/category" class="w-[350px] h-[250px] flex flex-col gap-4 border border-x-lightgrey bg-opacity-30 p-6 hover:bg-x-blue hover:border-x-blue hover:cursor-pointer transition duration-200 ease-in-out group">
          <div class="w-[48px] h-[48px] bg-x-lightyellow rounded flex items-center justify-center">
            <img src="@/assets/images/logo/startup.png" alt="Startup">
          </div>
          <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px] group-hover:text-white transition duration-200 ease-in-out">
            Economy
          </h3>
          <p class="text-x-mediumgrey text-xl leading-[28px] group-hover:text-white transition duration-200 ease-in-out">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </a>
        <a href="/category" class="w-[350px] h-[250px] flex flex-col gap-4 border border-x-lightgrey bg-opacity-30 p-6 hover:bg-x-blue hover:border-x-blue hover:cursor-pointer transition duration-200 ease-in-out group">
          <div class="w-[48px] h-[48px] bg-x-lightyellow rounded flex items-center justify-center">
            <img src="@/assets/images/logo/technology.png" alt="Technology">
          </div>
          <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px] group-hover:text-white transition duration-200 ease-in-out">
            Technology
          </h3>
          <p class="text-x-mediumgrey text-xl leading-[28px] group-hover:text-white transition duration-200 ease-in-out">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </a>
      </div>
  </div>

</template>