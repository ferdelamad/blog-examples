function helloWorldIterator() {
  let step = 0;
  const iterator = {
    next() {
      if (step === 0) {
        step++;
        return { value: 'Hello', done: false };
      } else if (step === 1) {
        step++;
        return { value: 'world! ', done: false };
      } else if (step === 2) {
        step++;
        return { value: 'Just built my first iterator', done: false };
      }

      return { value: undefined, done: true }
    }
  }
  return iterator;
}

const iterator = helloWorldIterator();

console.log(iterator.next());
//first return value

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());
//undefined when done it’s true
