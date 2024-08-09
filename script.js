// script.js
function compute() {
    // Retrieve input values
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const years = parseFloat(document.getElementById("years").value);

    // Validate inputs
    if (isNaN(principal) || isNaN(rate) || isNaN(years) || principal <= 0 || rate <= 0 || years <= 0) {
        alert("Please enter positive numbers for all fields.");
        return;
    }

    // Calculate simple interest
    const interest = (principal * rate * years) / 100;

    // Display the result
    document.getElementById("result").textContent = `$${interest.toFixed(2)}`;
}
