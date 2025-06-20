// toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// when hamburger menu is clicked
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};