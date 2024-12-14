// 关于导入与导出，平台所代表字段
export const platformKeyMap = {
  x: {
    key: 'X',
    name: 'X / Twitter'
  }
} as const
export const platformKeyEnum = ['X'] as const

// 类型检查以确保 platformKeyEnum 与 platformKeyMap 的值是同步的
export type PlatformKeyMapValues =
  (typeof platformKeyMap)[keyof typeof platformKeyMap]['key']
export type PlatformKeyEnumValues = (typeof platformKeyEnum)[number]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const platformKeyMapTest: PlatformKeyMapValues[] = [...platformKeyEnum]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const platformKeyEnumTest: PlatformKeyEnumValues[] = Object.values(
  platformKeyMap
).map((i) => i.key)

export const fetchProxyConfig = {
  testUrlDefault: 'https://www.google.com'
}
