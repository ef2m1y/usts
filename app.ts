// - any: 型チェックすらしない
// - unknown: 型指定された変数にunknown型の変数を代入する際
// 型を自分で確認する必要がある
// => anyよりはunknownの方が安全
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
    userName = userInput;
}