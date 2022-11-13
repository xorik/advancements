import { Sprite } from './icon'

interface AdvancementFileItem {
  criteria: Record<string, string | undefined>
  done: boolean
}

type AdvancementFile = Record<string, AdvancementFileItem>

interface Advancement {
  title: string
  description: string
  icon: string
  type: 'plain' | 'oval' | 'fancy'
  rowspan?: number
}

interface Criteria {
  iconCollection: Sprite
  items: Record<string, string>
  noGap?: boolean
}

export type { Advancement, AdvancementFile, AdvancementFileItem, Criteria }
