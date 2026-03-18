const infoPage = document.getElementById('info-page');
const spaceContainer = document.getElementById('space-container');
const goToSpaceBtn = document.getElementById('go-to-space');
const planets = document.querySelectorAll('.planet');
const modal = document.getElementById('info-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.getElementById('close-btn');

goToSpaceBtn.addEventListener('click', () => {
    infoPage.style.opacity = '0';
    setTimeout(() => {
        infoPage.style.display = 'none';
        spaceContainer.classList.remove('hidden');
    }, 1000);
});

planets.forEach(planet => {
    planet.addEventListener('click', function() {
        if (document.body.classList.contains('zoomed')) return;

        document.body.classList.add('zoomed');
        this.classList.add('active');

        modalTitle.innerHTML = this.getAttribute('data-title');
        modalDesc.innerHTML = this.getAttribute('data-info');

        setTimeout(() => {
            modal.classList.add('visible');
        }, 300);
    });
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('visible');
    document.body.classList.remove('zoomed');
    planets.forEach(p => p.classList.remove('active'));
});