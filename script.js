
document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.querySelector('.slider');
    const body = document.querySelector('.body');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
        }
    });
});
