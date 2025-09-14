const args = process.argv.slice(2);

if (Number(args) === Number){
  console.log(`My number: ${args[0]}`);
}else{
  console.log('Not a number');
}
