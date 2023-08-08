<template>
  <header>
    <section class="bg-black py-2">
      <div class="max-w-[90rem] mx-auto flex justify-between w-full">
        <p class="text-white"><span class="text-light-gray">Mon-Thu: </span>9:00 AM - 5:30 PM</p>
        <p class="text-white">
          <span class="text-light-gray"
            >Visit our showroom in 1234 Street Adress City Address, 1234
          </span>
          <a> Contact Us </a>
        </p>
        <p class="text-white">Call Us: (00) 1234 5678</p>
      </div>
    </section>
    <section class="border-b-2 py-6">
      <div class="flex items-center justify-between max-w-[90rem] mx-auto">
        <nav class="flex gap-14 pl-6 w-full items-center h-[60px]">
          <MainIcon class="flex-shrink-0" />
          <Transition mode="out-in" name="fade">
            <ul class="flex gap-6 items-center font-semibold text-sm" v-if="!search">
              <li class="hover:text-custom-blue"><router-link to="#">Laptops</router-link></li>
              <li class="hover:text-custom-blue"><router-link to="#">Desktop PCs</router-link></li>
              <li class="hover:text-custom-blue">
                <router-link to="#">Networking Devices</router-link>
              </li>
              <li class="hover:text-custom-blue">
                <router-link to="#">Printers & Scanners</router-link>
              </li>
              <li class="hover:text-custom-blue"><router-link to="#">PC Parts </router-link></li>
              <li class="hover:text-custom-blue">
                <router-link to="#">All Other Products</router-link>
              </li>
              <li class="hover:text-custom-blue"><router-link to="#">Repairs</router-link></li>
              <li>
                <router-link
                  to="#"
                  class="text-custom-blue border-2 rounded-[3rem] border-custom-blue px-6 py-2"
                  >Our Deals</router-link
                >
              </li>
            </ul>
            <div
              class="w-full bg-[#F5F7FF] rounded-[2rem] relative pl-8 pr-5 py-4 flex items-center justify-between mr-6"
              v-else
            >
              <input
                placeholder="Search entier store here..."
                class="absolute w-11/12 bg-[#F5F7FF] outline-none"
              />
              d
              <SearchIcon class="relative z-10" />
            </div>
          </Transition>
        </nav>
        <div class="flex items-center gap-6">
          <Transition mode="out-in" name="fade">
            <button @click="search = true" v-if="!search"><SearchIcon /></button>
            <button @click="search = false" v-else><CloseIcon /></button>
          </Transition>
          <CartIcon />
          <div class="flex justify-center w-10 h-10 rounded-full overflow-hidden">
            <img :src="UserIcon" alt="user" />
          </div>
        </div>
      </div>
    </section>
  </header>
</template>
<script setup>
import MainIcon from '@/components/icons/MainIcon.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import CartIcon from '@/components/icons/CartIcon.vue'
import UserIcon from '@/assets/icon.png'
import { ref } from 'vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'

const search = ref(false)
</script>
<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
