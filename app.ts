// Type Inference

// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Kipu',
//   age: 25,
// }

const person = {
  name: 'Kipu',
  age: 25,
  hobbies: ['Cooking', 'Workout']
};

let favoriteActivities: string[];
favoriteActivities = ['Workout'];
// favoriteActivities = 'Workout'; // error

console.log(person);

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  // console.log(hobby.map()) // error cuz string doesn't support .map()
}