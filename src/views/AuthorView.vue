<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import SosmedContent from '@/components/SosmedContent.vue';
</script>

<template>
  <MainLayout>
    <header class="flex flex-col items-center px-20 pt-32 w-full bg-x-lightgrey max-md:px-5 max-md:pt-24 max-md:max-w-full lg:max-w-screen-8xl">
    <main class="flex flex-col w-full lg:max-w-screen-xl max-md:max-w-full">
      <article class="max-w-full w-[2012px]">
        <section class="flex gap-5 max-lg:flex-col">
          <figure class="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
            <img src="@/assets/images/misc/author-andrew.png" alt="Andrew Johnson profile"
              class="object-contain grow w-full aspect-[0.85] max-md:mt-8"/>
          </figure>
          <div class="flex flex-col ml-6 mt-5 w-full max-md:ml-0 max-lg:max-w-screen-2xl">
            <div class="flex flex-col max-md:mt-9 max-md:max-w-full max-lg:max-w-full">
              <h1 class="text-6xl font-bold tracking-tigh text-x-black leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
                Hey there, I'm Andrew Jonhson and welcome to my Blog
              </h1>
              <p class="mt-6 mr-50 text-xl leading-10 text-x-mediumgrey max-w-5xl max-md:mr-2.5 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
              </p>
              <main class="flex-col ml-2 mt-12 px[-3px] max-md:mt-9 max-md:max-w-fulll">
                <slot><SosmedContent/></slot>
                <a href="/author"></a>
              </main>
            </div>
          </div>
        </section>
      </article>
      <div class="flex items-center object-contain mt-28 w-full max-md:mt-10 max-md:max-w-full">
        <span class="bg-x-yellow w-[100%] h-[23px]"></span>
      </div>
    </main>
  </header>

  <div class="text-left text-5xl font-bold tracking-tighter leading-none text-x-black ml-[318px] mt-36 max-md:text-4xl">
    All posts
  </div>
  <div class="flex flex-col items-center px-20 mt-9 mb-56 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
  <!-- Post 1 -->
  <article class="flex flex-col w-full lg:max-w-screen-xl max-md:max-w-full max-w-full mt-10">
    <div class="flex gap-5 max-lg:flex-col">
      <section class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full h-full">
        <img src="@/assets/images/misc/post-image1.png" alt="UI Design Font Sizes Guide Preview" class="object-contain grow w-full aspect-[1.29] max-md:mt-8"/>
      </section>
      <section class="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
        <div class="flex z-10 flex-col items-start self-stretch ml-5 my-auto mr-0 text-base max-md:mt-10 max-md:max-w-full">
          <span class="font-semibold leading-none text-x-yellow text-xl uppercase tracking-[3px]">
            BUSINESS
          </span>
          <h2 class="mt-5 text-5xl font-bold tracking-tighter leading-11 text-x-black max-md:max-w-full">
            Font sizes in UI design: The complete guide to follow
          </h2>
          <p class="self-stretch mt-4 leading-8 text-x-mediumgrey text-xl max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    </div>
  </article>

  <!-- Post 2 -->
  <article class="flex flex-col w-full lg:max-w-screen-xl max-md:max-w-full max-w-full mt-10">
    <div class="flex gap-5 max-lg:flex-col">
      <section class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full h-full">
        <img src="@/assets/images/misc/post-image2.png" alt="Post 2 Preview" class="object-contain grow w-full aspect-[1.29] max-md:mt-8"/>
      </section>
      <section class="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
        <div class="flex z-10 flex-col items-start self-stretch ml-5 my-auto mr-0 text-base max-md:mt-10 max-md:max-w-full">
          <span class="font-semibold leading-none text-x-yellow text-xl uppercase tracking-[3px]">
            ECONOMY
          </span>
          <h2 class="mt-5 text-5xl font-bold tracking-tighter leading-11 text-x-black lg:max-w-screen-xl max-md:max-w-full">
            How to build rapport with your web design clients
          </h2>
          <p class="self-stretch mt-4 leading-8 text-x-mediumgrey text-xl max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    </div>
  </article>
  </div>

  </MainLayout>
</template>
