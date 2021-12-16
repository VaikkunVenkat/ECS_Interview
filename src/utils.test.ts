import { emptyStringValidation, filterArrObjects } from "./utils";

describe('utility function unit tests', () => {
  describe('emptyStringValidation', () => {
    it('empty string', () => {
      const output = emptyStringValidation('')
      expect(output).toBe(false)
    });
    it('non-empty string', () => {
      const output = emptyStringValidation('non-empty')
      expect(output).toBe(true)
    })
  })
  describe('filterArrObjects', () => {
    const testArrObjects = [
      { name: 'name', value: 'value' },
      { name: 'lastName', value: 'lastValue' },
    ]
    const object = { name: 'name', value: 'value' }
    const output = filterArrObjects(testArrObjects, object, 'name')
    expect(output).toEqual([{ name: 'lastName', value: 'lastValue' }]
    )
  })
})