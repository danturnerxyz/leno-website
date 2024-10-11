document.addEventListener('DOMContentLoaded', function () {
  // MOBILE MENU
  const mobileToggle = document.querySelector('.navbar__mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
  

  mobileToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  })

  // VIDEO MODAL
  const modal = document.getElementById('videoModal');
  const videoButton = document.querySelector('.preview__video-button')
  const closeButton = document.querySelector('.modal__close-button')
  const videoPlayer = document.getElementById('videoPlayer')

  // OPEN MODAL WHEN CLICKED
  videoButton.addEventListener('click', function () {
    modal.style.display = 'block'

    // REPLACE SRC ATTRIBUTE WITH VIDEO URL
    videoPlayer.src = 'https://www.youtube.com/embed/8sXRyHI3bLw'

    // CLOSE MODAL BUTTON ON BUTTON CLICK
    closeButton.addEventListener('click', function () {
      modal.style.display = 'none';
      videoPlayer.src = '';
    })

    // CLOSE MODAL ON CLICK OUTSIDE MODAL
    window.addEventListener('click', function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
        videoPlayer.src = '';
      }
    })
  })
});

// NAVIGATION BACKGROUND ON SCROLL
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.toggle('navbar--scroll');
  } else {
    navbar.classList.remove('navbar--scroll')
  }
})