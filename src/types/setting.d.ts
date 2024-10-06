import { PostData } from './data'
import { type Component } from 'vue'

export interface InfoForSendType {
  type: 'post' | 'reply' | 'update'
  data: PostData | null
}

export interface InfoBySendType extends InfoForSendType {
  topBarTitle: string
  topBarBtnText: string
  sendFunc: () => void
  repostLableText: string | null
  textareaPlaceholder: string
}

export type PostsGetMode = 'normal' | 'search' | 'delete' | 'favorite'

export type IconMenuItem = {
  index: string
  title: string
  icon: Component
  size?: number
  actionColor?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  onSelect?: () => void
  onClick?: () => void
}
