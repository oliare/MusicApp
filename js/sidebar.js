let xhr = new XMLHttpRequest();
xhr.open("GET", "../pages/sidebar.html", false)
xhr.send();
document.write(xhr.response)

;const body = document.querySelector('body'),
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

