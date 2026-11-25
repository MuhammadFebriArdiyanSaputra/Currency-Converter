# Currency Converter

A simple React Currency Converter built as part of the **freeCodeCamp** Front End Development Libraries curriculum. This lab focuses on managing component state with `useState` and optimizing calculations using `useMemo`.

## Features

- **Real-time Conversion:** Converts amounts between **USD**, **EUR**, **GBP**, and **JPY**.
- **Memoized Calculations:** Uses `useMemo` to cache converted values based on the input amount and source currency, preventing unnecessary recalculations when changing the target currency.
- **Formatted Output:** Displays the final result rounded to two decimal places in the `XX.XX CCC` format.

## Technologies Used

- React (`useState`, `useMemo`)
- JavaScript (ES6+)
- HTML5 & CSS3

## How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com
   ```
2. Open `index.html` in your browser (or use a local server like VS Code Live Server) to view the app.

## Acknowledgments

- Project specifications and user stories provided by [freeCodeCamp](https://freecodecamp.org).
