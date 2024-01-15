let swiper = new Swiper(".heroContainer", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    speed: 900,
    loop: true,
    pagination: {
        el: ".swipper-pagination",
        clickable: true,
    }
  });
let header = document.querySelector('header');

function scrollHeader() {
    let scrollY = window.pageYOffset;

    if(scrollY > 30) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

window.addEventListener('scroll', scrollHeader);

var swiper2 = new Swiper(".clientContainer", {
    slidePerView: 2,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        250: {
            slidesPerView: 1,
        }
    }
  });

  let sections = document.querySelectorAll('section[id]');

  function activeLink() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 40;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.menu a[href*='+ sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.menu a[href*='+ sectionId + ']').classList.remove('active');
        }
    })
  }

  window.addEventListener('scroll', activeLink); 

  let btnTop = document.querySelector('.btnTop');
  window.addEventListener('scroll', function() {
    if(window.pageYOffset > 150) {
        btnTop.classList.add('active');
    } else {
        btnTop.classList.remove('active');
    }
  })

  let toggleIcon = document.querySelector('.toggle_icon');
  let closeIcon = document.querySelector('.close_icon');
  let menu = document.querySelector('.menu');
  let li = document.querySelectorAll('.menu li');

  toggleIcon.addEventListener('click', () => {
    menu.classList.add('active');
  });

  closeIcon.addEventListener('click', () => {
    menu.classList.remove('active');
  });

  li.forEach(el => {
    el.addEventListener('click', () => {
        menu.classList.remove('active');
    })
  });

  let mixer = mixitup('.foodContainer', {
    selectors: {
        target: '.foodItem'
    },
    animation: {
        duration: 300
    }
  })

  let select = document.querySelector('.select');

  select.addEventListener('click', () => {
    select.classList.toggle('active');
  })

  let filters = document.querySelectorAll('.filter');
  function activeFilter () {
    filters.forEach(filter => filter.classList.remove('active'));
    this.classList.add('active');
  }

  filters.forEach(filter => filter.addEventListener('click', activeFilter));