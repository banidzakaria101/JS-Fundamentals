const args = process.argv.slice(2);

function myFunction(args) {
  if (args ===  null) {
    console.log("No argument");
  }else {
    console.log(args);
  }
}

myFunction(args);