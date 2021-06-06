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
    hobbies: ['Cooking', 'Workout']
};
var favoriteActivities;
favoriteActivities = ['Workout'];
// favoriteActivities = 'Workout'; // error
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
