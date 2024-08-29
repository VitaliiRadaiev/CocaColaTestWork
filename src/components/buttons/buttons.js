document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseleave', function () {
        this.classList.add('mouseleave');
    });

    btn.addEventListener('mouseenter', function () {
        this.classList.remove('mouseleave');
    });
});