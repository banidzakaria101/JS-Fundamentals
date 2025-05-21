function myFunction(arg1, arg2) {
    if(arg1 == null && arg2 == null) {
        console.log("No argument");
    }else if(arg1 != null && arg2 == null || arg1 == null && arg2 != null){
        console.log("Argument found");
    }else{
        console.log("Arguments found");
    }
}

myFunction(1);
myFunction();