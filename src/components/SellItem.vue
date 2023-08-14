<template>
  <div class="space-y-2">
    <div class="flex items-center gap-2">
      <StockIcon />
      <p class="text-xs text-custom-green">in stock</p>
    </div>
    <div class="flex justify-center overflow-hidden">
      <img :src="Laptop" alt="laptop" />
    </div>
    <div class="flex items-center">
      <StarIcon v-for="index in 5" :key="index" />
      <p class="ml-2 text-sm text-light-gray">Reviews (4)</p>
    </div>
    <h3 class="text-sm">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h3>
    <div>
      <h5 class="text-sm text-dark-gray line-through">$500.00</h5>
      <h4 class="text-lg font-semibold">$499.00</h4>
    </div>
  </div>
</template>
<script setup>
import Laptop from '@/assets/leptop.png'
import StockIcon from '@/components/icons/StockIcon.vue'
import StarIcon from '@/components/icons/StarIcon.vue'
</script>
