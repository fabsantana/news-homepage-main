const hamburgerBtn = document.getElementById('hamburger-menu');
const closeBtn = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar');
const body = document.querySelector('.body-container');
const shadow = document.querySelector('.shadow-overlay');
function toggleMenu() {
    sidebar.classList.toggle('translate-x-full')
    shadow.classList.toggle('hidden')
}

hamburgerBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);