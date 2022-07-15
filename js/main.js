/* ==============Video nav==================== */

    const videos = document.querySelectorAll('[data-name="video-block"]');

    videos.forEach(function(item){
    item.addEventListener('click', function(){
        
        this.firstElementChild.classList.toggle('hidden');
    
        if (this.lastElementChild.paused) {
            this.lastElementChild.play();
           
        } else {
            this.lastElementChild.pause();
        }
    })
   })

/* ==============Mobile menu==================== */

    const menu = document.querySelector('.burger-menu');
    const button = document.querySelector('.burger');
    const links = document.querySelector('.burger-menu__nav');
    const overlay = document.querySelector('.burger-menu__overlay');

    button.addEventListener('click', function(e) {
        e.preventDefault();
        toggleMenu();
    });

    links.addEventListener('click', function(){
        toggleMenu();
    });
    overlay.addEventListener('click', function(){
        toggleMenu();
    });

    function toggleMenu() {
        menu.classList.toggle('burger-menu__active');

        if(menu.classList.contains('burger-menu__active')) {
            document.body.style.overflow = "hidden";
        }else {
            document.body.style.overflow = "visible";
        }
    }


    /* ==============FAQ==================== */
  
const questions = document.querySelectorAll("[data-name='faq-question']");

questions.forEach(function(item){
    item.addEventListener("click", function(){
       this.nextElementSibling.classList.toggle("faq__answer--hidden");
    })
})