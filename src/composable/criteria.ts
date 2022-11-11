import { computed } from 'vue'

import { criteriaList } from '../data/advancements'
import { Advancement, AdvancementFileItem } from '../interface/advancement'

interface CriteriaItem {
  key: string
  title: string
  icon: string
  done: boolean
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
      const unfinished =
        props.data?.criteria[key] !== undefined || props.data?.criteria['minecraft:' + key] !== undefined

      const title = key.replaceAll('_', ' ')

      list.push({
        key: key,
        title: title[0].toUpperCase() + title.slice(1).toLowerCase(),
        icon: currentCriteria.items[key],
        done: !unfinished,
      })
    }

    return list.sort((a, b) => +b.done - +a.done)
  })

  return {
    criteria,
    currentCriteria,
  }
}

export { useCriteria }
export type { CriteriaProps }
