const hamburger = document.querySelector('.hamburger');
const hamburgerMenuDisplay = document.querySelector('.links');
const socialMedia = document.querySelector('.social-media-sign-in-join');
const links = document.querySelectorAll('.links a');
const navbar = document.getElementById("navbar");
const navbarLogo = document.querySelector(".logo");
const navElement = document.querySelector('.header-nav');
const homeSection = document.getElementById('home');

if(window.innerWidth <= 425 || document.documentElement.clientWidth <= 425) {
    navElement.classList.remove("overlay");
    homeSection.classList.add("overlay");

 }

hamburger.addEventListener('click', function() {
    this.classList.toggle('open');
    if (this.classList.contains('open')) {
      hamburgerMenuDisplay.style.display = 'block';
      socialMedia.style.display = 'grid';
  } else {
      hamburgerMenuDisplay.style.display = 'none';
      socialMedia.style.display = 'none';
  }
});

hamburger.addEventListener('ontouchstart', () => {
  this.classList.toggle('open');
    if (this.classList.contains('open')) {
      hamburgerMenuDisplay.style.display = 'block';
      socialMedia.style.display = 'grid';
  } else {
      hamburgerMenuDisplay.style.display = 'none';
      socialMedia.style.display = 'none';
  }
});





links.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    hamburgerMenuDisplay.style.display = 'none';
    socialMedia.style.display = 'none';
  });
});
links.forEach(link => {
  hamburger.classList.remove('open');
  link.addEventListener('ontouchstart', () => {
    hamburgerMenuDisplay.style.display = 'none';
    socialMedia.style.display = 'none';
  });
});





window.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition > 0) {
      navbar.classList.add("scrolled");
      homeSection.classList.remove("hero");
      homeSection.classList.add("scroll");
      navbarLogo.style.color = "black";
      navElement.style.padding = '0';
      navElement.classList.remove("overlay");
      homeSection.classList.add("overlay");

    } else {
      homeSection.classList.remove("scroll");
      homeSection.classList.add("hero");
      navbar.classList.remove("scrolled");
      navElement.classList.add("overlay");
      homeSection.classList.remove("overlay");
      
    }
  });
  