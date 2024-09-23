const donationBtn = document.getElementById('donation-btn').addEventListener('click', function () {

    
    const donationAmount = getInputValue('donation-amount');
    // console.log(donationAmount)


    // validation

    if(!isNaN(donationAmount) && 0<donationAmount){
        
        const donateAmount = collectionDonate('total-donate');
        // console.log(donateAmount)

        const totalDonateAmount = donateAmount + donationAmount;
        // console.log(donateAmount.innerText)
        const total = document.getElementById('total-donate');
        // console.log(total)
    
        total.innerText = totalDonateAmount.toFixed(2);
    
        const myAmount = collectionDonate('my-amount');
        const remaining = myAmount - donationAmount;
    
        const balance = document.getElementById('my-amount');
        balance.innerText = remaining.toFixed(2);
    
        // history
        const historySection = document.getElementById('history-section');
        const title = document.getElementById('title-one').innerText;
    
        const newElement = document.createElement('div')
        newElement.className = "p-4 shadow-md rounded-lg border-gray-600"
        newElement.innerHTML = `
        <h2 class="font-extrabold mb-2">${donationAmount.toFixed(2)} Taka is ${title}</h2>
                    <p class="text-xs text-gray-400">Date : ${new Date().toDateString()} Time :  ${new Date().toLocaleTimeString()}</p>
        `
    
        historySection.appendChild(newElement)
    
        const modal = document.getElementById('my_modal_5').showModal();
        document.getElementById('donation-amount').value = ""



    }
    else{
        alert('Please input Donation amount')
    }



})

const donationBtn2 = document.getElementById('second-donation').addEventListener('click', function () {
    const secondInput = getInputValue('second-input');
    const secondDonateAmount = collectionDonate('second-total');

    if(!isNaN(secondInput) && 0<secondInput){

        const total = secondDonateAmount + secondInput;
        const totalDonate = document.getElementById('second-total');
        totalDonate.innerText = total.toFixed(2);
    
        const myAmount = collectionDonate('my-amount');
        const remaining = myAmount - secondInput;
    
        const balance = document.getElementById('my-amount');
        balance.innerText = remaining.toFixed(2);


           // history
    const historySection = document.getElementById('history-section');
    const title = document.getElementById('title-two').innerText;

    const newElement = document.createElement('div')
    newElement.className = "p-4 shadow-md rounded-lg border-gray-600"
    newElement.innerHTML = `
    <h2 class="font-extrabold mb-2">${secondInput.toFixed(2)} Taka is ${title}</h2>
                <p class="text-xs text-gray-400">Date : ${new Date().toDateString()} Time :  ${new Date().toLocaleTimeString()}</p>
    `

    historySection.appendChild(newElement)

    const modal = document.getElementById('my_modal_5').showModal();
    document.getElementById('second-input').value = ""
    }
    else{
        alert('Please input Donation amount')
    }
    // console.log(secondDonateAmount)
  

 
})

const donationBtn3 = document.getElementById('third-donation').addEventListener('click', function () {
    const secondInput = getInputValue('third-input');
    const secondDonateAmount = collectionDonate('third-total');

    if(!isNaN(secondInput) && 0<secondInput){


        const total = secondDonateAmount + secondInput;
    const totalDonate = document.getElementById('third-total');
    totalDonate.innerText = total.toFixed(2);

    const myAmount = collectionDonate('my-amount');
    const remaining = myAmount - secondInput;

    const balance = document.getElementById('my-amount');
    balance.innerText = remaining.toFixed(2);


     // history
     const historySection = document.getElementById('history-section');
     const title = document.getElementById('title-three').innerText;
 
     const newElement2 = document.createElement('div')
     newElement2.className = "p-4 shadow-md rounded-lg border-gray-600"
     newElement2.innerHTML = `
     <h2 class="font-extrabold mb-2">${secondInput.toFixed(2)} Taka is ${title}</h2>
                 <p class="text-xs text-gray-400">Date : ${new Date().toDateString()} Time :  ${new Date().toLocaleTimeString()}</p>
     `
 
     historySection.appendChild(newElement2)
 
     const modal = document.getElementById('my_modal_5').showModal();
     document.getElementById('third-input').value = ""
    }
    else{
        alert('Please input Donation amount')
    }

    // console.log(secondDonateAmount)
    

   
})

// history btn

const historyBtn = document.getElementById('history-btn').addEventListener('click', function () {
    const donateButton = document.getElementById('donate-button');
    donateButton.classList.remove('bg-clifford')

    const historyButton = document.getElementById('history-btn');
    historyButton.classList.add('bg-clifford')

    const cardSection = document.getElementById('cards-section');
    cardSection.classList.add('hidden')

    const historySection = document.getElementById('history-section');
    historySection.classList.remove('hidden')
})

// donate button
const donateBtn = document.getElementById('donate-button').addEventListener('click', function () {

    const historyButton = document.getElementById('history-btn');
    historyButton.classList.remove('bg-clifford')

    const donateButton = document.getElementById('donate-button');
    donateButton.classList.add('bg-clifford')

    const cardSection = document.getElementById('cards-section');
    cardSection.classList.remove('hidden')

    const historySection = document.getElementById('history-section');
    historySection.classList.add('hidden')
})