const transaction = []
let balance = 0
let income = 0
let expense = 0

function cal() {
    income = 0
    expense = 0
    balance = 0

    for (let i = 0; i < transaction.length; i++){
        let transaction = transaction [i];
    
}

if (transaction.type === 'expense') {
    expense += Number (transaction.amount)

}

if (transaction.type === 'amount') {
    income += Number (transaction.amount)

}
balance = income -expense
return {balance,income,expense}

}

function add_data() {
    if (amount >=0 || amount == "" || amount == isNaN) {
        alert(`Please enter vaild Amount `)
        
    }
    
}



