<script setup lang="ts">
import { ref } from 'vue'

import { criteriaList } from '../data/advancements'
import { Advancement, AdvancementFileItem } from '../interface/advancement'

const props = defineProps<{
  index: string
  advancement: Advancement
  data?: AdvancementFileItem
}>()

interface CriteriaItem {
  key: string
  icon: string
  done: boolean
}

const criteria = ref<CriteriaItem[] | null>(null)

// Check if current advancement has connected criteria list
const currentCriteria = criteriaList[props.index]
if (currentCriteria !== undefined) {
  const list: CriteriaItem[] = []

  // First set finished criteria
  for (const key in currentCriteria.items) {
    const unfinished = props.data?.criteria[key] !== undefined || props.data?.criteria['minecraft:' + key] !== undefined

    list.push({
      key: key,
      icon: currentCriteria.items[key],
      done: !unfinished,
    })
  }
  criteria.value = list.sort((a, b) => +b.done - +a.done)
}
</script>

<template>
  <div class="card card-compact bg-base-200">
    <div class="card-body flex-row items-center">
      <AdvancementIcon :data="advancement" class="flex-shrink-0" />
      <div>
        <p class="font-bold">{{ advancement.title }}</p>

        <div v-if="criteria !== null">
          <Progress :done="criteria.filter((c) => !c.done).length" :total="criteria.length" class="mb-3" />
          <div class="flex flex-wrap justify-between gap-1">
            <div v-for="item in criteria" :key="item.key" :title="item.key">
              <Icon
                :item="item.icon"
                :collection="currentCriteria.iconCollection"
                :class="{ 'opacity-30 grayscale': !item.done }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
