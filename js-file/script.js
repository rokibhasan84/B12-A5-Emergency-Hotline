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