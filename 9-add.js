const args = process.argv.slice(2);

function add(a, b){
  return a + b;
}

const plus = add (args[0], args[1]);
console.log (plus);
