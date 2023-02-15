// const person: {
//     name: string;
//     age: number;
// }
const person = {
    name: 'hoge',
    age: 30,
    hobbies: ['tennis', 'kyudo'],
};

let favoirteActivities: string[];
favoirteActivities = ['tennis'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}