function strip(num: number, precision: number = 12): number {
  return parseFloat(num.toPrecision(precision))
}
export default { strip }
