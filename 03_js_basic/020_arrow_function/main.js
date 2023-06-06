// function fn(number) {
//   return number * 2;
// }

// const fn = function(number) {
//   return number * 2;
// }

// const fn = (number) => {
//   return number * 2;
// }

// const fn = number => number * 2;

const fn = number => {
  console.log(number);
  return number * 2;
};

const fnArrowObj = number => ({ result: number * 2 })

console.log(fn(2));
console.log(fn(4));
console.log(fnArrowObj(2));

const fnArrow = (number) => {
  return number * 2;
}

console.log(fnArrow(2));
