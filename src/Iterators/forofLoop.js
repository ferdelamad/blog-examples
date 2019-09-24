//basic example
const myIterable = [1, 2, 3, 4, 5];

for (let number of myIterable) {
  number *= 2;
  console.log(`The double of the current number is: ${number}`);
}

//customized example
const avengers = ['Tony Stark', 'Steve Rogers', 'Bruce Banner', 'Peter Parker'];

for (const [index, name] of Object.entries(avengers)) {
  console.log(`${name} has position ${index} in the array.`);
}

//using an object
const fer = {
  twitter: '@fermaddev',
  loves: 'Reading',
  hates: 'Not sleeping enough'
}

for (const prop of Object.keys(fer)) {
  const value = fer[prop];
  console.log(prop, value);
}
