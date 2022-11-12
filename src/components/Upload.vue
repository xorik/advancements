<script setup lang="ts">
import { ref } from 'vue'

import { UploadEmit, useUpload } from '../composable/upload'

const emit = defineEmits<UploadEmit>()
const dropZoneRef = ref<HTMLDivElement>()

const { isOverDropZone } = useUpload(emit, dropZoneRef)
</script>

<template>
  <div
    ref="dropZoneRef"
    class="flex items-center items-center justify-around rounded-xl border-2 border-dashed p-8"
    :class="{ 'bg-base-300': isOverDropZone }"
  >
    <i-ph-upload-simple-fill class="flex-shrink-0 text-5xl" />
    <div class="hidden flex-shrink sm:inline-block">
      <ul class="list-disc">
        <li>In Minecraft select your world and click "Edit"</li>
        <li>Then click "Open World Folder"</li>
        <li>Open "advancements" folder</li>
        <li>Drag & drop a JSON file in this box</li>
      </ul>
    </div>
  </div>
</template>
