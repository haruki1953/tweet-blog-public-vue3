import type {
  ProfileAddAvatarRes,
  ProfileDeleteAvatarNotUsedRes,
  ProfileDeleteAvatarRes,
  ProfileGetAllRes,
  ProfileUpdateAvatarRes,
  ProfileUpdateNameBioJsonType,
  ProfileUpdateNameBioRes,
  ProfileUpdateSocialMediasJsonType,
  ProfileUpdateSocialMediasRes
} from '@/types'
import { http } from '@/utils'

export const profileGetAllApi = (): ProfileGetAllRes => {
  return http.get('/profile/all')
}

export const profileUpdateNameBioApi = ({
  name,
  bio
}: ProfileUpdateNameBioJsonType): ProfileUpdateNameBioRes => {
  return http.put('/profile/name-bio', { name, bio })
}

export const profileAddAvatarApi = (imageBlob: Blob): ProfileAddAvatarRes => {
  let fileType = imageBlob.type.split('/')[1] // 获取文件类型后缀
  if (fileType === 'jpeg') {
    fileType = 'jpg' // 将 jpeg 转换为 jpg
  }
  const fd = new FormData()
  fd.append('image', imageBlob, `image.${fileType}`)
  return http.post('/profile/avatar', fd)
}

export const profileUpdateAvatarApi = (
  uuid: string
): ProfileUpdateAvatarRes => {
  return http.put('/profile/avatar', { uuid })
}

export const profileDeleteAvatarApi = (
  uuid: string
): ProfileDeleteAvatarRes => {
  return http.delete(`/profile/avatar/uuid/${uuid}`)
}

export const profileDeleteAvatarNotUsedApi =
  (): ProfileDeleteAvatarNotUsedRes => {
    return http.delete(`/profile/avatar/not-used`)
  }

export const profileUpdateSocialMediasApi = (
  json: ProfileUpdateSocialMediasJsonType
): ProfileUpdateSocialMediasRes => {
  return http.put('/profile/social-medias', json)
}
