<script setup lang="ts">
import { IconProps, useIcon } from '../composable/icon'

const props = defineProps<IconProps>()

const { collection, imgStyle, wrapStyle } = useIcon(props)
</script>

<template>
  <div v-if="collection.zoom === 1" :style="imgStyle" class="inline-block rendering-pixelated"></div>
  <div v-else :style="wrapStyle" class="inline-block">
    <div :style="imgStyle" class="rendering-pixelated"></div>
  </div>
</template>
