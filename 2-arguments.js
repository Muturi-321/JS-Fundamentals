const { argv } = require('node:process');

// print process.argv
argv.forEach((val) => {
  if (val.length == 0){
    console.log('No argument');
  }else if (val.langth == 1){
    console.log('Argument found');
  }else{
    console.log('Arguments found');
  }
});
