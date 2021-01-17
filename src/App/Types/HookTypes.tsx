export type ITarget = {
  name?: string | any
  _id?: string
  id?: string
  value?: string
}

export type IUseForm = [
  any,
  (value: any) => void,
  (value: any) => void
]
