let menuBar = document.querySelector('#menu-bar')
let myNav = document.querySelector('.navbar')

menuBar.onclick = () => {
    menuBar.classList.toggle('fa-times')
    myNav.classList.toggle('active')
}