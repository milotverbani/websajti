
        var products = [
            {
                image: "./images/portfolio1.jpg",
                brand: "Learti Park"
            },
            {
                image: "./images/portfolio1.jpg",
                brand: "Learti Park"
            },
            {
                image: "./images/portfolio1.jpg",
                brand: "Leart Park"
            },
            {
                image: "./images/portfolio1.jpg",
                brand: "Leart Park"
            },
            {
                image: "./images/portfolio1.jpg",
                brand: "Leart Park"
            },
            {
                image: "./images/portfolio1.jpg",
                brand: "Leart Park"
            },
            {
                image: "./images/portfolio1.jpg",
                brand: "Leart Park"
            },
            {
                image: "./images/portfolio1.jpg",
                brand: "Leart Park"
            },
            {
                image: "./images/portfolio1.jpg",
                brand: "Leart Park"
            },
            {
                image: "./images/portfolio1.jpg",
                brand: "Leart Park"
            },
        ];

        function populateDom(products) {
            var output = '';
            products.forEach((product) => {
                output += "<div class='product-card'>" +
                            "<div class='product-image'>" + 
                                "<img class='product-thumb' src=" + product.image + ">" +
                                "<button class='card-btn'>" + "See more" + "</button>" +
                            "</div>" + 
                            "<div class='product-info'>" + 
                                "<h2 class='product-brand'>" + product.brand + "</h2>" +
                            "</div>" +  
                        "</div>";
            });

            document.getElementsByClassName('product-container')[0].innerHTML = output;
        }
     
            document.addEventListener('DOMContentLoaded', function() {
                populateDom(products);
            });
