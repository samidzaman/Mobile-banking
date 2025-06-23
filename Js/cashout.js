document.getElementById('btn-cashout').addEventListener('click', function (event) {
   event.preventDefault()

   const cashoutamount = getInputFieldvalueById('cash-out-amount')
   const cashOutpin = getInputFieldvalueById('cash-out-pin-number')
   //  charecter kina check (amount ar jaygay jate number na diye charecter dile dora khabe )
   if (isNaN(cashoutamount)) {
      alert('haramjada tik kori tk de');
      return;
   }

   //  wrong way to verify 
   if (cashOutpin === 578023) {

      const accountBalancecashout = getTextFieldvalueById('blance')

      // Main balance ar theke beshi tk cashout kora jabe na 
      if (cashoutamount > accountBalancecashout) {
         alert('haramjada batpari sari de');
         return;
      }


      const newbalancecashout = accountBalancecashout - cashoutamount;
      document.getElementById('blance').innerText = newbalancecashout;

      // transection histry show
      const div = document.createElement('div');
      div.classList.add('bg-yellow-300')
      div.innerHTML = `
          <h4> Cashout </h4>
          <p> withdraw. ${cashoutamount} TK .. New Balance ${newbalancecashout} </p>
        
        `
      // show data in transection section 
      document.getElementById('transection-container').appendChild(div);


   }
   else {
      alert('transiction filed')
   }


})