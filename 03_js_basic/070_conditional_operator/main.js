const a = true;
let resultA = a ? "true" : "false";

// if(a) {
//   resultA = "true";
// } else {
//   resultA = "false";
// }
// console.log(resultA);

function getResult() {
  return a ? "true" : "false";
}

console.log(getResult());
