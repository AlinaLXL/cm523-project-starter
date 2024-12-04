/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
document.addEventListener('DOMContentLoaded', function() {
    const smileyButton = document.querySelector('.smiley-face');
    const kayak = document.getElementById('kayak');
    
    kayak.style.animationPlayState = 'running';

    smileyButton.addEventListener('click', function() {
        if (kayak.style.animationPlayState === 'paused') {
            kayak.style.animationPlayState = 'running';
            smileyButton.textContent = '😊';
        } 
        else {
            kayak.style.animationPlayState = 'paused';
            smileyButton.textContent = '😴';
        }
    });

    const navLinks = document.querySelectorAll('nav a');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            pages.forEach(page => {
                if (page.id === targetId) {
                    page.style.display = 'block';
                } else {
                    page.style.display = 'none';
                }
            });
        });
    });
});