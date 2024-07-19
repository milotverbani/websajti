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
let autoScrollInterval;
const scrollInterval = 5000; // 3 seconds for auto-scrolling

function startAutoScroll(item, containerWidth) {
    autoScrollInterval = setInterval(() => {
        item.scrollLeft += containerWidth;
        // Check if we've reached the end and reset to the beginning
        if (item.scrollLeft >= item.scrollWidth - containerWidth) {
            item.scrollLeft = 0;
        }
    }, scrollInterval);
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Initialize the scroll functionality for each container
productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    // Start auto-scrolling
    startAutoScroll(item, containerWidth);

    // Handle next button click
    nxtBtn[i].addEventListener('click', () => {
        stopAutoScroll();
        item.scrollLeft += containerWidth;
        // Restart auto-scrolling after manual navigation
        startAutoScroll(item, containerWidth);
    });

    // Handle previous button click
    preBtn[i].addEventListener('click', () => {
        stopAutoScroll();
        item.scrollLeft -= containerWidth;
        // Restart auto-scrolling after manual navigation
        startAutoScroll(item, containerWidth);
    });
     let isScrolling;

    item.addEventListener('scroll', () => {
        stopAutoScroll();
        // Restart auto-scrolling after a delay
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => startAutoScroll(item, containerWidth), scrollInterval * 2); // Restart after 6 seconds of inactivity
    });
});