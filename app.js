function conbine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var conbinedAges = conbine(20, 30);
console.log(conbinedAges);
var conbinedNames = conbine("Ema", "Bob");
console.log(conbinedNames);
