function conbine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const conbinedAges = conbine(20, 30, "as-number");
console.log(conbinedAges);

const conbinedStringAges = conbine("20", "30", "as-number");
console.log(conbinedAges);

const conbinedNames = conbine("Ema", "Bob", "as-text");
console.log(conbinedNames);
