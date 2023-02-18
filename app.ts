function add(n1: number, n2: number) {
    return n1 + n2;
}

// void: 返り値がない事を明示
// (undefined: void, any以外なのでreturn;が要求される)
function printResult(num: number): void {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(30, 70, (result) => {
  console.log(result);
});

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(9, 6));

console.log(printResult(add(5, 15)));
// Result: 20
// undefined