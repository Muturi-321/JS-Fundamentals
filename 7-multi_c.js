const args = process.argv.slice(2);
const count = Number(args[0]);

if (Number.isInteger(count) && count > 0) {
  for (let i = 0; i < count; i++) {
    console.log("C is fun");
  }
} 
