const args = process.argv.slice(2);

if (Number.isInteger(Number(args))){
  console.log(args[0] * 'C is fun');
}else{
  console.log('Missing number of occurrences');
}
