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

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "hoge",
  age: 30,
  hobbies: ["tennis", "kyudo"],
  role: Role.ADMIN,
};

// person.role.push("admin"); // pushはtupleでも防げない!
// person.role[1] = 10; // err
// person.role = [0, 'admin', 'user']; // err

let favoirteActivities: string[];
favoirteActivities = ["tennis"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());
}

if (person.role === Role.ADMIN) {
    console.log('管理者ユーザ');
}
