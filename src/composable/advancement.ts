import { ref } from 'vue'

import { advancements } from '../data/advancements'
import { Advancement, AdvancementFile, AdvancementFileItem } from '../interface/advancement'

interface PendingAdvancement {
  key: string
  advancement: Advancement
  data?: AdvancementFileItem
}

function useAdvancements() {
  const unfinishedAdvancements = ref<PendingAdvancement[] | null>(null)

  function updateAdvancements(file: AdvancementFile) {
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

  const advancementsCount = Object.keys(advancements).length

  return {
    unfinishedAdvancements,
    updateAdvancements,
    advancementsCount,
  }
}

export { useAdvancements }
