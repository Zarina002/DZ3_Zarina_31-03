const originalArray = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]
const newArray = []

for (const number of originalArray) {
  if (number.toString().startsWith('2') || number.toString().startsWith('5')) {
    newArray.push(number)
  }
}

console.log(newArray)






const tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']
const tagCount = {}

for (let i = 0; i < tags.length; i++) {
  const tag = tags[i]
  if (tagCount[tag]) {
    tagCount[tag] += 1
  } else {
    tagCount[tag] = 1
  }
}

console.log(tagCount)
