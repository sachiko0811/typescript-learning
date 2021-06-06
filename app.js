// Type Inference
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Kipu',
//   age: 25,
// }
var person = {
    name: 'Kipu',
    age: 25,
    hobbies: ['Cooking', 'Workout'],
    role: [2, 'author']
};
// person.role.push('admin'); // error
// person.role[1] = 10; // error
// person.role = [0, 'admin', 'user']; // error
var favoriteActivities;
favoriteActivities = ['Workout'];
// favoriteActivities = 'Workout'; // error
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // error cuz string doesn't support .map()
}
