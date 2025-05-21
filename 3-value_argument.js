const args = process.argv.slice(2);

function myFunction(args) {
  if (args[0] ===  undefined) {
    console.log("No argument");
  }else {
    console.log(args[0]);
  }
}

myFunction(args);