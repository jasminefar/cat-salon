const hatButtons = document.querySelectorAll('.hat-button');
const collarButtons = document.querySelectorAll('.collar-button');
const hatImage = document.getElementById('hat');
const collarImage = document.getElementById('collar');

hatButtons.forEach(button => {
    button.addEventListener('click', () => {
        const hat = button.getAttribute('data-hat');
        hatImage.src = hat;
    });
});

collarButtons.forEach(button => {
    button.addEventListener('click', () => {
        const collar = button.getAttribute('data-collar');
        collarImage.src = collar;
    });
});
