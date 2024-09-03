const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');

const btnBars = document.getElementById('btnBars');
const aside = document.getElementById('aside');
const btnCloseAside = document.getElementById('btnCloseAside');

dropdownButton.addEventListener('click', function() {
    dropdownMenu.classList.toggle('hidden');
});

document.addEventListener('click', function(event) {
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
    }
});

btnBars.addEventListener('click', () => {
    aside.classList.remove('hidden')
})
btnCloseAside.addEventListener('click', () =>{
    aside.classList.add('hidden')
})