<script setup lang="ts">
import { CriteriaProps, useCriteria } from '../composable/criteria'

const props = defineProps<CriteriaProps>()

const { criteria, currentCriteria } = useCriteria(props)
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
