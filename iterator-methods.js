// with array
console.log("Using just array\n")

const array = [1, 2, 3]
  .map((x) => {
    console.log(x)
    return x * 2
  })
  .slice(0, 2)

console.log()

// with iterator
console.log("Using an iterator\n")
const result = [1, 2, 3]
  .values()
  .map((x) => {
    console.log(x)
    return x * 2
  })
  .take(2)
  .toArray()
