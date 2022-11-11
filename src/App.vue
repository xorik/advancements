<script setup lang="ts">
import { useAdvancements } from './composable/advancement'

const { unfinishedAdvancements, updateAdvancements, advancementsCount } = useAdvancements()
</script>

<template>
  <Navbar />
  <div class="mx-auto min-w-[320px] max-w-3xl p-5">
    <Upload @update="updateAdvancements" />

    <h3 v-if="unfinishedAdvancements?.length === 0" class="m-3 text-center text-2xl text-accent">
      All advancements are finished!
    </h3>
    <div v-else-if="unfinishedAdvancements !== null">
      <h3 class="m-3 text-center text-2xl text-accent">Advancements</h3>

      <Progress
        :done="advancementsCount - unfinishedAdvancements.length"
        :total="advancementsCount"
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
