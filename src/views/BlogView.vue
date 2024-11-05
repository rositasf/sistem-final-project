<script setup lang="ts">
import { ref } from 'vue';
import MainLayout from '@/layouts/MainLayout.vue';
import CategoriesContent from '@/components/CategoriesContent.vue';
import TeamContent from '@/components/TeamContent.vue';

const activeLink = ref('');

const setActiveLink = (link: string) => {
  activeLink.value = link;
};
</script>

<template>
  <MainLayout>
      <!-- Hero -->
      <section class="bg-x-lavender p-[80px] flex justify-between items-center gap-8 max-w-mb">
        <div class="flex flex-col gap-5 mr-20">
          <h5 class="text-x-black text-xl font-medium tracking-[3px]">FEATURED POST</h5>
          <h2 class="text-x-black text-6xl font-bold mr-36 leading-[60px] tracking-[-1px]">Step-by-step guide to choosing great font pairs</h2>
          <p class="text-x-black text-sm font-medium leading-[20px]">By <span class="text-x-yellow">James West</span> &nbsp;|&nbsp; May 23, 2022</p>
          <p class="text-x-mediumgrey text-xl mr-56 leading-[30px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident.
          </p>
          <a href="/post" class="w-[204px] flex items-center justify-center bg-x-blue px-[48px] py-[16px] text-white font-bold hover:bg-x-yellow transition duration-150 ease-in-out">
            Read More &gt;
          </a>
        </div>
        <img src="@/assets/images/misc/blog1.png" alt="Man with white T-Shirt">
      </section>

      <!-- All Post -->
      <section class="p-[80px] flex flex-col gap-8">
        <h2 class="text-x-black text-4xl font-bold leading-[48px] tracking-[-2px]">All Post</h2>
        <div class="flex flex-col gap-8 pt-[48px] border-t border-x-mediumgrey border-opacity-32">
          <a href="/post" class="flex justify-start items-center gap-8">
            <img src="@/assets/images/misc/blog2.png" alt="Two woman in erase board">
            <div class="flex flex-col gap-4">
              <p class="text-x-yellow font-semibold leading-[20px] tracking-[3px]">STARTUP</p>
              <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">Design tips for designers that cover everything you need</h2>
              <p class="text-x-mediumgrey text-xl max-w-6xl leading-[28px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </a>
          <a href="/post" class="flex justify-start items-center gap-8">
            <img src="@/assets/images/misc/blog3.png" alt="People doing handshake">
            <div class="flex flex-col gap-4">
              <p class="text-x-yellow font-semibold leading-[20px] tracking-[3px]">BUSINESS</p>
              <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">How to build rapport with your web design clients</h2>
              <p class="text-x-mediumgrey text-xl max-w-6xl leading-[28px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </a>
          <a href="/post" class="flex justify-start items-center gap-8">
            <img src="@/assets/images/misc/blog4.png" alt="Woman looking at man">
            <div class="flex flex-col gap-4">
              <p class="text-x-yellow font-semibold leading-[20px] tracking-[3px]">STARTUP</p>
              <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">Logo design trends to avoid in 2022</h2>
              <p class="text-x-mediumgrey text-xl max-w-6xl leading-[28px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </a>
          <a href="/post" class="flex justify-start items-center gap-8">
            <img src="@/assets/images/misc/blog5.png" alt="People walking">
            <div class="flex flex-col gap-4">
              <p class="text-x-yellow font-semibold leading-[20px] tracking-[3px]">TECHNOLOGY</p>
              <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">8 Figma design systems you can download for free today</h2>
              <p class="text-x-mediumgrey text-xl max-w-6xl leading-[28px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </a>
          <a href="/post" class="flex justify-start items-center gap-8">
            <img src="@/assets/images/misc/blog2.png" alt="Two woman in erase board">
            <div class="flex flex-col gap-4">
              <p class="text-x-yellow font-semibold leading-[20px] tracking-[3px]">ECONOMY</p>
              <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">Font sizes in UI design: The complete guide to follow</h2>
              <p class="text-x-mediumgrey text-xl max-w-6xl leading-[28px]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </a>
          <div class="flex justify-center items-center gap-4">
            <a href="/blog" 
              :class="activeLink === 'prev' ? 'text-black text-3xl' : 'text-x-mediumgrey text-2xl'" 
              @click.prevent="setActiveLink('prev')" 
              class="text-center font-bold leading-[32px] transition duration-150 ease-in-out">
              &lt; Prev
            </a>
            <a href="/blog" 
              :class="activeLink === 'next' ? 'text-black text-3xl' : 'text-x-mediumgrey text-2xl'" 
              @click.prevent="setActiveLink('next')" 
              class="text-center font-bold leading-[40px] tracking-[-1px] transition duration-150 ease-in-out">
              Next &gt;
            </a>
          </div>
        </div>
      </section>
       <!-- Category -->
      <main class="p-[80px]">
        <slot><CategoriesContent /></slot>
      </main>
      <TeamContent />
  </MainLayout>
</template>
