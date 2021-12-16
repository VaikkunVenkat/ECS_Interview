export const emptyStringValidation = (val: string): boolean => {
  return val !== ''
}

export const filterArrObjects = (arr: any[], obj: any, property: string): any[] => {
  return arr.filter((arrObj) => arrObj[property] !== obj?.[property])
}