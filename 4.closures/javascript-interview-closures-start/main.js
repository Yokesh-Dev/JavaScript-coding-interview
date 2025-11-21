// Create a counter function which has increment and getValue functionality
function counter() {
  let count = 10;
  function inner() {
    return count + 10;
  }
  return inner;
}
const myClosure = counter();
console.log(myClosure());

/*
counter() defines a local variable count and an inner function inner.

inner closes over count — meaning it remembers count even after counter() has finished.

By returning inner (not calling it immediately), you preserve that link.

When you later call myClosure(), it still has access to count and returns 20.
*/
