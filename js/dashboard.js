const hideSideBtn = document.querySelector(".hide-btn")
const showSideBtn = document.querySelector('.show-sidebar-btn')
const sideBar = document.querySelector(".sidebar")

hideSideBtn.addEventListener('click', function() {
    sideBar.classList.remove("show-bar")
})

showSideBtn.addEventListener('click', function() {
    sideBar.classList.toggle('show-bar')
})