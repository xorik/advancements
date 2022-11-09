<script setup lang="ts">
defineProps<{
  done: number
  total: number
  wide?: boolean
}>()
</script>

<template>
  <div class="flex items-center gap-2">
    <progress class="progress progress-accent" :class="{ 'h-4': wide }" :value="done" :max="total"></progress>
    <span class="flex-shrink-0 text-xs">{{ done }} / {{ total }}</span>
  </div>
</template>
