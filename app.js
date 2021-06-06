// Type Inference
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Kipu',
//   age: 25,
// }
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Kipu',
//   age: 25,
//   hobbies: ['Cooking', 'Workout'],
//   role: [2, 'author'],
// };
// person.role.push('admin'); // error
// person.role[1] = 10; // error
// person.role = [0, 'admin', 'user']; // error
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Kipu',
    age: 25,
    hobbies: ['Cooking', 'Workout'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ['Workout'];
// favoriteActivities = 'Workout'; // error
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // error cuz string doesn't support .map()
}
if (person.role === Role.ADMIN) {
    console.log('Admin user');
}
