<script setup lang="ts">
defineProps<{
  done: number
  total: number
}>()
</script>

<template>
  <div class="flex items-center gap-2">
    <progress class="progress progress-accent" :value="done" :max="total"></progress>
    <span class="flex-shrink-0 text-xs">{{ done }} / {{ total }}</span>
  </div>
</template>
