const args = process.argv.slice(2);
const arg1 = parseFloat(args[0]);
const arg2 = parseFloat(args[1]);


function add(a, b){
    return console.log(a + b);
}

add(arg1, arg2);