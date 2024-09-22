const donationBtn = document.getElementById('donation-btn').addEventListener('click', function () {
    const donationAmount = parseFloat(document.getElementById('donation-amount').value);
    // console.log(donationAmount)

    const donateAmount = parseFloat(document.getElementById('total-donate').innerText);

    const totalDonateAmount = donateAmount + donationAmount;
    // console.log(donateAmount.innerText)
    const total = document.getElementById('total-donate');
    // console.log(total)

    total.innerText = totalDonateAmount;

    const myAmount = parseFloat(document.getElementById('my-amount').innerText);
    const remaining = myAmount - donationAmount;

    const balance = document.getElementById('my-amount');
    balance.innerText = remaining;


    // history
    const historySection = document.getElementById('history-section');
    const title = document.getElementById('title-one').innerText;

    const newElement = document.createElement('div')
    newElement.className = "p-4 shadow-md rounded-lg border-gray-600"
    newElement.innerHTML = `
    <h2 class="font-extrabold mb-2">${donationAmount} Taka is ${title}</h2>
                <p class="text-xs text-gray-400">Date : ${new Date().toDateString()}</p>
    `

    historySection.appendChild(newElement)
})

const donationBtn2 = document.getElementById('second-donation').addEventListener('click', function () {
    const secondInput = parseFloat(document.getElementById('second-input').value);
    const secondDonateAmount = parseFloat(document.getElementById('second-total').innerText);

    // console.log(secondDonateAmount)
    const total = secondDonateAmount + secondInput;
    const totalDonate = document.getElementById('second-total');
    totalDonate.innerText = total;

    const myAmount = parseFloat(document.getElementById('my-amount').innerText);
    const remaining = myAmount - secondInput;

    const balance = document.getElementById('my-amount');
    balance.innerText = remaining;

    // history
    const historySection = document.getElementById('history-section');
    const title = document.getElementById('title-two').innerText;

    const newElement = document.createElement('div')
    newElement.className = "p-4 shadow-md rounded-lg border-gray-600"
    newElement.innerHTML = `
    <h2 class="font-extrabold mb-2">${secondInput} Taka is ${title}</h2>
                <p class="text-xs text-gray-400">Date : ${new Date().toDateString()}</p>
    `

    historySection.appendChild(newElement)
})

const donationBtn3 = document.getElementById('third-donation').addEventListener('click', function () {
    const secondInput = parseFloat(document.getElementById('third-input').value);
    const secondDonateAmount = parseFloat(document.getElementById('third-total').innerText);

    // console.log(secondDonateAmount)
    const total = secondDonateAmount + secondInput;
    const totalDonate = document.getElementById('third-total');
    totalDonate.innerText = total;

    const myAmount = parseFloat(document.getElementById('my-amount').innerText);
    const remaining = myAmount - secondInput;

    const balance = document.getElementById('my-amount');
    balance.innerText = remaining;

    // history
    const historySection = document.getElementById('history-section');
    const title = document.getElementById('title-three').innerText;

    const newElement2 = document.createElement('div')
    newElement2.className = "p-4 shadow-md rounded-lg border-gray-600"
    newElement2.innerHTML = `
    <h2 class="font-extrabold mb-2">${secondInput} Taka is ${title}</h2>
                <p class="text-xs text-gray-400">Date : ${new Date().toDateString()}</p>
    `

    historySection.appendChild(newElement2)
})

// history btn

const historyBtn = document.getElementById('history-btn').addEventListener('click', function () {
    const donateButton = document.getElementById('donate-button');
    donateButton.classList.remove('bg-green-400')

    const historyButton = document.getElementById('history-btn');
    historyButton.classList.add('bg-green-400')

    const cardSection = document.getElementById('cards-section');
    cardSection.classList.add('hidden')

    const historySection = document.getElementById('history-section');
    historySection.classList.remove('hidden')
})

// donate button
const donateBtn = document.getElementById('donate-button').addEventListener('click', function () {

    const historyButton = document.getElementById('history-btn');
    historyButton.classList.remove('bg-green-400')

    const donateButton = document.getElementById('donate-button');
    donateButton.classList.add('bg-green-400')

    const cardSection = document.getElementById('cards-section');
    cardSection.classList.remove('hidden')

    const historySection = document.getElementById('history-section');
    historySection.classList.add('hidden')
})