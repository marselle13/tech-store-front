<template>
  <ul v-if="items?.length" class="inline-flex flex-wrap gap-6 text-sm">
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
  <div class="space-y-3 md:space-y-0 md:flex md:gap-10">
    <div
      class="inline-flex flex-col flex-shrink-0 justify-center bg-no-repeat md:px-10 md:py-8 text-center md:w-[14rem] md:h-[21rem] md:gap-10 w-full h-[5rem] bg-cover bg-center"
      :class="image"
    >
      <h3 class="text-2xl text-white font-semibold">{{ product }}</h3>
      <router-link to="#" class="text-white underline">See All Products</router-link>
    </div>
    <swiper :breakpoints="swiperOptions">
      <swiper-slide v-for="index in 5" :key="index">
        <SellItem />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import SellItem from '@/components/SellItem.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

defineProps({
  product: { type: String, required: true },
  items: { type: Array, required: false },
  image: { type: String, required: true },
})

const swiperOptions = {
  1: {
    slidesPerView: 1.5,
    spaceBetween: 25,
  },
  768: {
    slidesPerView: 2.5,
  },
  1440: {
    slidesPerView: 5,
  },
}
</script>
