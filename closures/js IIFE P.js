const BankAccount = (function(initialBalance) {
    // Private balance variable initialized with initialBalance
    let balance = initialBalance;

    
    function deposit(amount) {
        if (amount > 0) {
            balance += amount;
            console.log(`Deposited $${amount}. New balance: $${balance}`);
        } else {
            console.log('Deposit amount must be positive');
        }
    }


    function withdraw(amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${balance}`);
        } 
    }

    // check balance
    function checkBalance() {
        return balance;
    }

    // public methods
    return {
        deposit,
        withdraw,
        checkBalance
    };
})(100); //parameter


console.log(`Initial balance: $${BankAccount.checkBalance()}`); 
BankAccount.deposit(50); 
BankAccount.withdraw(30); 
console.log(`Final balance: $${BankAccount.checkBalance()}`); 
