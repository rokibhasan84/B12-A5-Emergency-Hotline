// Increase heart value

const heartIcon = document.querySelectorAll('.heart-icon');

let count = 0;
heartIcon.forEach(function(icon){
    icon.addEventListener('click', function(){
        count++;
        let heartCount = document.getElementById('heart-count');
heartCount.innerText = count;
    });
});


// Call buttons function

const callBtn = document.querySelectorAll('.btn-call');
// const clearBtn = document.getElementById('clear-btn');




callBtn.forEach(function(btn){
    btn.addEventListener('click', function(){

    const parentDiv = btn.closest('.closest-content');

    const titleName = parentDiv.querySelector('.title').textContent;
    const number = parentDiv.querySelector('.number').textContent;

    alert(`📞 Calling:  ${titleName} - ${number}`);
    
    let cointCount = document.getElementById('coin-count').innerText;

       cointCount = cointCount - 20;
         document.getElementById('coin-count').innerText = cointCount;
        if(cointCount < 20){
            alert("You don't have enough coin. Minimum 20 coins required to make a call.");
            
        }
        const callHistory = document.getElementById('call-history');
        const callEntry = document.createElement('p');
        callEntry.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'my-2', 'text-[#5c5c5cfa]', 'flex', 'justify-between', 'items-center');
        let currentTime = new Date().toLocaleTimeString();
        callEntry.innerHTML = `
        <span>${titleName}<br>${number}</span>
        <span> ${currentTime}</span>`;
        
        callHistory.prepend(callEntry);

    });
});

const clearBtn = document.getElementById('clear-btn');

clearBtn.addEventListener('click', function(){
    const callHistory = document.getElementById('call-history');
    callHistory.innerHTML = '';
});


// Copy btn incrase

const copyBtn = document.querySelectorAll('.btn-copy');

let countCopy = 0;
copyBtn.forEach(function(copy){
    copy.addEventListener('click', function(){
        countCopy++;
        let copyIncrase = document.getElementById('copy-count');
copyIncrase.innerText = countCopy;
    });
});


// Copy number and paste anywhere
const number = document.querySelectorAll(".number");

number.forEach(function(num){
    num.addEventListener('click', function(){
        const phoneNumber = num.textContent.trim();
        navigator.clipboard.writeText(phoneNumber);
    });
});
