const args = process.argv.slice(2);
const toNum = parseInt(args[0])

function myFunction(x) {
  if (isNaN(x)) {
    console.log("Missing number of occurrences");
  } else if (x>0) {
  let output = "";
  for (let i = 0; i < x; i++) {
    output += "C is fun\n";
  }
  console.log(output.trim());
  }
}

myFunction(toNum);