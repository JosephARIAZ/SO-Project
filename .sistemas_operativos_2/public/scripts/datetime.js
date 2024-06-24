function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();  
    dateTimeElement.textContent = timeString;
    dateTimeElement.addEventListener('mouseenter', () => {
    dateTimeElement.textContent = dateString;
    });
    dateTimeElement.addEventListener('mouseleave', () => {
    dateTimeElement.textContent = timeString;
    });
}
document.addEventListener('DOMContentLoaded', updateDateTime);