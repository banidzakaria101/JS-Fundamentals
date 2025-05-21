const args = process.argv.slice(2);
const toNumber = parseInt(args)

function isNumber(toNumber) {
  if (isNaN(toNumber)) {
    console.log("Not a number");
  }else {
    console.log(`My number ${toNumber}`);
  }
}

isNumber("89");