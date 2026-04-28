Dice Roller Web App

A simple and interactive web application that simulates rolling one or more dice. Built using HTML, CSS, and JavaScript, this app generates random dice values and displays corresponding dice images dynamically.

---

Features

* Roll one or multiple dice at once
* Random number generation (1–6) for each dice
* Displays dice values as text
* Dynamically shows dice images based on results
* Clean and responsive UI

---

Technologies Used

* HTML5
* CSS3
* JavaScript (DOM Manipulation)

---

## 🔗 Live Demo

https://dice-roller-harikrishna.netlify.app/
---

Project Structure

```id="y7wz2k"
project-folder/
│── index.html
│── style.css
│── index.js
│── dice-images/
│     ├── 1.png
│     ├── 2.png
│     ├── 3.png
│     ├── 4.png
│     ├── 5.png
│     └── 6.png
```

---

How It Works

* User enters the number of dice
* On clicking **"Roll Dice"**, JavaScript:

  * Generates random numbers between 1 and 6
  * Stores values in an array
  * Displays results as text
  * Dynamically loads corresponding dice images
* Images are rendered using `innerHTML`

---

Future Improvements

* Add animation for rolling dice
* Add sound effects 🎲
* Limit maximum number of dice
* Improve mobile responsiveness

---

Author

Harikrishna



