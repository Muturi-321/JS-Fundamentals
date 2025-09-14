const args = process.argv.slice(2);
const size = Number(args[0]);

if (Number.isInteger(size)){
  for (let i = 0; i <= size; i++){
    for (let j=0; j <= size; j++){
      //console.log('x');
    }
    console.log('x')
  }
}else{
  console.log('Missing size');
}
