<script setup lang="ts">
</script>

<template>
  <footer class="bg-gray-900 text-white h-full w-full py-12">
    <div class="container max-w-full px-6 lg:px-20 space-y-16">
      <div class="flex justify-between items-center">
        <div class="text-white font-bold text-3xl">{{ '{' }}{{ 'Finsweet' }}</div>

        <div class="flex space-x-6 text-sm text-white ml-auto">
          <a href="/" class="hover:text-x-yellow active:text-gray-400">Home</a>
          <a href="/blog" class="hover:text-x-yellow active:text-gray-400">Blog</a>
          <a href="/about" class="hover:text-x-yellow active:text-gray-400">About us</a>
          <a href="/contact" class="hover:text-x-yellow active:text-gray-400">Contact us</a>
          <a href="/policy" class="hover:text-x-yellow active:text-gray-400">Privacy Policy</a>
        </div>
      </div>

      <div class="flex flex-col md:flex-row w-full max-w-8xl bg-gray-800 p-32 mx-auto">
        <div class="flex flex-col md:flex-row">
          <h1 class="text-5xl font-bold text-white max-w-full text-left">
            Subscribe to our newsletter to get latest updates and news
          </h1>
        </div>
        
        <form @submit.prevent="Submit" class="flex flex-col  text-base md:flex-row h-20 ml-20 mt-6">
          <input type="email" id="email" placeholder="Enter Your Email" required
            class="flex pl-10 pr-72 mr-12 w-full md:w-auto h-full md:h-auto bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-x-mediumgrey" />
          <button type="submit" class="flex px-28 py-2 w-full md:w-auto mt-4 md:mt-0 items-center justify-center font-bold text-white bg-x-blue hover:bg-x-yellow transition duration-150 ease-in-out">
            Subscribe
          </button>
        </form>
      </div>

      <div class="flex justify-between items-center text-sm">
        <div>
          <p>Finstreet 118 2561 Fintown</p>
          <p>Hello@finsweet.com &nbsp; | &nbsp; 020 7993 2905</p>
        </div>

        <div class="flex space-x-5">
          <a href="/" class="hover:filter hover:invert transition duration-200">
            <img src="@/assets/images/logo/facebook.png" alt="Facebook" class="w-6 h-6" />
          </a>
          <a href="/" class="hover:filter hover:invert transition duration-200">
            <img src="@/assets/images/logo/twitter.png" alt="Twitter" class="w-6 h-6" />
          </a>
          <a href="/" class="hover:filter hover:invert transition duration-200">
            <img src="@/assets/images/logo/instagram.png" alt="Instagram" class="w-6 h-6" />
          </a>
          <a href="/" class="hover:filter hover:invert transition duration-200">
            <img src="@/assets/images/logo/linkedIn.png" alt="LinkedIn" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    Submit() {

    },
  },
}
</script>