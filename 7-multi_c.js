const args = process.argv.slice(2);
const toNum = parseInt(args)

function myFunction(x) {
  if (isNaN(x)) {
    console.log("Missing number of occurrences");
  } else {
    for(i = 0 ; i < x ; i++) {
    console.log("C is fun");
    }
  }
}

myFunction(toNum);