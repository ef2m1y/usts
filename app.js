function add(n1, n2) {
    return n1 + n2;
}
// void: 返り値がない事を明示
// (undefined: void, any以外なのでreturn;が要求される)
function printResult(num) {
    console.log('Result: ' + num);
}
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(9, 6));
console.log(printResult(add(5, 15)));
// Result: 20
// undefined
