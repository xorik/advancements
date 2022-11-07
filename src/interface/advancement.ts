import { Sprite } from './icon'

interface AdvancementFileItem {
  criteria: Record<string, string>
  done: boolean
}

type AdvancementFile = Record<string, AdvancementFileItem>

interface Advancement {
  title: string
  icon: string
  type: 'plain' | 'oval' | 'fancy'
}

interface Criteria {
  iconCollection: Sprite
  items: Record<string, string>
}

export type { Advancement, AdvancementFile, Criteria }
