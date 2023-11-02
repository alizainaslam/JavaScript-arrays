# Welcome to My JavaScript Arrays Repository! 😄

## About

A basic web app for practice with the help of Html5, Css3 and JavaScript (DOM). Where I write code for user experience with the help of 'objects' and try to destructure some built-in methods of Array. Feel free to explore, contribute, and join the fun!

## Behind the scene ✅

The mean idea of this project was:
"Try to understand how we can write a program for user interaction, for example if user want to choose any value from `<select> / <option>` then how can we fullfill requirement behalf of values."
I choose solve this problem with the help of `object`.

Code Snippet 👇

<details>
<summary>Click to reveal JavaScript Code Snippet</summary>
  <pre>
    <code lang = "javascript">
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
    </code>
  </pre>
</details>

## Getting Started 🛠️

To get started with this repository, follow these steps:

1. Clone the repository: `git clone https://github.com/alizainaslam/JavaScript-arrays.git`
2. Open `index.html` in browser or use LIVE SERVER in vs code.

## Contributing 🤝

Always welcome for contributions! If you'd like to improve this project, or want to add more content according to `JS Arrays` follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/"your"-feature`
3. Make your changes and commit them: `git commit -m 'Add some commit'`
4. Push to the branch: `git push origin feature/"your"-feature`
5. Create a pull request

## Issues and Bug Reports 🐛

If you find any issues or want to report a bug, please use the [Issue Tracker](https://github.com/alizainaslam/JavaScript-arrays/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).

## Contact 📧

If you have any questions or suggestions, feel free to reach out on LinkedIn 👇:

[<img src="images/linkedin.png" width="40px">](https://www.linkedin.com/in/alizainaslam/)

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Enjoy your coding journey! 💻**

🌟 Don't forget to give us a star if you find this repository helpful! 🌟
