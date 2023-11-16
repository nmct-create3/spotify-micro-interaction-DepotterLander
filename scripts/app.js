document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.querySelector('.js-toggle');
    var hiddenSvg1 = document.querySelector('.icon--add');
    var hiddenSvg2 = document.querySelector('.icon--check');

    hiddenSvg2.style.display = 'none';

    toggleButton.addEventListener('click', function () {
        // Toggle the visibility of the hidden SVGs
        if (hiddenSvg1.style.display === 'none' || hiddenSvg1.style.display === '') {
            hiddenSvg1.style.display = 'block';
            hiddenSvg2.style.display = 'none';
        } else {
            hiddenSvg1.style.display = 'none';
            hiddenSvg2.style.display = 'block';
        }
    });
});

