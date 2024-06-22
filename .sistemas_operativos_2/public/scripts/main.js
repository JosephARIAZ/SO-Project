document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('.start-button');
    const startMenu = document.getElementById('startMenu');
    startButton.addEventListener('click', () => {
    startMenu.classList.toggle('visible');
    });
});
