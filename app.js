const toggle = document.querySelector(".nav-menu")
const navItems = document.querySelector(".navbar-nav")
const backButton = document.querySelector('.btn_back_top');

    toggle.addEventListener("click", ()=>{
      navItems.classList.toggle("active")
    })

    window.onscroll = function () {
      scrollFunction();
    };
    
    const scrollFunction = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backButton.style.display = 'block';
      } else {
        backButton.style.display = 'none';
      }
    };

    const getToTop = () => {
      console.log('clicked');
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
    

    backButton.addEventListener('click', getToTop);