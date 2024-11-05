<script setup lang="ts">
import { ref } from 'vue';
import MainLayout from '@/layouts/MainLayout.vue';

const selectedProvince = ref('');
const selectedCity = ref('');
const cities = ref<string[]>([]);
const provinces = [
  { name: 'Aceh', capital: 'Banda Aceh' },
  { name: 'Bali', capital: 'Denpasar' },
  { name: 'Banten', capital: 'Serang' },
  { name: 'Bengkulu', capital: 'Bengkulu' },
  { name: 'DI Yogyakarta', capital: 'Yogyakarta' },
  { name: 'DKI Jakarta', capital: 'Jakarta' },
  { name: 'Gorontalo', capital: 'Gorontalo' },
  { name: 'Jambi', capital: 'Jambi' },
  { name: 'Jawa Barat', capital: 'Bandung' },
  { name: 'Jawa Tengah', capital: 'Semarang' },
  { name: 'Jawa Timur', capital: 'Surabaya' },
  { name: 'Kalimantan Barat', capital: 'Pontianak' },
  { name: 'Kalimantan Selatan', capital: 'Banjarmasin' },
  { name: 'Kalimantan Tengah', capital: 'Palangka Raya' },
  { name: 'Kalimantan Timur', capital: 'Samarinda' },
  { name: 'Kalimantan Utara', capital: 'Tanjung Selor' },
  { name: 'Kepulauan Bangka Belitung', capital: 'Pangkal Pinang' },
  { name: 'Kepulauan Riau', capital: 'Tanjung Pinang' },
  { name: 'Lampung', capital: 'Bandar Lampung' },
  { name: 'Maluku', capital: 'Ambon' },
  { name: 'Maluku Utara', capital: 'Sofifi' },
  { name: 'Nusa Tenggara Barat', capital: 'Mataram' },
  { name: 'Nusa Tenggara Timur', capital: 'Kupang' },
  { name: 'Papua', capital: 'Jayapura' },
  { name: 'Papua Barat', capital: 'Manokwari' },
  { name: 'Riau', capital: 'Pekanbaru' },
  { name: 'Sulawesi Barat', capital: 'Mamuju' },
  { name: 'Sulawesi Selatan', capital: 'Makassar' },
  { name: 'Sulawesi Tengah', capital: 'Palu' },
  { name: 'Sulawesi Tenggara', capital: 'Kendari' },
  { name: 'Sulawesi Utara', capital: 'Manado' },
  { name: 'Sumatera Barat', capital: 'Padang' },
  { name: 'Sumatera Selatan', capital: 'Palembang' },
  { name: 'Sumatera Utara', capital: 'Medan' },
];

function updateCities() {
  const selectedProvinceData = provinces.find(province => province.name === selectedProvince.value);
  cities.value = selectedProvinceData ? [selectedProvinceData.capital] : [];
  selectedCity.value = '';
}
</script>

<template>
  <MainLayout>
    <div class="flex flex-col items-center text-center mx-auto max-w-[780px] py-36">
      <div class="pb-28">
        <h1 class="text-x-black text-base font-bold tracking-[3px] uppercase mb-2">Contact us</h1>
        <h2 class="text-x-black text-5xl font-bold tracking-tighter leading-none max-md:max-w-full max-md:text-4xl">Let’s Start a Conversation</h2>
        <p class="text-x-mediumgrey text-base z-10 self-stretch mt-6 w-full leading-7 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        </p>
      </div>
      <div class="flex flex-col-2 p-20 gap-20 bg-x-yellow mb-8 w-full mx-auto">
        <div class="flex flex-col w-6/12 max-md:w-full text-left">
          <div class="text-x-mediumgrey text-sm pb-4 border-b border-x-mediumgrey">Working hours
          </div>
          <h3 class="text-mediumgrey text-xl font-semibold py-4">Monday To Friday<br>9:00 AM to 8:00 PM </h3>
          <p class="text-x-mediumgrey text-base">Our Support Team is available 24/7</p>
        </div>
        <div class="flex flex-col w-6/12 max-md:w-full text-left">
          <div class="text-x-mediumgrey text-sm pb-4 border-b border-x-mediumgrey">Contact Us
          </div>
            <h5 class="text-darkgrey text-xl font-semibold py-4">020 7993 2905</h5>
          <p class="text-x-mediumgrey text-base">hello@finsweet.com</p>
          </div>
        </div>   
      
      <form class="flex flex-col space-y-5 mt-2 max-w-7xl w-full">
        <input type="text" placeholder="Full Name" class="p-7 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        <input type="email" placeholder="Your Email" class="p-7 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

        <div class="flex space-x-4">
          <select v-model="selectedProvince" @change="updateCities" class="flex-1 p-7 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option value="" disabled selected>Province</option>
            <option v-for="province in provinces" :key="province.name" :value="province.name">{{ province.name }}</option>
          </select>
          <select v-model="selectedCity" class="flex-1 p-7 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option value="" disabled selected>City</option>
            <option v-for="city in cities" :key="city">{{ city }}</option>
          </select>
        </div>

        <textarea placeholder="Message" class="p-7 h-40 border border-gray-300 focus:outline-none focus:border-blue-500"></textarea>

        <button type="submit" class="text-base text-x-blackblack p-7 bg-blue-600 font-bold hover:bg-x-yellow transition duration-150 ease-in-out">
          Send Message
        </button>
      </form>
    </div>
  </MainLayout>
</template>
