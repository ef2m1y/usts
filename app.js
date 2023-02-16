// const person: {
//     name: string;
//     age: number;
// }
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "hoge",
//   age: 30,
//   hobbies: ["tennis", "kyudo"],
//   role: [2, "author"],
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "hoge",
    age: 30,
    hobbies: ["tennis", "kyudo"],
    role: Role.ADMIN
};
// person.role.push("admin"); // pushはtupleでも防げない!
// person.role[1] = 10; // err
// person.role = [0, 'admin', 'user']; // err
var favoirteActivities;
favoirteActivities = ["tennis"];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}
if (person.role === Role.ADMIN) {
    console.log('管理者ユーザ');
}
