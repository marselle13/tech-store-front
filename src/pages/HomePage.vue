<template>
  <main class="max-w-[90rem] md:px-2 px-4 1xl:px-0 mx-auto relative">
    <swiper navigation :slides-per-view="1">
      <swiper-slide>
        <img :src="SliderImage" alt="image" class="w-full h-[20rem]" />
      </swiper-slide>
      <swiper-slide>
        <img :src="SliderImage2" alt="image" class="w-full h-[20rem]" />
      </swiper-slide>
    </swiper>
    <section class="my-8 space-y-5">
      <div class="flex justify-between items-center">
        <h4 class="text-2xl font-semibold">New Products</h4>
        <router-link to="#" class="text-custom-blue underline">See All New Products</router-link>
      </div>
      <swiper :breakpoints="swiperOptions" :navigation="isDesktop" autoplay>
        <swiper-slide v-for="index in 20" :key="index">
          <SellItem />
        </swiper-slide>
      </swiper>
      <div class="flex justify-center bg-[#F5F7FF] py-5">
        <img :src="ad" alt="ad" />
      </div>
      <ProductList image="bg-custom-builds" product="Custom builds" />
      <ProductList :items="msiItems" image="bg-msi-laptops" product="MSI Laptops" />
      <ProductList :items="desktopItems" image="bg-desktops" product="Desktops" />
      <ProductList image="bg-monitors" product="Gaming Monitors" />
    </section>
  </main>
</template>
<script setup>
import SliderImage from '@/assets/msi-slide.png'
import SliderImageMobile from '@/assets/msi-slide-mobile.png'
import SliderImage2 from '@/assets/msi-slide-2.png'
import SellItem from '@/components/SellItem.vue'
import ProductList from '@/components/ProductList.vue'
import ad from '@/assets/ad.png'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import SwiperCore from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import { onBeforeMount, ref } from 'vue'

SwiperCore.use([Navigation, Autoplay])

const msiItems = ['MSI GS Series', 'MSI GT Series', 'MSI GL Series', 'MSI GE Series']
const desktopItems = ['MSI Infinute Series', 'MSI Triden', 'MSI GL Series', 'MSI Nightblade']
const swiperOptions = {
  1: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 3.5,
  },
  1440: {
    slidesPerView: 5,
    spaceBetween: 25,
  },
}

const isDesktop = ref(false)

function checkWidth() {
  isDesktop.value = window.innerWidth >= 1440
}

onBeforeMount(() => {
  checkWidth()
  window.addEventListener('resize', checkWidth)
})
</script>
<style>
.swiper-button-next,
.swiper-button-prev {
  width: 46px;
  height: 79px;
  background-repeat: no-repeat;
}
.swiper-button-prev {
  background-image: url('../assets/back.svg');
  left: 0;
}

.swiper-button-next {
  background-image: url('../assets/next.svg');
  right: 0;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  content: '';
}
</style>
