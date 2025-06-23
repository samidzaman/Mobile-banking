

document.getElementById('btn-addmony').addEventListener('click', function (event) {
    event.preventDefault()

    const addmony = getInputFieldvalueById('add-amount');
    const pinNumber = getInputFieldvalueById('pin-number');
    
    //  charecter kina check (amount ar jaygay jate number na diye charecter dile dora khabe )
     if(isNaN(addmony)){
    alert('haramjada tik kori tk de');
    return;
    }

    // wrong way to verify pin number
    if (pinNumber === 578023) {
        const accountBalance = getTextFieldvalueById('blance')
        const newBalance = accountBalance + addmony;
        // show balance in ui
        document.getElementById('blance').innerText = newBalance;

        // transection histry show
        const p = document.createElement('p');
        p.innerText = `Added money ${addmony} New Balance ${newBalance}`
        console.log(p);

        // data pass the transection section
        document.getElementById('transection-container').appendChild(p);

    }
    else {
        alert('failed transiction');
    }
})