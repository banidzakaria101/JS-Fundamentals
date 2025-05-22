const args = process.argv.slice(2);
const arg1 = parseFloat(args[0]);

function factorial(x) {
    let res = 1;
    for (let i = 1; i <= x; i++) {
        res *= i;
    }
    return res;
}

console.log(factorial(arg1));