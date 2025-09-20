function checkTriplet() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    // Put numbers in ascending order
    const numbers = [num1, num2, num3].sort((a, b) => a - b);

    const a = numbers[0];
    const b = numbers[1];
    const c = numbers[2]; // largest number, treated as hypotenuse

    let resultText = "";

    if (a * a + b * b === c * c) {
        resultText = `Yes! (${a}, ${b}, ${c}) is a Pythagorean triplet.`;
    } else {
        resultText = `No! (${num1}, ${num2}, ${num3}) is NOT a Pythagorean triplet.`;
    }

    document.getElementById('result').textContent = resultText;
}
