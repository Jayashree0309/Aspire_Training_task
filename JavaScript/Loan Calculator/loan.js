function calculateLoan() {
    let loanAmount = parseFloat(document.getElementById('loanAmount').value);
    let interestRate = parseFloat(document.getElementById('interestRate').value);
    let loanTerm = parseInt(document.getElementById('loanTerm').value);

    let monthlyInterestRate = (interestRate / 100) / 12;
    let numberOfPayments = loanTerm * 12;

    let monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    let resultElement = document.getElementById('result');
    resultElement.textContent = `Monthly Payment: ₹${monthlyPayment.toFixed(2)}`;
}
