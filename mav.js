let dropdown = document.getElementById('dropdown');

let dest = document.getElementById('dest');
let welcome = document.getElementById('welcome');

dest.addEventListener('mouseover', function(){
    welcome.innerHTML = dropdown.style.display = "flex"
})

