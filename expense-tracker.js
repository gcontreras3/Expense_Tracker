const account = {
    name: 'Ivan Contreras',
    expenses: []
}

// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Ivan Contreras has $1250 in expenses.

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
console.log(account.getAccountSummary())