<script setup lang="ts">
import { ref } from 'vue'

import AdvancementCard from './components/AdvancementCard.vue'
import Progress from './components/Progress.vue'
import { advancements } from './data/advancements'
import { Advancement, AdvancementFile, AdvancementFileItem } from './interface/advancement'

interface PendingAdvancement {
  key: string
  advancement: Advancement
  data?: AdvancementFileItem
}

const unfinishedAdvancements = ref<PendingAdvancement[] | null>(null)

function test(file: AdvancementFile) {
  const list: PendingAdvancement[] = []

  for (const key in advancements) {
    if (!file['minecraft:' + key]?.done) {
      list.push({
        key: key,
        advancement: advancements[key],
        data: file['minecraft:' + key],
      })
    }
  }

  unfinishedAdvancements.value = list
}
</script>

<template>
  <div class="mx-auto min-w-[320px] max-w-3xl p-5">
    <Upload @update="test" />

    <h3 v-if="unfinishedAdvancements?.length === 0" class="m-3 text-center text-2xl text-accent">
      All advancements are finished!
    </h3>
    <div v-else-if="unfinishedAdvancements !== null">
      <h3 class="m-3 text-center text-2xl text-accent">Advancements</h3>

      <Progress
        :done="Object.keys(advancements).length - unfinishedAdvancements.length"
        :total="Object.keys(advancements).length"
        :wide="true"
        class="my-5"
      />

      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <AdvancementCard
          v-for="adv in unfinishedAdvancements"
          :key="adv.key"
          :index="adv.key"
          :advancement="adv.advancement"
          :data="adv.data"
          :class="[adv.advancement.rowspan ? 'row-span-' + adv.advancement.rowspan : undefined]"
        />
      </div>
    </div>
  </div>
</template>
