function getInputFieldvalueById(id){
    const inputvalue = document.getElementById(id).value;
    const inputnumber = parseFloat(inputvalue);
    return inputnumber;
};

function getTextFieldvalueById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
} ;

function showSectionById(id){
    // hide all the section 
    document.getElementById('add-mony-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transection-section').classList.add('hidden');

    //  show only clicked section 
    document.getElementById(id).classList.remove('hidden');
}