// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending
const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];

const result = users
  .filter((users) => users.isActive) // keep only active users filter
  .sort((a, b) => b.age - a.age) // sort ascending by age short
  .map((user) => ({ name: user.name, age: user.age })); // pick only name+ age  transfom

console.log(result);

/*
.filter((users) => users.isActive)

The filter method loops through the users array.

For each user object, it checks if isActive is true.

Only active users are kept in the new array.

This ensures we’re working only with users who are currently active.

.sort((a, b) => b.age - a.age)

The sort method reorders the filtered array.

Here, it compares two users (a and b) by their age.

b.age - a.age means descending order (older users first).

If you wanted ascending order, you’d use a.age - b.age.

.map((user) => ({ name: user.name, age: user.age }))

The map method transforms each user object.

Instead of returning the full object, it creates a new object with only name and age.

This is useful when you want a simplified dataset.

console.log(result)

Finally, it prints the resulting array of simplified, sorted, active users.

Summary
“This code takes an array of users, filters out only the active ones, sorts them by age in descending order, and then maps the result to a new array containing only their names and ages. It’s a clean example of chaining array methods (filter → sort → map) to process and transform data step by step.”

*/
