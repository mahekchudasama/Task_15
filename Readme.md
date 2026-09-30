# Task: JavaScript - Arrays and Functions

## Objective
Create JavaScript functions that receive an array as an argument and
perform various operations on it: finding the maximum number,
calculating the sum of all elements, and counting the number of odd
numbers.

## Files
- `index.html` — Page structure (test array display, a "Run Operations"
  button, and a results list).
- `style.css` — Styling.
- `script.js` — The three array functions, the dummy test array, and the
  logic that displays results.
- `Readme.md` — This file.

## The three functions (different function styles, as requested)

| Function | Style used | Purpose |
|----------|-----------|---------|
| `findMax(arr)` | Regular (named) function declaration | Finds the maximum number in the array |
| `calculateSum(arr)` | Arrow function | Calculates the sum of all elements |
| `countOddNumbers(arr)` | Anonymous function expression assigned to a variable | Counts how many odd numbers are in the array |

Each function takes an array as its only argument and returns a single
result, so any array can be passed in — not just the dummy one.

## Dummy test array
```js
const dummyArray = [4, 8, 2, 11, 6, 7, 10];
```
Matches the sample from the assignment. Expected results:
- **Maximum number:** 11
- **Sum of all elements:** 48
- **Count of odd numbers:** 2

These were verified independently with Node before writing the HTML page
— the browser console and the on-page results both show the same values.

## Displaying the results
`runOperations(arr)` calls all three functions and:
1. Logs the array and each result to the **browser console** with
   `console.log`, as required.
2. Also writes the results into the page itself (`index.html`), so the
   HTML/CSS wired up for this task actually shows something — this runs
   automatically on page load, and again if you click **"Run
   Operations"**.

## How to run
1. Keep `index.html`, `style.css`, and `script.js` in the same folder.
2. Open `index.html` in any modern browser.
3. Open the browser console (F12 → Console tab) to see the logged
   output alongside the on-page results.

## Notes
- To try a different array, edit the `dummyArray` value at the top of
  `script.js` and reload the page — all three functions will run against
  whatever array is passed to them.
