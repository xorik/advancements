<script setup lang="ts">
import { Advancement } from '../interface/advancement'
import { Sprite } from '../interface/icon'

defineProps<{
  data: Advancement
}>()
</script>

<template>
  <div class="relative inline-block" :title="data.title">
    <Icon :item="data.icon" :collection="Sprite.Inventory" class="absolute m-2"></Icon>
    <img v-if="data.type === 'plain'" src="../assets/Advancement-plain-raw.webp" />
    <img v-else-if="data.type === 'oval'" src="../assets/Advancement-oval-raw.webp" />
    <img v-else src="../assets/Advancement-fancy-raw.webp" />
  </div>
</template>
