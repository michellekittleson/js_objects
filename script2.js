// 2. Exploring Objects and Math in JavaScript
function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

let account1 = new Account(101, 1000, 'Michelle');

// Task 2: Implement methods within the Account object to deposit and withdraw funds
function deposit(Account, deposit) {
    newBalance = Account.balance + deposit;
    console.log(`${owner}'s new balance: $${newBalance}`);
}

console.log(deposit(101, 500));


// Create a method to calculate  compound interest based on the balance and specified interest rate
function compoundInterest(Account, rate) {
    newBalance = Account.balance * (1 + rate) 
}