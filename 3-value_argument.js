const args = process.argv.slice(2);

if (args === ' ') {
  console.log('No argument');
}else{
  console.log(String(args[0]));
}
