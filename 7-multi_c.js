const args = process.argv.slice(2);
const toNum = parseInt(args[0])

function myFunction(x) {
    console.log(`your number is ${x}`)
  if (isNaN(x)) {
    console.log("Missing number of occurrences");
  } else {
    for(let i = 0 ; i < x ; i++) {
    console.log("C is fun");
    }
  }
}

myFunction(toNum);