/*function myFunction(arg1, arg2) {
    if(arg1 == null && arg2 == null) {
        console.log("No argument");
    }else if(arg1 != null && arg2 == null || arg1 == null && arg2 != null){
        console.log("Argument found");
    }else{
        console.log("Arguments found");
    }
}
*/

function myFunction(args) {
  if (args.length === 0) {
    console.log("No argument");
  } else if (args.length === 1) {
    console.log("Argument found");
  } else {
    console.log("Arguments found");
  }
}

const args = process.argv;

myFunction(args);
