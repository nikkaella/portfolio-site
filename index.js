window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('loaded');
    setTimeout(() => {
      preloader.remove();
    }, 3000);
  });