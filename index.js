document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('hiddenn') || entry.target.classList.contains('hiddenn1')) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.add('show0');
                }
            } else {
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
    } else if (scrollTop < lastScrollTop || scrollTop === 0) {

        navbar.style.top = "1.5%";
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});


    const productContainers = [...document.querySelectorAll('.product-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    let autoScrollIntervals = [];
    const scrollInterval = 6000;

    function startAutoScroll(container, cardWidth, index) {
        console.log(`Starting auto-scroll for container ${index}`);
        autoScrollIntervals[index] = setInterval(() => {
            container.scrollLeft += cardWidth;

            if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                console.log(`Container ${index} reached the end. Resetting to start.`);
                container.scrollLeft = 0;
            }
        }, scrollInterval);
    }

    function stopAutoScroll(index) {
        console.log(`Stopping auto-scroll for container ${index}`);
        clearInterval(autoScrollIntervals[index]);
    }

    productContainers.forEach((container, i) => {
        const cardWidth = container.querySelector('.product-card').getBoundingClientRect().width;
        console.log(`Card width for container ${i}: ${cardWidth}`);

        nxtBtn[i].addEventListener('click', () => {
            console.log(`Next button clicked for container ${i}`);
            stopAutoScroll(i);
            container.scrollLeft += cardWidth;

            if (container.scrollLeft + container.clientWidth > container.scrollWidth) {
                console.log(`Container ${i} reached the end. Resetting to start.`);
                container.scrollLeft = 0;
            }
            startAutoScroll(container, cardWidth, i);
        });

        preBtn[i].addEventListener('click', () => {
            console.log(`Previous button clicked for container ${i}`);
            stopAutoScroll(i);
            container.scrollLeft -= cardWidth;
            startAutoScroll(container, cardWidth, i);
        });

        let isScrolling;
        container.addEventListener('scroll', () => {
            stopAutoScroll(i);
            clearTimeout(isScrolling);
            isScrolling = setTimeout(() => startAutoScroll(container, cardWidth, i), scrollInterval * 1.55);
        });

        const containerObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startAutoScroll(container, cardWidth, i);
                } else {
                    stopAutoScroll(i);
                }
            });
        });

        containerObserver.observe(container);
    });
});


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Mesazhi u dergua me sukses', 'success')
  })
}