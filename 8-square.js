const args = process.argv.slice(2);
const toNum = parseInt(args[0])

function myFunction(x) {
    if (isNaN(x)) {
        console.log("Missing size");
    } else if (x > 0) {
        //   let output = "";
        //   for (let i = 0; i < x; i++) {
        //     output += "x";
        //   }

        for (let i = 0; i < x; i++) {
            let square = '';
            for (let j = 0; j < x; j++) {
                square += 'X';
            }
            console.log(square);
        }
    }
}

myFunction(toNum);