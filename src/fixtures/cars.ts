import { ICarsData, IColumns } from "./types";

export const columns: IColumns[] = [
  { title: 'Make', field: 'make' },
  { title: 'Model', field: 'model' },
  { title: 'Price', field: 'price' },
]

export const carsData: ICarsData[] = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxter", price: 72000 }
];