//drawdown
const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');

//mostrar menu
const btnBars = document.getElementById('btnBars');
const aside = document.getElementById('aside');
const btnCloseAside = document.getElementById('btnCloseAside');

//darkmode
const toggleButton = document.getElementById('dark-mode-toggle');
const bodyElement = document.documentElement;
const sunIcon = document.getElementById('sun-icon');

// Verificar si el usuario ya tiene una preferencia almacenada
const currentTheme = localStorage.getItem('theme');


if (currentTheme === 'dark') {
  bodyElement.classList.add('dark');
  sunIcon.classList.remove('text-yellow-500');
} else {
  bodyElement.classList.remove('dark');
  sunIcon.classList.add('text-yellow-500');
}
// Cambiar entre el modo claro y oscuro
toggleButton.addEventListener('click', () => {
  const isDarkMode = bodyElement.classList.toggle('dark');
  if (isDarkMode) {
    sunIcon.classList.remove('text-yellow-500');
    localStorage.setItem('theme', 'dark');
  } else {
    sunIcon.classList.add('text-yellow-500');
    localStorage.setItem('theme', 'light');
  }
});

//Click en el perfil para mostrar o cerrar  dropdown del menu
dropdownButton.addEventListener('click', function() {
    dropdownMenu.classList.toggle('hidden');
});

//Click fuera del menu dropdown para agregar hidden y cerrar menu
document.addEventListener('click', function(event) {
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
    }
});

//Cierra menu responsivo
btnBars.addEventListener('click', () => {
    aside.classList.remove('hidden')
})
//muestra menu o sidebar responsivo
btnCloseAside.addEventListener('click', () =>{
    aside.classList.add('hidden')
})

