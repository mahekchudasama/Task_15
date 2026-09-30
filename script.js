// ================================================================
// Dummy array used for testing all three operations below.
// (Matches the sample output array from the assignment.)
// ================================================================
const dummyArray = [4, 8, 2, 11, 6, 7, 10];

// ================================================================
// 1. Find the maximum number in the array
//    -> written as a regular (named) function declaration
// ================================================================
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// ================================================================
// 2. Calculate the sum of all elements in the array
//    -> written as an arrow function
// ================================================================
const calculateSum = (arr) => {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
};

// ================================================================
// 3. Count the number of odd numbers in the array
//    -> written as an anonymous function expression assigned to a
//       variable
// ================================================================
const countOddNumbers = function (arr) {
  let count = 0;
  for (const num of arr) {
    if (num % 2 !== 0) {
      count++;
    }
  }
  return count;
};

// ================================================================
// Run all three operations on the dummy array and display the
// results both in the console and on the page.
// ================================================================
function runOperations(arr) {
  const max = findMax(arr);
  const sum = calculateSum(arr);
  const oddCount = countOddNumbers(arr);

  // Console output (as required by the task)
  console.log("Array:", arr);
  console.log("Maximum number:", max);
  console.log("Sum of all elements:", sum);
  console.log("Count of odd numbers:", oddCount);

  // On-page output (nice-to-have, since the task also asks for
  // HTML/CSS to be wired up)
  document.getElementById("arrayValue").textContent = `[${arr.join(", ")}]`;
  document.getElementById("maxResult").textContent = max;
  document.getElementById("sumResult").textContent = sum;
  document.getElementById("oddResult").textContent = oddCount;
}

// Run once automatically when the page loads...
document.addEventListener("DOMContentLoaded", () => {
  runOperations(dummyArray);
});

// ...and again whenever the button is clicked.
document.getElementById("runBtn").addEventListener("click", () => {
  runOperations(dummyArray);
});
