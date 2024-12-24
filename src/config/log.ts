export const logConfig = {
  logCursorTakeNum: 30,
  limitShow: {
    startAmounts: 15,
    limitAmounts: 15
  },
  deleteKeepNumDefault: 20
} as const

// 关于日志的类型
export const logTypeMap = {
  error: {
    key: 'error',
    text: 'ERROR'
  },
  warning: {
    key: 'warning',
    text: 'WARNING'
  },
  success: {
    key: 'success',
    text: 'SUCCESS'
  },
  info: {
    key: 'info',
    text: 'INFO'
  }
} as const
// 这个手动写出来的原因是，zod枚举需要字面量类型数组
export const logTypeEnum = ['error', 'warning', 'success', 'info'] as const

// 类型检查以确保 logTypeEnum 与 logTypeMap 的值是同步的
export type LogTypeMapValues =
  | (typeof logTypeMap)[keyof typeof logTypeMap]['key']
  | keyof typeof logTypeMap
export type LogTypeEnumValues = (typeof logTypeEnum)[number]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const logTypeMapTest: LogTypeMapValues[] = [] as LogTypeEnumValues[]
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const logTypeEnumTest: LogTypeEnumValues[] = [] as LogTypeMapValues[]
