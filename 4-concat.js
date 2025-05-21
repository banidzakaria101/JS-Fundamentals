const args = process.argv.slice(2);

function myFunction(args) {
    console.log( args[0] + " is " + args[1]);
}

myFunction(args);