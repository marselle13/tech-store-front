<template>
  <main class="max-w-[90rem] mx-auto relative">
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
      <swiper navigation :slides-per-view="5" space-between="25" autoplay>
        <swiper-slide class="px-6" v-for="index in 20" :key="index">
          <SellItem />
        </swiper-slide>
      </swiper>
      <div class="flex justify-center bg-[#F5F7FF] py-5">
        <img :src="ad" alt="ad" />
      </div>
    </section>
  </main>
</template>
<script setup>
import SliderImage from '@/assets/msi-slide.png'
import SliderImage2 from '@/assets/msi-slide-2.png'
import ad from '@/assets/ad.png'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import SwiperCore from 'swiper'

SwiperCore.use([Navigation, Autoplay])

import 'swiper/css'
import 'swiper/css/navigation'
import SellItem from '@/components/SellItem.vue'
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
