document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const message = document.getElementById('message');

    button.addEventListener('click', () => {
        message.textContent = 'Message changed by SHUBH !';
        message.style.color = 'grey';
    });
});