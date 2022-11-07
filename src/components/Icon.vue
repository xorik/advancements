<script setup lang="ts">
import { libraries } from '../data/icons'
import { Sprite } from '../interface/icon'

const props = defineProps<{
  item: string
  collection: Sprite
}>()

const collection = libraries[props.collection]

const index = (collection.positions[props.item] ?? collection.fallbackPosition) - 1
const colCount = collection.width / collection.size

const xOffset = (index % colCount) * collection.size
const yOffset = Math.floor(index / colCount) * collection.size

const imgStyle = {
  width: collection.size + 'px',
  height: collection.size + 'px',
  background: `url(${collection.url})`,
  backgroundPosition: `-${xOffset}px -${yOffset}px`,
}

const wrapStyle = {
  scale: collection.zoom,
  width: collection.size * collection.zoom + 'px',
  height: collection.size * collection.zoom + 'px',
  transformOrigin: '0 0',
}
</script>

<template>
  <div v-if="collection.zoom === 1" :style="imgStyle" class="inline-block rendering-pixelated"></div>
  <div v-else :style="wrapStyle" class="inline-block">
    <div :style="imgStyle" class="rendering-pixelated"></div>
  </div>
</template>
