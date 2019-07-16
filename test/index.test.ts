import PN from '../src/index'
test('PN.strip can eliminate rounding errors', () => {
  expect(PN.strip(0.09999999999999998)).toBe(0.1)
  expect(PN.strip(1.0000000000000001)).toBe(1)
})
