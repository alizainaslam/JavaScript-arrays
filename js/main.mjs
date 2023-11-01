import { arraysApi } from "./arraysApi.mjs";

const methodSelect = document.querySelector("#method-select");
const instruction = document.querySelector(".instruction");
const builtInMethod = document.querySelector("#built-in-method");
const customLogic = document.querySelector("#custom-logic");
const mdnLink = document.querySelector("#link");
// -----------

// Event / func for handling selection value.
methodSelect.addEventListener("change", () => {
  try {
    const selectedValue = methodSelect.value;
    if (arraysApi[selectedValue]) {
      instruction.textContent = arraysApi[selectedValue][0];
      builtInMethod.textContent = arraysApi[selectedValue][1];
      customLogic.textContent = arraysApi[selectedValue][2];
      mdnLink.href = arraysApi[selectedValue][3];
    } else {
      throw new Error("Looks like a BUG");
    }
  } catch (error) {
    console.error(error.message);
  }
});

/////////

// Copy-right year Function
const year = document.querySelector(".year");
const currYear = new Date().getFullYear();
year.textContent = currYear;
