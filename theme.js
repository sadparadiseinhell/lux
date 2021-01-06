let switcher = document.getElementById('chb_theme');

switcher.onclick = () => switcher.checked ? darkTheme() : lightTheme();

localStorage.getItem('theme') === 'dark' ? darkTheme() : lightTheme();

function darkTheme() {
    switcher.checked = true;
    localStorage.setItem('theme', 'dark');
    document.body.setAttribute('theme', 'dark');
}

function lightTheme() {
    switcher.checked = false;
    localStorage.setItem('theme', 'light');
    document.body.removeAttribute('theme');
}