const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Check if the entry target has one of the specified classes
      if (entry.target.classList.contains('hiddenn') || entry.target.classList.contains('hiddenn1')) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.add('show0');
      }
    } else {
      // Remove classes when not intersecting
      entry.target.classList.remove('show', 'show0');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hiddenn, .hiddenn1, .hiddenn0');
hiddenElements.forEach((el) => observer.observe(el));

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
    } else {
        navbar.style.top = "1.5%";  
    }
    lastScrollTop = scrollTop;
});


const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})