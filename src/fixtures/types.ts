export interface ICarsData {
  make: string,
  model: string,
  colour: string,
  price: number,
}

export interface IColumns {
  title: string,
  field: string,
  type: 'numeric' | 'string',
  validate?: (arg0: ICarsData) => boolean
}