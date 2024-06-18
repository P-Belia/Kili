// Scroll animation

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

// Home page imgevenement effect

window.addEventListener('load', function() {
  var image = document.getElementById('imgevenement');
  
  // Retirer la classe pour le zoom in après 3 secondes
  setTimeout(function() {
    image.classList.remove('zoom-in');
    image.classList.add('zoom-out');
  }, 1000);
});

// Animation image

const scrollElements2 = document.querySelectorAll(".zoom-in2");

const elementInView2 = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView2 = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement2 = (element) => {
  element.classList.add("zoom-in2");
};

const hideScrollElement2 = (element) => {
  element.classList.remove("zoom-in2");
};

const handleScrollAnimation2 = () => {
  scrollElements2.forEach((el) => {
    if (elementInView2(el, 1.35)) {
      displayScrollElement2(el);
    } else if (elementOutofView2(el)) {
      hideScrollElement2(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation2();
});


//Bar de progression

document.getElementsByClassName('scrollDiv').addEventListener('scroll', function() {
            const scrollDiv = this;
            const scrollButton = document.getElementById('btn');
            const scrollTop = scrollDiv.scrollTop;
            const scrollHeight = scrollDiv.scrollHeight - scrollDiv.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;

            scrollButton.style.backgroundSize = scrollPercent + '% 100%';
        });
/*
document.getElementById('scrollDiv').addEventListener('scroll', function() {
  const scrollDiv = this;
  const progressBar = document.getElementsByClassName ('btn');
  const scrollTop = scrollDiv.scrollTop;
  const scrollHeight = scrollDiv.scrollHeight - scrollDiv.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = scrollPercent + '%'; 
});*/


/* const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  if (windowWidth < 412 && windowHeight < 883) {
    dividend = 1.1;
  }

  return elementTop <= windowHeight / dividend;
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return elementTop > windowHeight;
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", handleScrollAnimation);

/*Home page imgevenement effect

window.addEventListener("load", () => {
  const imgevenement = document.createElement("img");
  imgevenement.src = "./evenement/journeefemmes-180323.jpeg"

  imgevenement.style.position = "fixed";
  imgevenement.style.top = "50%";
  imgevenement.style.left = "50%";
  imgevenement.style.transform = "translate(-50%, -50%)";
  imgevenement.style.animation = "zoom 3s infinite alternate";

  document.body.appendChild(imgevenement);

  setTimeout(() => {
    imgevenement.style.animation = "none";
  }, 3000);
});*/

//formulaire de contactc

document.getElementById('contact-form').addEventListener('submit', function(event) {
  var errorMessage = document.getElementById('error-message');
  var emailInput = document.querySelector('input[type="email"]');
  var emailValue = emailInput.value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    event.preventDefault();
    errorMessage.textContent = 'Veuillez fournir une adresse e-mail valide.';
    emailInput.focus();
  }
});
