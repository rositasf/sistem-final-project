<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import TeamContent from '@/components/TeamContent.vue';
import CategoriesContent from '@/components/CategoriesContent.vue';
import SosmedContent from '@/components/SosmedContent.vue';
import { ref } from 'vue';

const isPrevActive = ref(false);
const isNextActive = ref(false);

const prev = () => {
  // Logic for the previous action
  isPrevActive.value = true; 
  isNextActive.value = false;  
  console.log('Previous button clicked');
};

const next = () => {
  // Logic for the next action
  isNextActive.value = true; 
  isPrevActive.value = false;  
  console.log('Next button clicked');
};
</script>

<template>
  <MainLayout>
    <!-- Header -->
    <header class="relative bg-[url('@/assets/images/misc/cover.png')] bg-cover h-[960px] flex items-center object-cover object-top overflow-hidden">
      <div class="absolute inset-0 h-full bg-[radial-gradient(circle_at_left,_rgba(0,0,0,0.9),_transparent)]"></div>
      <div class="flex flex-col md:flex-row justify-start relative z-10 ml-20 px-2">
        <div class="max-w-mb">
          <div class="text-xl text-white uppercase mb-4">
            POSTED ON <span class="font-extrabold">STARTUP</span>
          </div>
          <div class="text-7xl font-bold text-white mb-4 max-w-mb">
            <h1>Step-by-step guide to choosing</h1> 
            <h1>great font pairs</h1>
          </div>
          <div class="text-base text-white mb-2">
            By<span class="text-x-blue"> James West</span> | May 23, 2022
          </div>
          <p class="text-xl text-white leading-relaxed max-w-mb">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          </p>
          <p class="text-xl text-white leading-relaxed mb-20 max-w-mb">
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <a href="#" class="bg-x-blue text-white text-base py-6 px-20 hover:bg-x-yellow transition duration-150 ease-in-out">
            Read More &gt;
          </a>
        </div>
      </div>
    </header>
    
    <!-- Featured Post -->
    <div class="py-12">
      <div class="container max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:py-24 lg:px-24">
        <div class="md:col-span-2">
          <h2 class="text-4xl font-semibold text-gray-800 mb-6 ml-2 mr-2">Featured Post</h2>
          <div class="border border-gray-200 p-8 bg-white shadow-sm">
            <img src="@/assets/images/misc/home1.png" alt="Featured Image" class="mb-10 w-full object-cover">
            <div class="text-sm text-gray-500 mb-2">By<span class="text-x-yellow">John Doe</span> | May 23, 2022</div>
            <h2 class="text-4xl font-bold text-gray-800 mb-4 leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </h2>
            <p class="text-gray-600 text-xl">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            </p>
            <p class="text-gray-600 text-xl mb-8">
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <a href="#" class="bg-blue-600 hover:bg-x-yellow transition duration-150 ease-in-out text-white py-6 px-20 inline-block">
              Read More &gt;
            </a>
          </div>
        </div>

        <div>
          <div class="flex justify-between mb-6">
            <h2 class="text-4xl font-semibold text-gray-800">All Posts</h2>
            <a href="#" class="text-x-yellow mt-8 hover:underline text-base">View All</a>
          </div>

          <div class="grid gap-2">
            <div class="w-[565px] h-[230px] flex flex-col justify-center p-8 gap-2 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out">
              <div class="text-sm text-gray-500 mb-5 ml-3 mt-8">By <span class="text-x-yellow">John Doe</span> | Aug 23, 2021</div>
              <h3 class="text-3xl font-semibold leading-[32px] w-[389px] text-gray-800 mb-12 ml-3">
                8 Figma design systems that you can download for free today.
              </h3>
            </div>

            <div class="w-[565px] h-[230px] flex flex-col justify-center p-8 gap-2 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out">
              <div class="text-sm text-gray-500 mb-5 ml-3 mt-8">By <span class="text-x-yellow">John Doe</span> | Aug 23, 2021</div>
              <h3 class="text-3xl font-semibold leading-[32px] w-[389px] text-gray-800 mb-12 ml-3">
                8 Figma design systems that you can download for free today.
              </h3>
            </div>

            <div class="w-[565px] h-[230px] flex flex-col justify-center p-8 gap-2 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out">
              <div class="text-sm text-gray-500 mb-5 ml-3 mt-8">By <span class="text-x-yellow">John Doe</span> | Aug 23, 2021</div>
              <h3 class="text-3xl font-semibold leading-[32px] w-[389px] text-gray-800 mb-12 ml-3">
                8 Figma design systems that you can download for free today.
              </h3>
            </div>

            <div class="w-[565px] h-[230px] flex flex-col justify-center p-8 gap-2 hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out">
              <div class="text-sm text-gray-500 mb-5 ml-3 mt-8">By <span class="text-x-yellow">John Doe</span> | Aug 23, 2021</div>
              <h3 class="text-3xl font-semibold leading-[32px] w-[389px] text-gray-800 mb-12 ml-3">
                8 Figma design systems that you can download for free today.
              </h3>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    
    <!-- About us & Our mission -->
    <div class="bg-white max-w-full  max-h-full mx-auto lg:py-24 lg:px-24">
      <div class="w-full flex items-center">
        <span class="bg-white w-[15%] h-[23px]"></span>
        <span class="bg-x-yellow w-[60%] h-[23px]"></span>
        <span class="bg-x-blue w-[25%] h-[23px]"></span>
      </div>
      <div class="bg-x-lightgrey p-[100px] flex justify-between gap-[100px]">
        <div class="w-[50%] flex flex-col gap-8">
          <h5 class="text-x-black text-start text-2xl font-medium tracking-[3px] leading-[20px]">
            ABOUT US
          </h5>
          <h2 class="text-x-black text-5xl font-bold max-w-4xl tracking-[-2px] leading-[60px]">
            We are a community of content writers who share their learnings
          </h2>
          <p class="text-x-mediumgrey text-[22px] max-w-5xl leading-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
            <a href="#" class="text-x-yellow text-[18px] font-bold leading-[32px] hover:text-x-blue transition duration-200 ease-in-out">
              Read More &gt;
            </a>
        </div>
        
        <div class="w-[50%] flex flex-col gap-10">
          <h5 class="text-x-black text-start text-xl font-medium tracking-[3px] leading-[20px]">
            OUR MISSION
          </h5>
          <h2 class="text-x-black text-4xl font-bold max-w-2xl tracking-[-1px] leading-[60px]">
            Creating valuable content for creatives all around the world
          </h2>
          <p class="text-x-mediumgrey text-[22px] max-w-4xl leading-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
      </div>
    </div>

    <!-- Category -->
    <main>
        <slot><CategoriesContent /></slot>
    </main>

    <div class="bg-white py-[60px]">
      <div class="flex items-center relative w-full max-w-24xl">
        <img src="@/assets/images/misc/home2.png" alt="Started" class="w-3/4 h-auto object-cover">
          <div class="w-[1024px] bg-white px-[100px] py-[150px] flex flex-col gap-3 absolute left-[45%] right-0 bottom-0">
            <h5 class="text-x-black text-start text-xl font-semibold tracking-[3px] leading-[20px] mb-7">
              WHY WE STARTED
            </h5>
            <h1 class="text-x-black text-6xl font-bold leading-[72px] mb-7">
              It started out as a simple idea and evolved into our passion
            </h1>
            <p class="text-x-mediumgrey text-xl leading-[32px] max-w-5xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
            <a href="#" class="w-[269px] flex items-center justify-center mt-8 bg-x-blue px-[36px] py-[16px] text-xl text-white font-bold hover:bg-x-yellow transition duration-150 ease-in-out">
              Discover our story &gt;
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-8 bg-white px-[80px]">
      <h2 class="text-x-black text-4xl text-center font-bold mb-10 leading-[48px] tracking-[-2px]">List of Authors</h2>
        <div class="flex items-center justify-between gap-6">
          <a href="/author" class="flex flex-col items-center justify-center gap-4 p-10 w-[300px] h-[350px] bg-x-lightgrey hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out">
            <img src="@/assets/images/misc/author2-floyd.png" alt="Author Floyd" class="w-[128px] h-[128px]">
            <div class="flex flex-col items-center">
              <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]">Floyd Miles</h3>
              <p class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out">Content Writer @Company</p>
            </div>
            <main>
              <slot><SosmedContent/></slot>
            </main>
          </a>

          <a href="/author" class="flex flex-col items-center justify-center gap-4 p-10 w-[300px] h-[350px] bg-x-lightgrey hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out">
            <img src="@/assets/images/misc/author3-dianne.png" alt="Author Dianne" class="w-[128px] h-[128px]">
            <div class="flex flex-col items-center">
              <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]">Dianne Russell</h3>
              <p class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out">Content Writer @Company</p>
            </div>
            <main>
              <slot><SosmedContent/></slot>
            </main>
          </a>

          <a href="/author" class="flex flex-col items-center justify-center gap-4 p-10 w-[300px] h-[350px] bg-x-lightgrey hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out">
            <img src="@/assets/images/misc/author4-jenny.png" alt="Author Jenny" class="w-[128px] h-[128px]">
            <div class="flex flex-col items-center">
              <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]">Jenny Wilson</h3>
              <p class="text-x-mediumgrey leading-[28px] group-hover:text-white transition duration-200 ease-in-out">Content Writer @Company</p>
            </div>
            <main>
              <slot><SosmedContent/></slot>
            </main>
          </a>

          <a href="/author" class="flex flex-col items-center justify-center gap-4 p-10 w-[300px] h-[350px] bg-x-lightgrey hover:bg-x-lightyellow hover:cursor-pointer transition duration-200 ease-in-out">
            <img src="@/assets/images/misc/author5-lesly.png" alt="Author Lesly" class="w-[128px] h-[128px]">
            <div class="flex flex-col items-center">
              <h3 class="text-x-black text-3xl font-bold leading-[40px] tracking-[-1px]">Lesly Alexander</h3>
              <p class="text-x-mediumgrey leading-[28px]">Content Writer @Company</p>
            </div>
            <main>
              <slot><SosmedContent/></slot>
            </main>
          </a>
        </div>
    </div>

    <div class="bg-white px-[80px] py-[40px] mt-20 mb-20">
      <div class="flex items-center justify-between gap-8">
        <div class="flex flex-col justify-center">
            <p class="text-x-mediumgrey text-opacity-60 text-sm leading-[20px]">We are</p>
            <h4 class="text-x-mediumgrey text-xl font-bold leading-[32px]">Featured in</h4>
          </div>
          <img src="@/assets/images/logo/logoipsum-1.png" alt="Logoipsum 1">
          <img src="@/assets/images/logo/logoipsum-2.png" alt="Logoipsum 2">
          <img src="@/assets/images/logo/logoipsum-3.png" alt="Logoipsum 3">
          <img src="@/assets/images/logo/logoipsum-4.png" alt="Logoipsum 4">
          <img src="@/assets/images/logo/logoipsum-5.png" alt="Logoipsum 5">
      </div>
    </div>

    <div class="bg-white px-[80px] py-[40px]">
      <div class="bg-x-lightyellow flex justify-between gap-[40px] p-[112px]">
        <div class="w-[40%] flex flex-col gap-4">
          <h5 class="text-x-black font-semibold leading-[20px] tracking-[3px]">TESTIMONIALS</h5>
          <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">What people say about our blog</h2>
          <p class="text-x-black leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
          <div class="w-[60%] flex flex-col justify-between gap-[112px] ps-[80px] border-s border-x-mediumgrey border-opacity-40">
            <h4 class="text-x-black text-xl font-bold leading-[32px] pe-[56px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
            <div class="flex justify-between items-center"> 
              <div class="flex items-center justify-center gap-4">
                <img src="@/assets/images/misc/author1-jonathan.png" alt="Author Jonathan">
                <div>
                  <h4 class="text-x-black text-xl font-bold leading-[32px]">Jonathan Vallen</h4>
                  <p class="text-x-mediumgrey leading-[28px]">New York, USA</p>
                </div>
              </div>
              <div class="flex justify-center items-center space-x-4">
                <button @click="prev" 
                  :class="['flex justify-center items-center w-12 h-12 rounded-full hover:bg-x-black transition duration-150 ease-in-out', isPrevActive ? 'bg-x-black text-white' : 'bg-white text-x-black']" 
                  aria-label="Previous">
                  <span class="text-xl">&larr;</span>
                </button>
                <button @click="next" 
                  :class="['flex justify-center items-center w-12 h-12 rounded-full hover:bg-x-black transition duration-150 ease-in-out', isNextActive ? 'bg-x-black text-white' : 'bg-white text-x-black']" 
                  aria-label="Next">
                  <span class="text-xl">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
    <TeamContent />
  </MainLayout>
</template>
