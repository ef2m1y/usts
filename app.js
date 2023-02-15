// const person: {
//     name: string;
//     age: number;
// }
var person = {
    name: 'hoge',
    age: 30,
    hobbies: ['tennis', 'kyudo']
};
var favoirteActivities;
favoirteActivities = ['tennis'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}
