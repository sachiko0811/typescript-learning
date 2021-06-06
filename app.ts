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

enum Role {
  ADMIN, 
  READ_ONLY, 
  AUTHOR
}

const person = {
  name: 'Kipu',
  age: 25,
  hobbies: ['Cooking', 'Workout'],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ['Workout'];
// favoriteActivities = 'Workout'; // error

console.log(person);

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  // console.log(hobby.map()) // error cuz string doesn't support .map()
}

if (person.role === Role.ADMIN) {
  console.log('Admin user');
}