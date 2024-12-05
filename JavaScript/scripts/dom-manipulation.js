const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    const isDark = document.body.classList.contains('dark');
    themeToggleButton.textContent = isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme';
});
