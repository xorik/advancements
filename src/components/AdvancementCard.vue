<script setup lang="ts">
import { ref } from 'vue'

import { criteria } from '../data/advancements'
import { Advancement, Criteria } from '../interface/advancement'

const props = defineProps<{
  index: string
  advancement: Advancement
}>()

const currentCriteria = ref<Criteria | null>(null)

if (criteria[props.index] !== undefined) {
  currentCriteria.value = criteria[props.index]
}
</script>

<template>
  <div class="card card-compact bg-base-200">
    <div class="card-body flex-row items-center">
      <AdvancementIcon :data="advancement" class="flex-shrink-0" />
      <div>
        <p class="mb-2 font-bold">{{ advancement.title }}</p>
        <div v-if="currentCriteria !== null" class="flex flex-wrap gap-1">
          <div v-for="(icon, key) in currentCriteria.items" :key="key" :title="key">
            <Icon :item="icon" :collection="currentCriteria.iconCollection" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
