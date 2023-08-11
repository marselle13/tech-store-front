<template>
  <ul v-if="items?.length" class="flex gap-6">
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
  <div class="grid grid-cols-6 gap-6">
    <div
      class="flex flex-col justify-center bg-no-repeat px-10 py-8 text-center h-full gap-10"
      :class="[image]"
    >
      <h3 class="text-2xl text-white font-semibold">{{ product }}</h3>
      <router-link to="#" class="text-white underline">See All Products</router-link>
    </div>
    <SellItem v-for="index in 5" :key="index" />
  </div>
</template>
<script setup>
import SellItem from '@/components/SellItem.vue'
defineProps({
  product: { type: String, required: true },
  items: { type: Array, required: false },
  image: { type: String, required: true },
})
</script>
