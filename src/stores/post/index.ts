import type { PosPoolItem, PostData } from '@/types'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import {
  useControlModule,
  useListModule,
  useManageModule,
  usePoolModule,
  useReadModule
} from './modules'

export const usePostStore = defineStore(
  'tweet-post',
  () => {
    // 多Module共享数据
    const postList = ref<PostData[][]>([])
    const postPool = ref<PosPoolItem[]>([])

    // needRegetMark for when data change
    const needRegetMark = ref(false)
    const isNeedReget = computed(() => needRegetMark.value)
    const setNeedReget = (value: boolean = true) => {
      needRegetMark.value = value
    }

    // listModule
    const listModule = useListModule({
      postList
    })

    // poolModule, for PostPage
    const poolModule = usePoolModule({
      postPool
    })

    // manageModule, for manage data
    const manageModule = useManageModule({
      postList,
      postPool
    })

    // controlModule
    const controlModule = useControlModule()

    // readModule
    const readModule = useReadModule({
      postList
    })

    return {
      ...listModule,
      ...poolModule,
      ...controlModule,
      ...manageModule,
      ...readModule,
      postList,
      postPool,
      setNeedReget,
      isNeedReget
    }
  },
  {
    persist: true // 持久化
  }
)
