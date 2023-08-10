<template>
  <div>
    <swiper navigation class="main max-w-[90rem] mx-auto relative" :slides-per-view="1">
      <swiper-slide>
        <img :src="SliderImage" alt="image" class="w-full h-[20rem]" />
      </swiper-slide>
      <swiper-slide>
        <img :src="SliderImage2" alt="image" class="w-full h-[20rem]" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import SliderImage from '@/assets/msi-slide.png'
import SliderImage2 from '@/assets/msi-slide-2.png'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import SwiperCore from 'swiper'

SwiperCore.use([Navigation])

import 'swiper/css'
import 'swiper/css/navigation'
</script>
<style>
.main .swiper-button-next,
.main .swiper-button-prev {
  width: 46px;
  height: 79px;
  background-repeat: no-repeat;
}
.main .swiper-button-prev {
  background-image: url('../assets/back.svg');
  left: 0;
}

.main .swiper-button-next {
  background-image: url('../assets/next.svg');
  right: 0;
}

.main .swiper-button-next::after,
.main .swiper-button-prev::after {
  content: '';
}
</style>
