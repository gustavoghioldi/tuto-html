const values = [
  1,
  23,
  33,
  44,
  54,
  12,
  11,
  9000,
  7,
  6,
  5,
  22,
  "coco",
  30,
  "pepe",
];

// for (i of values) {
//   if (i % 2 === 0) {
//     console.log(`${i} es par`);
//   } else if (typeof i == "number") {
//     console.log(`${i} es impar`);
//   } else {
//     console.log(`${i} no es un numero`)
//   }
// }

for (i of values) {
    if (typeof(i) != 'number') {
        console.log(`${i} no es un numero`)
    } else if (i % 2 === 0) {
        console.log(`${i} es par`)
    } else {
        console.log(`${i} es impar`)
    }
}