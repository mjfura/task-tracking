import { searcher } from '../src/helpers/searher'

it('Should return true if a string includes another string', () => {
  const keyword = 'he'
  const text = 'hello'
  const result = searcher(text, keyword)
  expect(result).toBe(true)
})
