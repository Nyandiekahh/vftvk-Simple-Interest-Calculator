# Simple Interest Calculator

This project provides a web-based tool for calculating simple interest. It allows users to input the principal amount, interest rate, and number of years, then computes the interest and displays the result.

## Features

- **Simple Interest Calculation**: Computes interest based on user input.
- **Responsive Design**: Centered layout that adjusts to different screen sizes.
- **User-Friendly**: Provides clear input fields and results display.
- **Interactive**: Button-triggered computation with input validation.

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Nyandiekahh/simple-interest-calculator.git
   cd simple-interest-calculator
   ```

2. **Open the Project**:
   You can open the `index.html` file directly in your web browser.

## Files

- **index.html**: The main HTML file that contains the structure of the calculator.
- **style.css**: The stylesheet defining the visual presentation of the calculator.
- **script.js**: The JavaScript file responsible for the interest calculation logic.

## Usage

1. Open `index.html` in your web browser.
2. Enter the principal amount in the "Amount" field.
3. Enter the interest rate (as a percentage) in the "Rate (%)" field.
4. Enter the number of years in the "No. of Years" field.
5. Click the "Compute" button to calculate the interest.
6. The calculated interest will be displayed below the button.

## Code Explanation

### HTML (`index.html`)

- **`<div class="container">`**: A wrapper for the calculator with styling and centering.
- **`<form id="interest-form">`**: Contains input fields and the compute button.
- **`<div class="result">`**: Displays the calculated interest.

### CSS (`style.css`)

- **Body Styling**: Centers the container and applies a background color.
- **Container Styling**: Adds padding, border-radius, and a shadow for visual appeal.
- **Form Styling**: Styles the input fields and button, including hover effects.

### JavaScript (`script.js`)

- **`compute()` Function**: Retrieves input values, validates them, calculates the simple interest, and updates the result display.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Interest Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Simple Interest Calculator</h1>
        <form id="interest-form">
            <div class="input-group">
                <label for="principal">Amount</label>
                <input type="number" id="principal" placeholder="Enter principal amount">
            </div>
            <div class="input-group">
                <label for="rate">Rate (%)</label>
                <input type="number" id="rate" placeholder="Enter interest rate">
            </div>
            <div class="input-group">
                <label for="years">No. of Years</label>
                <input type="number" id="years" placeholder="Enter number of years">
            </div>
            <button type="button" onclick="compute()">Compute</button>
        </form>
        <div class="result">
            <h2>Interest: <span id="result">$0.00</span></h2>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact [einsteinmokua100@example.com](mailto:your-email@example.com).