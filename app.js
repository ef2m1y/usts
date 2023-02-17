function conbine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var conbinedAges = conbine(20, 30, "as-number");
console.log(conbinedAges);
var conbinedStringAges = conbine("20", "30", "as-number");
console.log(conbinedAges);
var conbinedNames = conbine("Ema", "Bob", "as-text");
console.log(conbinedNames);
