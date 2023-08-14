<template>
  <input
    :type="type"
    :placeholder="placeholder"
    class="text-white placeholder-white p-4 bg-transparent border-2 border-white rounded"
  />
</template>
<script setup>
defineProps({
  type: { type: String, required: false, default: 'text' },
  placeholder: { type: String, required: false },
})
</script>
