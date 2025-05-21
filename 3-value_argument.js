const args = process.argv.slice(2);

function myFunction(args) {
  if (args ===  undefined) {
    console.log("No argument");
  }else {
    console.log(args);
  }
}

myFunction(args);