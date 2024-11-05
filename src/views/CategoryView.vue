<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <main class="w-full h-full overflow-x-hidden">
      <section class="bg-x-lavender p-[80px] flex justify-center items-center">
        <div class="flex flex-col items-center gap-4">
          <h1 class="text-x-black text-[56px] font-bold leading-[64px] tracking-[-2px]">Business</h1>
          <p class="w-[515px] text-center text-base text-x-mediumgrey leading-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.  
          </p>
          <nav class="mt-8 font-medium leading-none uppercase tracking-[3px]">
          <a href="/blog" class="hover:underline">Blog</a>
          <span aria-hidden="true"> &gt; </span>
          <a href="/category" class="hover:underline text-base">Business</a>
        </nav>
        </div>
      </section>

      <section class="bg-white p-[80px] flex justify-between items-start gap-6">
        <article class="flex flex-col gap-8 w-[65%]">
          <div class="flex justify-between items-center gap-8">
            <img class="w-[294px] h-[312px]" src="@/assets/images/misc/category-business.png" alt="Two woman in erase board">
            <div class="flex flex-col gap-4 ml-5">
              <p class="text-x-yellow text-base font-semibold leading-[20px] tracking-[3px]">BUSINESS</p>
              <h2 class="text-x-black text-5xl font-bold leading-[48px]">
                Top 6 free website mockup tools 2022
              </h2>
              <p class="text-x-mediumgrey text-xl leading-[28px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
              </p>
            </div>
          </div>

          <div class="flex justify-between items-center gap-8">
            <img class="w-[294px] h-[312px]" src="@/assets/images/misc/category-business.png" alt="Two woman in erase board">
            <div class="flex flex-col gap-4 ml-5">
              <p class="text-x-yellow text-base font-semibold leading-[20px] tracking-[3px]">BUSINESS</p>
              <h2 class="text-x-black text-5xl font-bold leading-[48px]">
                Step-by-step guide to choosing great font pairs
              </h2>
              <p class="text-x-mediumgrey text-xl leading-[28px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
              </p>
            </div>
          </div>

          <div class="flex justify-between items-center gap-8">
            <img class="w-[294px] h-[312px]" src="@/assets/images/misc/category-business.png" alt="Two woman in erase board">
            <div class="flex flex-col gap-4 ml-5">
              <p class="text-x-yellow text-base font-semibold leading-[20px] tracking-[3px]">BUSINESS</p>
              <h2 class="text-x-black text-5xl font-bold leading-[48px]">
                Ten free foogle fonts that you should use
              </h2>
              <p class="text-x-mediumgrey text-xl leading-[28px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
              </p>
            </div>
          </div>

          <div class="flex justify-between items-center gap-8">
            <img class="w-[294px] h-[312px]" src="@/assets/images/misc/category-business.png" alt="Two woman in erase board">
            <div class="flex flex-col gap-4 ml-5">
              <p class="text-x-yellow text-base font-semibold leading-[20px] tracking-[3px]">BUSINESS</p>
              <h2 class="text-x-black text-5xl font-bold leading-[48px]">
                What did I learn from doing 50+ design sprints?
              </h2>
              <p class="text-x-mediumgrey text-xl leading-[28px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
              </p>
            </div>
          </div>
        </article>

        <aside class="w-[20%]">
          <div class="flex flex-col gap-12">
            <div class="flex flex-col gap-12">
              <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">Categories</h2>
              <div class="flex flex-col gap-6">
                <div class="h-[96px] border-[1.5px] border-[#C1C1C1] p-6 flex items-center gap-4 hover:bg-x-blue hover:border-x-blue hover:cursor-pointer transition duration-200 ease-in-out group">
                  <div class="w-[48px] h-[48px] bg-x-lightyellow rounded flex items-center justify-center">
                    <img src="@/assets/images/logo/startup.png" alt="Startup">
                  </div>
                  <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]">Sartup</h3>
                </div>
                <div class="h-[96px] border-[1.5px] border-[#C1C1C1] p-6 flex items-center gap-4 hover:bg-x-blue hover:border-x-blue hover:cursor-pointer transition duration-200 ease-in-out group">
                  <div class="w-[48px] h-[48px] bg-x-lightyellow rounded flex items-center justify-center">
                    <img src="@/assets/images/logo/business.png" alt="Business">
                  </div>
                  <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px] group-hover:text-white transition duration-200 ease-in-out">
                    Business
                  </h3>
                </div>
                <div class="h-[96px] border-[1.5px] border-[#C1C1C1] p-6 flex items-center gap-4 hover:bg-x-blue hover:border-x-blue hover:cursor-pointer transition duration-200 ease-in-out group">
                  <div class="w-[48px] h-[48px] bg-x-lightyellow rounded flex items-center justify-center">
                    <img src="@/assets/images/logo/economy.png" alt="Economy">
                  </div>
                  <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px] group-hover:text-white transition duration-200 ease-in-out">
                    Economy
                  </h3>
                </div>
                <div class="h-[96px] border-[1.5px] border-[#C1C1C1] p-6 flex items-center gap-4 hover:bg-x-blue hover:border-x-blue hover:cursor-pointer transition duration-200 ease-in-out group">
                  <div class="w-[48px] h-[48px] bg-x-lightyellow rounded flex items-center justify-center">
                    <img src="@/assets/images/logo/technology.png" alt="Technology">
                  </div>
                  <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px] group-hover:text-white transition duration-200 ease-in-out">
                    Technology
                  </h3>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-12">
              <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">All Tags</h2>
              <div class="flex flex-wrap justify-between gap-6">
                <button class="border-x-mediumgrey border-2 rounded-full font-bold text-sm text-x-black leading-[32px] px-[43px] py-[8px] hover:bg-x-lavender transition duration-150 ease-in-out">
                  Business
                </button>
                <button class="border-x-mediumgrey border-2 rounded-full font-bold text-sm text-x-black leading-[32px] px-[50px] py-[8px] hover:bg-x-lavender transition duration-150 ease-in-out">
                  Experience
                </button>
                <button class="border-x-mediumgrey border-2 rounded-full font-bold text-sm text-x-black leading-[32px] px-[32px] py-[8px] hover:bg-x-lavender transition duration-150 ease-in-out">
                  Screen
                </button>
                <button class="border-x-mediumgrey border-2 rounded-full font-bold text-sm text-x-black leading-[32px] px-[65px] py-[8px] hover:bg-x-lavender transition duration-150 ease-in-out">
                  Technology
                </button>
                <button class="border-x-mediumgrey border-2 rounded-full font-bold text-sm text-x-black leading-[32px] px-[65px] py-[8px] hover:bg-x-lavender transition duration-150 ease-in-out">
                  Marketing
                </button>
                <button class="border-x-mediumgrey border-2 rounded-full font-bold text-sm text-x-black leading-[32px] px-[48px] py-[8px] hover:bg-x-lavender transition duration-150 ease-in-out">
                  Life
                </button>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  </MainLayout>
</template>