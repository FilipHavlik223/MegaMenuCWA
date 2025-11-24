const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const navItems = document.querySelectorAll('.nav-item');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
});

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (window.innerWidth <= 968) {
            const link = item.querySelector('.nav-link');
            if (link.querySelector('.arrow')) {
                e.preventDefault();
                item.classList.toggle('mobile-active');
            }
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 968) {
        navMenu.classList.remove('active');
        mobileToggle.textContent = '☰';
        navItems.forEach(item => item.classList.remove('mobile-active'));
    }
});