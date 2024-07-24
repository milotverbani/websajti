var products = [
    {
        image: "./images/portfolio1.jpeg",
        brand: "./images/logo1nobcg.png",
        description: "Siperfaqe Oborresh"
    },
    {
        image: "./images/portfolio2.jpg",
        brand: "./images/logo1nobcg.png",
        description: "Siperfaqe Oborresh"
    },
    {
        image: "./images/portfolio3.jpg",
        brand: "./images/logo1nobcg.png",
        description: "Arendim Hortikulturore"
    },
    {
        image: "./images/portfolio4.jpg",
        brand: "./images/logo1nobcg.png",
        description: "Siperfaqe Oborresh"
    },
    {
        image: "./images/portfolio5.jpeg",
        brand: "./images/logo1nobcg.png",
        description: "Precizion ne shkallen me te lart te prerjes"
    },
    {
        image: "./images/portfolio6.jpeg",
        brand: "./images/logo1nobcg.png",
        description: "Precizion në shkallën më të lart të prerjes"
    },
    {
        image: "./images/portfolio7.jpeg",
        brand: "./images/logo1nobcg.png",
        description: "Arendim i Parqeve"
    },
    {
        image: "./images/portfolio8.jpeg",
        brand: "./images/logo1nobcg.png",
        description: "Siperfaqe Oborresh"
    },
    {
        image: "./images/portfolio9.jpeg",
        brand: "./images/logo1nobcg.png",
        description: "Arendim i Parqeve"
    },
    {
        image: "./images/portfolio10.jpeg",
        brand: "./images/logo1nobcg.png",
        description: "Arendim i Parqeve"
    }, 
    {
        image: "./images/portfolio11.jpg",
        brand: "./images/logo1nobcg.png",
        description: "Siperfaqe Oborresh"
    }, 
    {
        image: "./images/portfolio12.jpeg",
        brand: "./images/logo1nobcg.png",
        description: "Siperfaqe Oborresh"
    }, 
    {
        image: "./images/portfolio13.jpeg",
        brand: "./images/logo1nobcg.png",
        description: "Siperfaqe Oborresh"
    }, 
    {
        image: "./images/portfolio14.jpeg",
        brand: "./images/logo1nobcg.png",
        description: "Siperfaqe Oborresh"
    }, 
    {
        image: "./images/portfolio15.jpeg",
        brand: "./images/logo1nobcg.png",
        description: "Siperfaqe Oborresh"
    }, 
    {
        image: "./images/portfolio16.jpeg",
        brand: "./images/logo1nobcg.png",
        description: "Siperfaqe Oborresh"
    }, 
    {
        image: "./images/portfolio17.jpeg",
        brand: "./images/logo1nobcg.png",
        description: "Siperfaqe Oborresh"
    }, 
    {
        image: "./images/portfolio18.jpg",
        brand: "./images/logo1nobcg.png",
        description: "Siperfaqe Oborresh"
    } 
    
    
    
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
        
