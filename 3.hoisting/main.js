// What will be console.logged here

// Question 1
console.log(foo);
foo = 1;

//question 2
console.log(foo);
var foo = 2;

// question 3
foo = 3;
console.log(foo);
var foo;

//logs - "Reference error Not defined" because this a create a global variable
// Variable is hoisted and  logs - "Undefined"
// logs - "3"
