const nums = [1, 2, 3, 4, 5, 6];
const iterator = nums[Symbol.iterator]();

const one = iterator.next().value

iterator.next() //skip number 2

iterator.next() //skip number 3

const four = iterator.next().value

iterator.next() //skip number 5

const six = iterator.next().value

console.log({ one, four, six });

// after we exhausted all values
console.lof(iterator.next())
// {value: undefined, done: true}

console.lof(iterator.next().value);
// undefined

console.lof(iterator.next())
// {value: undefined, done: true}
