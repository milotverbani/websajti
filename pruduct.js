var products = [
    {
        image: "./images/portfolioimg3.jpg",
        brand: "./images/logo1nobcg.png",
        description: "Siperfaqe Oborresh"
    },
    {
        image: "./images/portfolioimg2.jpg",
        brand: "./images/logo1nobcg.png",
        description: "Siperfaqe Oborresh"
    },
    {
        image: "./images/portfolioimg3.jpg",
        brand: "./images/logo1nobcg.png",
        description: "Arendim Hortikulturore"
    },
    {
        image: "./images/portfolioimg6.jpg",
        brand: "./images/logo1nobcg.png",
        description: "Siperfaqe Oborresh"
    },
    {
        image: "./images/portfolioimg7.jpg",
        brand: "./images/logo1nobcg.png",
        description: "Precizion ne shkallen me te lart te prerjes"
    },
    {
        image: "./images/portfolioimg8.jpg",
        brand: "./images/logo1nobcg.png",
        description: "Precizion në shkallën më të lart të prerjes"
    },
    {
        image: "./images/oborret.jpg",
        brand: "./images/logo1nobcg.png",
        description: "Arendim i Parqeve"
    },
    {
        image: "./images/portfolioimg.jpg",
        brand: "./images/logo1nobcg.png",
        description: "Siperfaqe Oborresh"
    },
    {
        image: "./images/homelogo3.jpg",
        brand: "./images/logo1nobcg.png",
        description: "Arendim i Parqeve"
    },
    {
        image: "./images/portfolio2.jpg",
        brand: "./images/logo1nobcg.png",
        description: "Arendim i Parqeve"
    }, 
    {
        image: "./images/portfolioimg1.jpg",
        brand: "./images/logo1nobcg.png",
        description: "Siperfaqe Oborresh"
    }, 
    
    
];

function populateDom(products) {
    var output = '';
    products.forEach((product, index) => {
        output += "<div class='product-card'>" +
                    "<div class='product-image'>" + 
                        "<img class='product-thumb' src=" + product.image + " alt='Product Photo'>" +
                        "<button class='card-btn' data-index=" + index + ">Shiko më shumë</button>" +
                    "</div>" + 
                    "<div class='product-info'>" + 
                        "<img class='modalBrand' src=" + product.brand + " alt='productlogo'>" +
                    "</div>" +  
                "</div>";
    });

    document.getElementsByClassName('product-container')[0].innerHTML = output;

    document.querySelectorAll('.card-btn').forEach(button => {
        button.addEventListener('click', function() {
            var index = this.getAttribute('data-index');
            showModal(products[index]);
        });
    });
}

function showModal(product) {
    var modal = document.getElementById("productModal");
    var modalImage = document.getElementById("modalImage");
    var modalBrand = document.getElementById("modalBrand");
    var modalDescription = document.getElementById("modalDescription");

    modalImage.src = product.image;
    modalBrand.src = product.brand;
    modalDescription.textContent = product.description;

    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
          modal.style.display = "none";
        }
      })
}

document.addEventListener('DOMContentLoaded', function() {
    populateDom(products);
});
var span = document.getElementsByClassName("close")[0];
            span.onclick = function() {
                closeModal(modal);
            };

            function closeModal(modal) {
                modal.classList.add("fade-out");
                modal.classList.add('blur(5px)')
                modal.style.animation = "fadeOut 0.5s";
                setTimeout(() => {
                    modal.style.display = "none";
                    modal.classList.remove("fade-out");
                    modal.classList.remove("blur(5px)");
                }, 500);
            }
        
