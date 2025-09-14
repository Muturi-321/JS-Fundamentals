const args = process.argv.slice(2);

function add(a, b){
  return a + b;
}

const plus = add (Number(args[0]), Number(args[1]));
console.log (plus);
