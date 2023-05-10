const fadeIn = () => {
  const elements = document.querySelectorAll('.fade');
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowPosition = window.innerHeight / 1.1;
    if (elementPosition < windowPosition) {
      element.style.opacity = 1;
    }
  });
};

window.addEventListener('scroll', fadeIn);
