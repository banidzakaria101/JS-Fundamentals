const args = process.argv.slice(2);
const toNumber = parseInt(args);

function isNumber(num) {
  if (isNaN(num)) {
    console.log("Not a number");
  }else {
    console.log(`My number: ${num}`);
  }
}

isNumber(toNumber);