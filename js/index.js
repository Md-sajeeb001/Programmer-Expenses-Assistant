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

});


    