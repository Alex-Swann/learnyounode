function add(a, b) {
    return a + b;
}


console.log(
  process.argv.slice(2).map(Number).reduce(add, 0)
);
