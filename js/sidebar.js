const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");
toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
        logo.src = '../images/w_logo.png';
    } else {
        modeText.innerText = "Dark mode";
        logo.src = '../images/b_logo.png';
    }
});

const resize = document.querySelector('.toggle');
resize.addEventListener('click', () => {
    const musicPlayer = document.querySelector('.music-player');
    if (musicPlayer.classList.contains('collapsed'))
        musicPlayer.classList.remove('collapsed');
    else
        musicPlayer.classList.add('collapsed');

});
