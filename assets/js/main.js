var ButtonDarkMode = document.querySelector(".dark-mode")
var BodyMain = document.querySelector(".body")

    ButtonDarkMode.addEventListener("click", function (e) {
        BodyMain.classList.toggle('active')
    })