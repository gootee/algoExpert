export function arrayOfProducts(array: number[]) {
  return array.map((num, index) => { return [...array.slice(0, index), ...array.slice(index + 1)].reduce((total, num) => { return total * num})})
}

console.log(arrayOfProducts([5, 1, 4, 2]))