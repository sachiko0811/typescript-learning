// Type Inference

// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Kipu',
//   age: 25,
// }

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Kipu',
  age: 25,
  hobbies: ['Cooking', 'Workout'],
  role: [2, 'author'],
};

// person.role.push('admin'); // error
// person.role[1] = 10; // error
// person.role = [0, 'admin', 'user']; // error


let favoriteActivities: string[];
favoriteActivities = ['Workout'];
// favoriteActivities = 'Workout'; // error

console.log(person);

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  // console.log(hobby.map()) // error cuz string doesn't support .map()
}