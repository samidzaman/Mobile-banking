document.getElementById('btn-addmony').addEventListener('click', function (event) {
    event.preventDefault()
    // junior style 
    // const addAmount = document.getElementById('add-amount').value;
    // const addAmountnumber = parseFloat(addAmount)
    // const addPin = document.getElementById('pin-number').value;

    // // wrong way to veryfy
    // if (addPin === '578023') {
    //     const accountBlance = document.getElementById('blance').innerText
    //     const blanceNumber = parseFloat(accountBlance)
    //     const newBlance = addAmountnumber + blanceNumber;
    //     document.getElementById('blance').innerText = newBlance
    // }
    // else {
    //     alert('transiction failed')
    // }








    //  senior style basic 
    // console.log('btn clicked')
    //  const addmony = getInputFieldvalueById();
    //  console.log(addmony);

    //main 
    const addmony = getInputFieldvalueById('add-amount');
    console.log(addmony);
})