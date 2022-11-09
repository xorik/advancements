import { useDropZone } from '@vueuse/core'
import { Ref } from 'vue'

import { AdvancementFile } from '../interface/advancement'

interface UploadEmit {
  (e: 'update', value: AdvancementFile): void
}

function useUpload(emit: UploadEmit, dropZoneRef: Ref<HTMLDivElement | undefined>) {
  async function onDrop(files: File[] | null) {
    if (files === null || files.length === 0) {
      return
    }

    emit('update', JSON.parse(await files[0].text()))
  }

  const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)

  return {
    isOverDropZone,
  }
}

export { useUpload }
export type { UploadEmit }
