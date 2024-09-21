function getInputValueById(id){
    return parseFloat(document.getElementById(id).value);
};

function showErrorById(id){
    return document.getElementById(id).classList.remove('hidden');
};


