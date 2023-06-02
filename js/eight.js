let zooMap = new Map([
  ["dogs", 10],
  ["monkeys", 20],
  ["birds", 500],
  ["tiger", 1],
]);

// for (let animal of zooMap.keys()) {
//   console.log(animal);
// }
// for (let animal of zooMap.values()) {
//   console.log(animal);
// }

for (let animal of zooMap) {
  console.log(`Key - ${animal[0]} and value is ${animal[1]}`);
}
console.log("---");

for (let [key, value] of zooMap) {
  console.log(`Key - ${key} and value is ${value}`);
}
