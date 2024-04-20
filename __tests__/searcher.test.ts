import { searcher } from '../src/helpers/searher'

it('Should return true if a string includes another string', () => {
  const result = searcher('hello', 'he')
  expect(result).toBe(true)
})
