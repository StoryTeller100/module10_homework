// let myMap = new Map();

// myMap.set(`language1`, `dutch`);
// myMap.set(`language2`, `bulgarian`);
// myMap.set(`language3`, `swedish`);
// myMap.set(`language4`, `hindi`);
// myMap.set(true, 922);
// myMap.set(74, `hindi74`);

// console.log(myMap.keys())
// console.log(myMap.values())

let zooMap = new Map([
  ["dogs", 10],
  ["monkeys", 20],
  ["birds", 500],
  ["tiger", 1],
]);

for (let animal of zooMap.keys()) {
  console.log(animal);
}
for (let animal of zooMap.values()) {
  console.log(animal);
}

for (let animal of zooMap) {
  console.log(`Key - ${animal[0]} and value is ${animal[1]}`);
}
console.log("---");
for (let [key, value] of zooMap) {
  console.log(`Key - ${key} and value is ${value}`);
}
