// Toggle Class Active 
const navbarNav = document.querySelector ('.navbar-nav');
// Menu Click
document.querySelector('#menuklik').onclick = () => {
    navbarNav.classList.toggle('active');
};
// Outside Click For Close the navbar
const Menu = document.querySelector('#menuklik');
// When Got Clicked
document.addEventListener('click', function(e){
    if(!Menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});