const args = process.argv.slice(2);

for (i=0; i== args[0]; i++){
  if (Number.isInteger(Number(args))){
    console.log('C is fun');
  }else{
    console.log('Missing number of occurrences');
    break;
  }
}
