import { ICarsData, IColumns } from "./types";

export const columns: IColumns[] = [
  { title: 'Make', field: 'make', type: 'string', validate: (rowData: ICarsData) => emptyStringValidation(rowData.make) },
  { title: 'Model', field: 'model', type: 'string', validate: (rowData: ICarsData) => emptyStringValidation(rowData.model)},
  { title: 'Colour', field: 'colour', type: 'string', validate: (rowData: ICarsData) => emptyStringValidation(rowData.colour) },
  { title: 'Price', field: 'price', type: 'numeric' },
]

export const carsData: ICarsData[] = [
  { make: "Toyota", model: "Celica", colour: "red", price: 35000 },
  { make: "Ford", model: "Mondeo", colour: "black", price: 32000 },
  { make: "Porsche", model: "Boxter", colour: "blue", price: 72000 }
];

export const oldCarRow: ICarsData = { make: "Toyota", model: "Celica", colour: "red", price: 35000 }

export const newCarRow: ICarsData = { make: 'Bugatti', model: 'Veyron', colour: 'Pink', price: 1000000 }

const emptyStringValidation = (val: string): boolean => {
  return val !== ''
}