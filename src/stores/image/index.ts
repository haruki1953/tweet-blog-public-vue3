import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import {
  useAltDialogModule,
  useListModule,
  useManageModule,
  useUploadModule
} from './modules'
import type { ImageStoreData } from '@/types'

export const useImageStore = defineStore(
  'tweet-image',
  () => {
    // data
    const imageList = ref<ImageStoreData[]>([])

    // needRegetMark for when image change
    const needRegetMark = ref(false)
    const isNeedReget = computed(() => needRegetMark.value)
    const setNeedReget = (value?: boolean) => {
      needRegetMark.value = value !== undefined ? value : true
    }

    // useModules
    const listModule = useListModule({
      imageList
    })
    const manageModule = useManageModule({
      imageList
    })
    const uploadModule = useUploadModule({
      manageAfterUploadImage: manageModule.manageAfterUploadImage
    })
    const altDialogModule = useAltDialogModule()

    return {
      imageList,
      isNeedReget,
      setNeedReget,
      ...listModule,
      ...uploadModule,
      ...manageModule,
      ...altDialogModule
    }
  },
  {
    persist: true // 持久化
  }
)
