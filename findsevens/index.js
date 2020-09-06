function g(N) {
  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (i.toString().indexOf("7") !== -1) count++;
  }
  return count;
}

console.log("g(7)", g(7));
console.log("g(20)", g(20));
console.log("g(70)", g(70));
console.log("g(100)", g(100));
console.log("g(200)", g(200));
console.log("g(500)", g(500));
console.log("g(1000)", g(1000));
