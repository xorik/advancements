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
    class="flex items-center items-center justify-around rounded-xl border-2 border-dashed p-10"
    :class="{ 'bg-base-300': isOverDropZone }"
  >
    <i-ph-upload-simple-fill class="flex-shrink-0 text-5xl" />
    <div class="hidden flex-shrink sm:inline-block">
      <ul class="list-disc">
        <li>Select your world</li>
        <li>Click "Edit" then "Open World Folder"</li>
        <li>Open "advancements" folder and drop a JSON file</li>
      </ul>
    </div>
  </div>
</template>
