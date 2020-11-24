function minNumberOfJumps(array) {
  const getMinJumps = (array, jumpsSoFar) => {
    if (array.length <= 1) {
      minJumpsCurrent = Math.min(minJumpsCurrent, jumpsSoFar)
    } else {
      const start = array[0]
      const jumpsIncludingThisOne = jumpsSoFar + 1
      if (start >= array.length - 1) {
        minJumpsCurrent = Math.min(minJumpsCurrent, jumpsIncludingThisOne)
      } else {
        if (jumpsIncludingThisOne >= minJumpsCurrent) {return}
        for (let i=start; i>=1; i--) {
          getMinJumps(array.slice(i), jumpsIncludingThisOne)
        }      
      }      
    }
  }

  let minJumpsCurrent = Number.POSITIVE_INFINITY
  getMinJumps(array, 0)
  return minJumpsCurrent
}

// const arr = [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]
const arr = [1, 1]
// const arr = [3, 1]

console.log(minNumberOfJumps(arr) + " steps")

// Do not edit the line below.
exports.minNumberOfJumps = minNumberOfJumps;

