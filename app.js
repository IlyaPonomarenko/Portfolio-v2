const toggle = document.querySelector(".nav-menu")
const navItems = document.querySelector(".navbar-nav")

    toggle.addEventListener("click", ()=>{
      navItems.classList.toggle("active")
    })