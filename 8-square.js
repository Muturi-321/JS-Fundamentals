const args = process.argv.slice(2);
const size = Number(args[0]);

if (Number.isInteger(size)){
  for (let i = 0; i < size; i++){
    let row = '';
    for (let j=0; j < size; j++){
      row += 'X';
    }
    console.log(row);
  }
}else{
  console.log('Missing size');
}
