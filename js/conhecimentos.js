// ===== ANIMAÇÃO DOa pagina conhecimentos =====

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // anima só uma vez
            }
        });
    },
    {
        threshold: 1.0 // o elemento deve estar 100% visível
    }
);

reveals.forEach(reveal => {
    observer.observe(reveal);
});
