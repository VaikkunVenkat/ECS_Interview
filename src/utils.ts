import { ICarsData } from "./fixtures/types"

export const emptyStringValidation = (val: string): boolean => {
  return val !== ''
}

export const filterArrObjects = (arr: any[], obj: any, property: string): any[] => {
  return arr.filter((arrObj) => arrObj[property] !== obj?.[property])
}

export const getSimilarWords = async (word: ICarsData['model']) => {
  const wordsRequests = fetch(`https://api.datamuse.com/words?sl=${word}`)
    .then((resp) => resp.json())
    .then((data) => {
      const arrayWords = data.map((wordObj: { word: any; }) => wordObj.word)
      return arrayWords
    })
    .catch((error) => alert('error fetching similar words'))
  return wordsRequests
}