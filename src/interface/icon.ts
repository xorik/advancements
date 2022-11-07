interface SpriteCollection {
  url: string
  size: number
  width: number
  zoom: number
  fallbackPosition: number // Missing icon index
  positions: Record<string, number>
}

const enum Sprite {
  Inventory = 'inventory',
  Entity = 'entity',
  Biome = 'biome',
}

export { Sprite }
export type { SpriteCollection }
