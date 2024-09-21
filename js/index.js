// Calculate Button !!!

document.getElementById('calculate').addEventListener('click', function(){
    const income = getInputValueById('income');
    const software = getInputValueById('software');
    const courses = getInputValueById('courses');
    const internet = getInputValueById('internet');

    // Validation input after clicked!
    if(income <= 0 || isNaN(income)){
        showErrorById('income-error');
        return;
    };

    if(software <= 0 || isNaN(software)){
        showErrorById('software-error');
        return;
    };

    if(courses <= 0 || isNaN(courses)){
        showErrorById('courses-error');
        return;
    };

    if(internet <= 0 || isNaN(internet)){
        showErrorById('internet-error');
        return;
    };
    
    const totalExpenses = software + courses + internet;
    const Balance = income - totalExpenses;

    document.getElementById('total-expenses').innerHTML = totalExpenses;
    document.getElementById('balance').innerHTML = Balance;

    showErrorById('results');
});

// Calculate Savings Button!!!

document.getElementById('calculate-savings').addEventListener('click', function(){
    const income = getInputValueById('income');
    const software = getInputValueById('software');
    const courses = getInputValueById('courses');
    const internet = getInputValueById('internet');
    const savings = getInputValueById('savings');

    if(savings <= 0 || isNaN(savings)){
        showErrorById('savings-error');
        return;
    }

    const totalExpenses = software + courses + internet;
    const Balance = income - totalExpenses;

    const savingsAmount = (savings * Balance) / 100;
    const remaningBalance = Balance - savingsAmount;

    document.getElementById('savings-amount').innerHTML = savingsAmount;
    document.getElementById('remaining-balance').innerHTML = remaningBalance;

    const divTag = document.createElement('div');
    divTag.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500"
    divTag.innerHTML = `
        
            <p>${new Date().toLocaleDateString()}</p>
            <p>income: $${income}</p>
            <p>Expenses: $${totalExpenses}</p>
            <p>Balance: $${Balance}</p>

    `
    const insertBefore = document.getElementById('history-list');
    insertBefore.insertBefore(divTag, insertBefore.firstChild)

});

// upper button tabs indentify !

document.getElementById('history-tab').addEventListener('click', function(){
    document.getElementById('history-tab').classList.add('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white')

    document.getElementById('assistant-tab').classList.remove('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white');

    document.getElementById('assistant-tab').classList.add('text-gray-600');

    document.getElementById("expense-form").classList.add('hidden');

    document.getElementById('history-section').classList.remove('hidden');

    document.getElementById('')
   
})

document.getElementById('assistant-tab').addEventListener('click', function(){
    document.getElementById('assistant-tab').classList.add('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white');
    
    document.getElementById('history-tab').classList.remove('bg-gradient-to-r', 'from-blue-500', 'to-purple-600', 'text-white')

    const historyTab = document.getElementById('results');
    historyTab.classList.add('hidden')
    document.getElementById('expense-form').classList.remove('hidden');

    document.getElementById('history-section').classList.add('hidden')
})
    