export const arraysApi = {
  // 1
  "Math.max": [
    `Imagine you have a list of test scores, how would you find the highest test score from this list?`,
    "const testScores = [85, 78, 96, 89, 94, 91, 87, 90];\nconst highestScore = Math.max(...testScores);\nconsole.log(highestScore);\n//OutPut 96;",
    // ------
    `const testScores = [85, 78, 96, 89, 94, 91, 87, 90];
    let highestScore = testScores[0];
    for (let i = 1; i < testScores.length; i++) {
      if (highestScore < testScores[i]) {
    highestScore = testScores[i];
      }
    }
    console.log(highestScore);
    //OutPut 96;`,
    `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max`,
  ],

  // 2

  "Math.min": [
    `Imagine you have a list of test scores, how would you find the lowest test score from this list?`,
    `const testScores = [85, 78, 96, 89, 94, 91, 87, 90];
  const lowestScore = Math.min(...testScores);
  console.log(lowestScore);
  //outPut: 78;`,
    // -------
    `const testScores = [85, 78, 96, 89, 94, 91, 87, 90];
    let lowestScore = testScores[0];
    for (let i = 1; i < testScores.length; i++) {
      if (testScores[i] < lowestScore) {
        lowestScore = testScores[i];
      }
    }
    console.log(lowestScore);
    //outPut: 78;`,
    `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min`,
  ],

  // 3

  Splice: [
    `Imagine you have a list of month, how would you add new month in this list on target point?`,
    `const months = ['Jan', 'March', 'April', 'June'];
  months.splice(1, 0, 'Feb');
  // Inserts at index 1
  console.log(months);
  //outPut: ["Jan", "Feb", "March", "April", "June"];`,
    // ---------
    `const months = ['Jan', 'March', 'April', 'June'];
  const userInput = "Feb";
  const index = 1;
  for (let i = months.length - 1; i >= 0; i--) {
    if (i >= index) {
      months[i + 1] = months[i];
    }
    if (i === index) {
      months[i] = userInput;
    }
  }
  console.log(months);
  // outPut: ["Jan", "Feb", "March", "April", "June"];`,
    `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice`,
  ],

  // 4

  Reverse: [
    `Imagine you have a list of array's elements , how would you reverse all items in this array?`,
    `const array1 = ['one', 'two', 'three'];
const reversed = array1.reverse();
console.log(reversed);
// outPut: ["three", "two", "one"];`,

    //----------

    `const array1 = ['one', 'two', 'three'];
const reversed = [];
for(let i = array1.length - 1; i >=0; i--) {
  reversed.push(array1[i]);
}
console.log(reversed);
// outPut: ["three", "two", "one"];
`,
    `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse`,
  ],

  // 5
  forEach: [
    `The forEach() method of Array instances executes a provided function once for each array element.`,
    `const array1 = ['a', 'b', 'c'];
  array1.forEach((element) => console.log(element));
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"`,

    //----------

    `const array1 = ['a', 'b', 'c'];
  for(let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
  };
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"`,
    `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach`,
  ],

  //6
  sort: [
    `The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted.`,
    `const elements = [1, 2, 6, 300, 7, 9];
    elements.sort((a, b) => a - b);
    console.log(elements);
    // outPut: [1,2,6,7,9,300];
    `,
    //-----
    `const elements = [1, 2, 6, 300, 7, 9];
    for (let i = 0; i < elements.length; i++) {
      for (let j = 0; j < elements.length; j++) {
        if (elements[j] > elements[j + 1]) {
          let tempVar = elements[j];
          elements[j] = elements[j + 1];
          elements[j + 1] = tempVar;
        }
      }
    }
    console.log(elements);
    // outPut: [1,2,6,7,9,300];`,
    `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#try_it`,
  ],
};
