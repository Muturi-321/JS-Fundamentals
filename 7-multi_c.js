const args = process.argv.slice(2);

for (let i=0; i<= args[0]; i++){
  if (Number.isInteger(Number(args[0]))){
    console.log('C is fun');
  }else{
    console.log('Missing number of occurrences');
    break;
  }
}
