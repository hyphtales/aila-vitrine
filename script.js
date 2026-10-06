// === MENU MOBILE ===
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Ouvrir / fermer le menu au clic sur le bouton
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
navLinks.querySelectorAll('a').forEach(lien => {
    lien.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// === DÉFILEMENT FLUIDE VERS LES SECTIONS ===
document.querySelectorAll('a[href^="#"]').forEach(ancre => {
    ancre.addEventListener('click', function(e) {
        e.preventDefault();
        const cible = document.querySelector(this.getAttribute('href'));
        if (cible) {
            window.scrollTo({
                top: cible.offsetTop - 100, // Décalage pour ne pas cacher sous la barre
                behavior: 'smooth'
            });
        }
    });
});

// === FORMULAIRE DE CONTACT ===
const formulaire = document.querySelector('.contact-form');
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message envoyé ! Nous vous répondrons rapidement.');
    formulaire.reset();
});
