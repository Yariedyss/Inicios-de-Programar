/* ===================================== */
/* NAVBAR EFECTO AL HACER SCROLL */
/* ===================================== */

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

});

/* ===================================== */
/* BOTON VOLVER ARRIBA */
/* ===================================== */

const topBtn = document.getElementById('topBtn');

if (topBtn) {

    window.addEventListener('scroll', () => {

        if (window.scrollY > 300) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }

    });

    topBtn.addEventListener('click', () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

}


/* ===================================== */
/* CONTADORES DE ESTADISTICAS */
/* ===================================== */

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let count = 0;

    const updateCounter = () => {

        const increment = target / 200;

        if (count < target) {

            count += increment;
    counter.textContent = "+" + Math.ceil(count);
            requestAnimationFrame(updateCounter);

        } else {

            counter.textContent = "+" + target;

        }

    };

    updateCounter();

});


/* ===================================== */
/* FAQ ACCORDION */
/* ===================================== */

const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {

    question.addEventListener('click', () => {

        const answer = question.nextElementSibling;
        const icon = question.querySelector('.icon');

        answer.classList.toggle('active');

        if (answer.classList.contains('active')) {
            icon.textContent = '×';
        } else {
            icon.textContent = '+';
        }

    });

});
