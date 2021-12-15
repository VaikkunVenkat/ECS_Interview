import { ICarsData, IColumns } from "./types";

export const columns: IColumns[] = [
  { title: 'Make', field: 'make' },
  { title: 'Model', field: 'model' },
  { title: 'Colour', field: 'colour' },
  { title: 'Price', field: 'price' },
]

export const carsData: ICarsData[] = [
  { make: "Toyota", model: "Celica", colour: "red", price: 35000 },
  { make: "Ford", model: "Mondeo", colour: "black", price: 32000 },
  { make: "Porsche", model: "Boxter", colour: "blue", price: 72000 }
];