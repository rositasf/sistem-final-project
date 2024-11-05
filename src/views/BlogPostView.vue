<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import TeamContent from '@/components/TeamContent.vue';
</script>

<template>
  <MainLayout>
    <main class="flex flex-col items-center w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <section class="px-[80px] pt-[80px] flex justify-center items-center">
        <div class="flex flex-col items-start gap-4 pt-[48px] px-[256px]">
          <div class="flex items-center justify-center gap-4">
            <img src="@/assets/images/misc/author1-jonathan.png" alt="Author Jonathan">
            <div>
              <h3 class="text-x-yellow text-3xl font-bold leading-[40px] tracking-[1px]">Jonathan Vallen</h3>
              <p class="text-x-mediumgrey leading-[28px]">Posted on 27th January 2022</p>
            </div>
          </div>
          <h1 class="text-x-black text-6xl font-bold leading-[64px] tracking-[1px]">Step-by-step guide to choosing great font pairs</h1>
          <div class="flex items-center justify-between gap-4 mt-5">
            <img src="@/assets/images/logo/startup.png" alt="Startup">
            <h4 class="text-x-black font-bold text-2xl leading-[32px]">Startup</h4>
          </div>
        </div>
      </section>

      <div class="flex items-center justify-center pt-[60px]">
        <img src="@/assets/images/misc/blogpost1.png" alt="Woman with glasses">
      </div>

      <section class="bg-white px-[80px] py-[40px]">
        <article class="flex flex-col items-center gap-8 px-[280px]">
          <div class="flex flex-col gap-4">
            <h2 class="text-x-black text-5xl mt-16 font-bold tracking-[-2px] leading-[48px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
            <p class="text-x-mediumgrey text-xl leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. 
              Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <h2 class="text-x-black text-5xl mt-16 font-bold tracking-[-2px] leading-[48px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
            <p class="text-x-mediumgrey text-xl leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. 
              Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
            </p>
            <p class="text-x-mediumgrey text-xl leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. 
              Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
            </p>
            <ul class="list-disc pl-6 text-x-mediumgrey text-opacity-78">
              <li><h4 class="text-x-mediumgrey text-2xl text-opacity-78 font-bold leading-[32px]">Lorem ipsum dolor sit amet</h4></li>
              <li><h4 class="text-x-mediumgrey text-2xl text-opacity-78 font-bold leading-[32px]">Non blandit massa enim nec scelerisque</h4></li>
              <li><h4 class="text-x-mediumgrey text-2xl text-opacity-78 font-bold leading-[32px]">Neque egestas congue quisque egestas</h4></li>
            </ul>
            <p class="text-x-mediumgrey text-xl leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. 
              Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <h2 class="text-x-black text-5xl mt-16 font-bold tracking-[-2px] leading-[48px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </h2>
            <p class="text-x-mediumgrey text-xl leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. 
              Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
            </p>
          </div>
        </article>
      </section>

      <section class="px-[80px] py-[40px]">
        <div class="flex flex-col gap-8 px-5 py-[40px] border-b border-x-mediumgrey border-opacity-30">
          <h2 class="text-x-black text-4xl font-bold tracking-[-2px] leading-[48px]">What to read next</h2>
          <div class="flex justify-between items-center gap-6">
            <div class="flex flex-col gap-4 hover:cursor-pointer">
              <img src="@/assets/images/misc/blog2.png" alt="Two woman in erase board">
              <p class="text-x-black text-sm  mt-5 font-medium leading-[20px]">By <span class="text-x-yellow">John Doe</span> &nbsp;|&nbsp; Aug 23, 2021</p>
              <h3 class="text-x-black text-4xl font-bold leading-[40px] tracking-[-1px]">A UX Case Study Creating a Studious Environment for Students:</h3>
              <p class="text-x-black text-xl text-opacity-70 leading-[28px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
            <div class="flex flex-col gap-4 hover:cursor-pointer">
              <img src="@/assets/images/misc/blog3.png" alt="People doing handshake">
              <p class="text-x-black text-sm mt-5 font-medium leading-[20px]">By <span class="text-x-yellow">John Doe</span> &nbsp;|&nbsp; Aug 23, 2021</p>
              <h3 class="text-x-black text-4xl font-bold leading-[40px] tracking-[-1px]">A UX Case Study Creating a Studious Environment for Students:</h3>
              <p class="text-x-black text-xl text-opacity-70 leading-[28px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
            <div class="flex flex-col gap-4 hover:cursor-pointer">
              <img src="@/assets/images/misc/blog4.png" alt="Woman looking at man">
              <p class="text-x-black text-sm mt-5 font-medium leading-[20px]">By <span class="text-x-yellow">John Doe</span> &nbsp;|&nbsp; Aug 23, 2021</p>
              <h3 class="text-x-black text-4xl font-bold leading-[40px] tracking-[-1px]">A UX Case Study Creating a Studious Environment for Students:</h3>
              <p class="text-x-black text-xl text-opacity-70 leading-[28px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TeamContent/>
    </main>
  </MainLayout>
</template>
