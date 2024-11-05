<script setup lang="ts">
import { ref } from 'vue';

const isMobileMenu = ref(false);
const toggleMobileMenu = () => {
  isMobileMenu.value = !isMobileMenu.value;
};
</script>

<template>
  <nav class="px-24 w-full h-[100px] mx-h-max mx-w-max shadow-md overflow-hidden text-xl bg-x-black flex items-center justify-between relative">
    <img src="@/assets/images/logo/join-sistem.png" alt="Join Sistem Logo"  >
    <div class="md:hidden">
      <button @click="toggleMobileMenu" class="text-white focus:outline-none">
        <!-- Hamburger Menu-->
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
    <ul class="top-16 left-0 w-full md:w-auto md:flex-row flex-col z-10" :class="['absolute md:static bg-x-black md:flex md:gap-10', { 'hidden': !isMobileMenu, 'block': isMobileMenu }]">
      <li>
        <a href="/" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Home</a>
      </li>
      <li>
        <a href="/blog" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Blog</a>
      </li>
      <li>
        <a href="/About" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">About Us</a>
      </li>
      <li>
        <a href="/Contact" class="text-white hover:text-x-yellow transition duration-150 ease-in-out">Contact Us</a>
      </li>
    </ul>
    <a href="/Contact" class="hidden md:block bg-x-blue px-5 py-2 rounded-[63px] text-center text-white hover:bg-x-yellow transition duration-150 ease-in-out">Contact Us</a>
  </nav>
</template>
