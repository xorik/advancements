<script setup lang="ts">
import AdvancementCard from './components/AdvancementCard.vue'
import { advancements } from './data/advancements'
</script>

<template>
  <div class="mx-auto min-w-[320px] max-w-3xl p-5">
    <Upload />
    <h3 class="m-3 text-center text-2xl text-accent">Advancements</h3>
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <AdvancementCard
        v-for="(item, index) in advancements"
        :key="index"
        :index="index"
        :advancement="item"
        :class="[item.rowspan ? 'row-span-' + item.rowspan : undefined]"
      />
    </div>
  </div>
</template>
