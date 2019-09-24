const name = 'Fernando';

const iterator = name[Symbol.iterator]();

const nameArr = [iterator.next().value]

let nextValue = iterator.next()

while (!nextValue.done) {
  nameArr.push(nextValue.value)
  nextValue = iterator.next()
}

console.log(nameArr)
// ["F", "e", "r", "n", "a", "n", "d", "o"]
