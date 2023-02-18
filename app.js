// - any: 型チェックすらしない
// - unknown: 型指定された変数にunknown型の変数を代入する際
// 型を自分で確認する必要がある
// => anyよりはunknownの方が安全
var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
// - void: なにも返さないつもり
// - never: 絶対に返り値を返さない
function generateError(message, code) {
    throw { message: message, code: code }; // crash
    // while (true) {} // 無限ループ
}
var result = generateError("errorが発生しました", 500);
console.log(result);
