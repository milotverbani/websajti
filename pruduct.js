var products = [
    {
        image: "./images/portfolio1.jpg",
        brand: "Learti Park",
        description: "descriptionasdfghj"
    },
    {
        image: "./images/portfolio1.jpg",
        brand: "Learti Park",
        description: "descriptionasdfghj"
    },
    {
        image: "./images/portfolio1.jpg",
        brand: "Learti Park",
        description: "descriptionasdfghj"
    },
    {
        image: "./images/portfolio1.jpg",
        brand: "Learti Park",
        description: "descriptionasdfghj"
    },
    {
        image: "./images/portfolio1.jpg",
        brand: "Learti Park",
        description: "descriptionasdfghj"
    },
    {
        image: "./images/portfolio1.jpg",
        brand: "Learti Park",
        description: "descriptionasdfghj"
    },
    {
        image: "./images/portfolio1.jpg",
        brand: "Learti Park",
        description: "descriptionasdfghj"
    },
    {
        image: "./images/portfolio1.jpg",
        brand: "Learti Park",
        description: "descriptionasdfghj"
    },
    {
        image: "./images/portfolio1.jpg",
        brand: "Learti Park",
        description: "descriptionasdfghj"
    },
    {
        image: "./images/portfolio1.jpg",
        brand: "Learti Park",
        description: "descriptionasdfghj"
    }, 
    {
        image: "./images/portfolio1.jpg",
        brand: "Learti Park",
        description: "descriptionasdfghj"
    }, 
    {
        image: "./images/portfolio1.jpg",
        brand: "Learti Park",
        description: "descriptionasdfghj"
    }, 
    {
        image: "./images/portfolio1.jpg",
        brand: "Learti Park",
        description: "descriptionasdfghj"
    },
    {
        image: "./images/portfolio1.jpg",
        brand: "Learti Park",
        description: "descriptionasdfghj"
    }
    , {
        image: "./images/portfolio1.jpg",
        brand: "Learti Park",
        description: "descriptionasdfghj"
    },
    {
        image: "./images/portfolio1.jpg",
        brand: "Learti Park",
        description: "descriptionasdfghj"
    },
    {
        image: "./images/portfolio1.jpg",
        brand: "Learti Park",
        description: "descriptionasdfghj"
    }
    
];

function populateDom(products) {
    var output = '';
    products.forEach((product, index) => {
        output += "<div class='product-card'>" +
                    "<div class='product-image'>" + 
                        "<img class='product-thumb' src=" + product.image + ">" +
                        "<button class='card-btn' data-index=" + index + ">See more</button>" +
                    "</div>" + 
                    "<div class='product-info'>" + 
                        "<h2 class='product-brand'>" + product.brand + "</h2>" +
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
    modalBrand.textContent = product.brand;
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
}

document.addEventListener('DOMContentLoaded', function() {
    populateDom(products);
});
