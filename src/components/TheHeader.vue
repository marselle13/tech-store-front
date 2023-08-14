<template>
  <header>
    <section class="bg-black py-2">
      <div class="max-w-[90rem] pl-28 pr-8 mx-auto flex justify-between w-full">
        <p class="text-white"><span class="text-light-gray">Mon-Thu: </span>9:00 AM - 5:30 PM</p>
        <p class="text-white hidden xl:block">
          <span class="text-light-gray"
            >Visit our showroom in 1234 Street Adress City Address, 1234
          </span>
          <a> Contact Us </a>
        </p>
        <p class="text-white hidden xl:block">Call Us: (00) 1234 5678</p>
      </div>
    </section>
    <section class="border-b-2 py-4 xl:py-6 bg-custom-blue xl:bg-transparent">
      <div class="flex items-center justify-between max-w-[90rem] px-3 md:px-8 1xl:px-0 mx-auto">
        <nav class="flex gap-2 md:gap-10 xl:pl-6 w-full items-center xl:h-[60px]">
          <div
            class="bg-[url('@/assets/elipse.svg')] bg-no-repeat xl:bg-none rounded-full w-16 h-12 xl:w-auto xl:h-auto absolute xl:static top-2 flex justify-center"
          >
            <MainIcon fill="fill-white xl:fill-[#0156FF]" class="flex-shrink-0 block" />
          </div>
          <BurgerIcon class="flex-shrink-0 xl:hidden" @click="burger = true" />
          <Transition mode="out-in" name="fade">
            <div
              v-if="(!isTablet && !search) || burger"
              class="fixed top-0 left-0 w-11/12 md:w-1/3 bg-white xl:static z-20 p-4 h-full xl:w-auto"
            >
              <div class="flex justify-between border-b border-[#CACDD8] pb-4 mb-4 xl:hidden">
                <MainIcon />
                <button @click="burger = false"><CloseIcon fill="black" /></button>
              </div>
              <ul
                class="xl:flex space-y-4 xl:space-y-0 gap-6 items-center font-normal xl:font-semibold text-sm"
              >
                <li class="hover:text-custom-blue"><router-link to="#">Laptops</router-link></li>
                <li class="hover:text-custom-blue">
                  <router-link to="#">Desktop PCs</router-link>
                </li>
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
                <li class="pt-2">
                  <router-link
                    to="#"
                    class="text-custom-blue border-2 rounded-[3rem] border-custom-blue px-6 py-2"
                    >Our Deals</router-link
                  >
                </li>
              </ul>
            </div>
            <div
              class="w-full bg-[#F5F7FF] rounded-[2rem] relative pl-8 pr-5 py-4 hidden xl:flex flex-row items-center justify-between mr-6 gap-4"
              v-else-if="search"
            >
              <input
                placeholder="Search entier store here..."
                class="w-11/12 bg-[#F5F7FF] outline-none"
              />
              <SearchIcon class="relative z-10" />
            </div>
          </Transition>
          <div
            class="w-full bg-[#F5F7FF] rounded-[2rem] relative pl-2 md:pl-8 pr-5 py-4 flex flex-row-reverse items-center justify-end gap-1 md:gap-4 xl:hidden mr-2 md:mr-6"
          >
            <input
              :placeholder="!isTablet ? 'Search entier store here...' : 'Search here'"
              class="w-11/12 bg-[#F5F7FF] outline-none text-xs md:text-base"
            />
            <SearchIcon class="relative z-10" />
          </div>
        </nav>
        <div class="flex items-center gap-4 md:gap-6">
          <Transition mode="out-in" name="fade">
            <button @click="search = true" v-if="!search" class="hidden xl:block">
              <SearchIcon />
            </button>
            <button @click="search = false" v-else class="hidden xl:block"><CloseIcon /></button>
          </Transition>
          <CartIcon />
          <div class="flex justify-center items-center w-10 h-10 rounded-full overflow-hidden">
            <LoginIcon />
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
import { onMounted, ref } from 'vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import BurgerIcon from '@/components/icons/BurgerIcon.vue'
import LoginIcon from '@/components/icons/LoginIcon.vue'

const search = ref(false)
const burger = ref(false)
const isTablet = ref(false)

function checkWidth() {
  isTablet.value = window.innerWidth <= 1280
}

onMounted(() => {
  checkWidth()
  window.addEventListener('resize', checkWidth)
})
</script>
<style scoped>
@media (min-width: 1280px) {
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
}
@media (max-width: 1279px) {
  .fade-enter-active,
  .fade-leave-active {
    transition: transform 0.3s ease-in-out;
  }
  .fade-enter-to {
    transform: translateX(0%);
  }

  .fade-enter-from,
  .fade-leave-to {
    transform: translateX(-100%);
  }
}
</style>
