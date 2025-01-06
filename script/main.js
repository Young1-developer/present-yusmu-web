
AOS.init({
    duration: 1000,
    once: true
  });
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


 
  document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('.hero-video');
    video.addEventListener('loadeddata', function () {
      video.play().catch(function (error) {
        console.log("Video autoplay failed:", error);
      });
    });
    video.addEventListener('error', function () {
      video.style.display = 'none';
    });
  });