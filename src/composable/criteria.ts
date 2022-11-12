import { useTimeAgo } from '@vueuse/core'
import { computed, Ref } from 'vue'

import { criteriaList } from '../data/advancements'
import { Advancement, AdvancementFileItem } from '../interface/advancement'

interface CriteriaItem {
  key: string
  title: string
  icon: string
  done: boolean
  finishedAt?: Ref<string>
}

interface CriteriaProps {
  index: string
  advancement: Advancement
  data?: AdvancementFileItem
}

function useCriteria(props: CriteriaProps) {
  const currentCriteria = criteriaList[props.index]

  const criteria = computed(function () {
    if (currentCriteria === undefined) {
      return null
    }

    const list: CriteriaItem[] = []

    // First set finished criteria
    for (const key in currentCriteria.items) {
      const jsonFileCriteria = props.data?.criteria[key] ?? props.data?.criteria['minecraft:' + key]

      const title = key.replaceAll('_', ' ')
      const dateParts = jsonFileCriteria?.split(' ')
      const finishedAt = dateParts !== undefined ? new Date(dateParts[0] + 'T' + dateParts[1]) : undefined

      list.push({
        key: key,
        title: title[0].toUpperCase() + title.slice(1).toLowerCase(),
        icon: currentCriteria.items[key],
        done: jsonFileCriteria !== undefined,
        finishedAt: finishedAt !== undefined ? useTimeAgo(new Date(finishedAt)) : undefined,
      })
    }

    return list.sort((a, b) => +a.done - +b.done)
  })

  return {
    criteria,
    currentCriteria,
  }
}

export { useCriteria }
export type { CriteriaProps }
