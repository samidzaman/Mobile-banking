 document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault()
    
    const PhoneNumber = document.getElementById('phone-number').value ;
    const PinNumber = document.getElementById('pin-number').value ;

    if(PhoneNumber === '01322013512' && PinNumber === '578023' ){
       console.log("loged in") 
        window.location.href = 'home.html'
    }
    else{
        alert('wrong info')
    }
 })