let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav .nav-links a');

window.onscroll = () => {
    let top = window.scrollY;
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight ;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('current');
            });
            document.querySelector('nav .nav-links a[href*=' + id + ']').classList.add('current');
        }
    });
};
