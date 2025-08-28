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