let productsArray = [
    {
        name: "OnePlus 9R 5G",
        price: 43999.0,
        brand: "OnePlus",
        img1: "https://images-na.ssl-images-amazon.com/images/I/613RwAU-njL._SL1500_.jpg",
        img2: "https://images-na.ssl-images-amazon.com/images/I/516j2uAjMpL._SL1500_.jpg",
    },

    {
        name: "OnePlus Nord CE 5G",
        price: 24999.0,
        brand: "OnePlus",
        img1: "https://images-na.ssl-images-amazon.com/images/I/61XbSVQO%2BzS._SL1500_.jpg",
        img2: "https://images-na.ssl-images-amazon.com/images/I/51mXuIyhfCS._SL1500_.jpg",
    },

    {
        name: "Redmi Note 10",
        price: 12999.0,
        brand: "Redmi",
        img1: "https://images-na.ssl-images-amazon.com/images/I/71QY6JV6FhS._SL1500_.jpg",
        img2: "https://images-na.ssl-images-amazon.com/images/I/61F-ydJC6rL._SL1500_.jpg",
    },

    {
        name: "Redmi 9",
        price: 8999.0,
        brand: "Redmi",
        img1: "https://images-na.ssl-images-amazon.com/images/I/716nHhG9SWL._SL1500_.jpg",
        img2: "https://images-na.ssl-images-amazon.com/images/I/81z35APBCKL._SL1500_.jpg",
    },

    {
        name: "OPPO A74 5G",
        price: 17990,
        brand: "oppo",
        img1: "https://images-na.ssl-images-amazon.com/images/I/71geVdy6-OS._SL1500_.jpg",
        img2: "https://images-na.ssl-images-amazon.com/images/I/71PrvMR6-sL._SL1500_.jpg",
    },

    {
        name: "OPPO A31",
        price: 12490.0,
        brand: "oppo",
        img1: "https://images-na.ssl-images-amazon.com/images/I/61CnyJ-IbML._SL1500_.jpg",
        img2: "https://images-na.ssl-images-amazon.com/images/I/51lwdC6A9eL._SL1500_.jpg",
    },

    {
        name: "Realme X50 Pro",
        price: 32990.0,
        brand: "Realme",
        img1: "https://images-na.ssl-images-amazon.com/images/I/61D2%2BbCzY0L._SL1500_.jpg",
        img2: "https://images-na.ssl-images-amazon.com/images/I/618C%2BEgryyL._SL1500_.jpg",
    },

    {
        name: "Realme C11",
        price: 6999.0,
        brand: "Realme",
        img1: "https://images-na.ssl-images-amazon.com/images/I/71FYSKYFupS._SL1500_.jpg",
        img2: "https://images-na.ssl-images-amazon.com/images/I/71ilEzXMAZS._SL1500_.jpg",
    },

    {
        name: "Samsung Galaxy M42 5G",
        price: 21999.0,
        brand: "Samsung",
        img1: "https://images-na.ssl-images-amazon.com/images/I/71LweCKOpFL._SL1500_.jpg",
        img2: "https://images-na.ssl-images-amazon.com/images/I/8106h0t0kuS._SL1500_.jpg",
    },
];

localStorage.setItem("eProducts", JSON.stringify(productsArray));

let catalogue = document.getElementById("catalogue");

let cart = [];
let flag = false;

productsArray.forEach(function (el) {
    let div = document.createElement("div");
    let name = document.createElement("p");
    let price = document.createElement("p");
    let img = document.createElement("img");
    let addToCart = document.createElement("button");

    name.innerHTML = el.name;
    price.innerHTML = "₹" + el.price + "/-";
    img.src = el.img1;
    addToCart.innerHTML = "Add to Cart";

    addToCart.addEventListener("click", function (event) {
        let obj = {
            name: el.name,
            price: el.price,
            img: el.img1,
        };

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].name == el.name) {
                flag = true;
            }
        }
        if (flag) {
            alert("Item already added to cart");
        } else {
            cart.push(obj);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    });

    catalogue.append(div);
    div.append(img, name, price, addToCart);

    img.addEventListener("mouseenter", function () {
        img.src = el.img2;
    });
});

let byBrand = document.getElementById("by-brand");
byBrand.addEventListener("change", function () {
    catalogue.innerHTML = null;
    productsArray.forEach(function (el) {
        if (byBrand.value == el.brand) {
            let div = document.createElement("div");
            let name = document.createElement("p");
            let price = document.createElement("p");
            let img = document.createElement("img");
            let addToCart = document.createElement("button");

            name.innerHTML = el.name;
            price.innerHTML = "₹" + el.price + "/-";
            img.src = el.img1;
            addToCart.innerHTML = "Add to Cart";

            addToCart.addEventListener("click", function (event) {
                let obj = {
                    name: el.name,
                    price: el.price,
                    img: el.img1,
                };

                for (let i = 0; i < cart.length; i++) {
                    if (cart[i].name == el.name) {
                        flag = true;
                    }
                }
                if (flag) {
                    alert("Item already added to cart");
                } else {
                    cart.push(obj);
                }

                localStorage.setItem("cart", JSON.stringify(cart));
            });

            catalogue.append(div);
            div.append(img, name, price, addToCart);

            img.addEventListener("mouseenter", function () {
                img.src = el.img2;
            });
        } else if (byBrand.value == "all") {
            let div = document.createElement("div");
            let name = document.createElement("p");
            let price = document.createElement("p");
            let img = document.createElement("img");
            let addToCart = document.createElement("button");

            name.innerHTML = el.name;
            price.innerHTML = "₹" + el.price + "/-";
            img.src = el.img1;
            addToCart.innerHTML = "Add to Cart";

            addToCart.addEventListener("click", function (event) {
                let obj = {
                    name: el.name,
                    price: el.price,
                    img: el.img1,
                };

                for (let i = 0; i < cart.length; i++) {
                    if (cart[i].name == el.name) {
                        flag = true;
                    }
                }
                if (flag) {
                    alert("Item already added to cart");
                } else {
                    cart.push(obj);
                }

                localStorage.setItem("cart", JSON.stringify(cart));
            });

            catalogue.append(div);
            div.append(img, name, price, addToCart);

            img.addEventListener("mouseenter", function () {
                img.src = el.img2;
            });
        }
    });
});

let byPrice = document.getElementById("by-price");
byPrice.addEventListener("change", function () {
    catalogue.innerHTML = null;

    if (byPrice.value == "low-to-high") {
        productsArray.sort(function (a, b) {
            return a.price - b.price;
        });
        productsArray.forEach(function (el) {
            let div = document.createElement("div");
            let name = document.createElement("p");
            let price = document.createElement("p");
            let img = document.createElement("img");
            let addToCart = document.createElement("button");

            name.innerHTML = el.name;
            price.innerHTML = "₹" + el.price + "/-";
            img.src = el.img1;
            addToCart.innerHTML = "Add to Cart";

            addToCart.addEventListener("click", function (event) {
                let obj = {
                    name: el.name,
                    price: el.price,
                    img: el.img1,
                };

                for (let i = 0; i < cart.length; i++) {
                    if (cart[i].name == el.name) {
                        flag = true;
                    }
                }
                if (flag) {
                    alert("Item already added to cart");
                } else {
                    cart.push(obj);
                }

                localStorage.setItem("cart", JSON.stringify(cart));
            });

            catalogue.append(div);
            div.append(img, name, price, addToCart);

            img.addEventListener("mouseenter", function () {
                img.src = el.img2;
            });
        });
    } else if (byPrice.value == "high-to-low") {
        productsArray.sort(function (a, b) {
            return b.price - a.price;
        });
        productsArray.forEach(function (el) {
            let div = document.createElement("div");
            let name = document.createElement("p");
            let price = document.createElement("p");
            let img = document.createElement("img");
            let addToCart = document.createElement("button");

            name.innerHTML = el.name;
            price.innerHTML = "₹" + el.price + "/-";
            img.src = el.img1;
            addToCart.innerHTML = "Add to Cart";

            addToCart.addEventListener("click", function (event) {
                let obj = {
                    name: el.name,
                    price: el.price,
                    img: el.img1,
                };

                for (let i = 0; i < cart.length; i++) {
                    if (cart[i].name == el.name) {
                        flag = true;
                    }
                }
                if (flag) {
                    alert("Item already added to cart");
                } else {
                    cart.push(obj);
                }

                localStorage.setItem("cart", JSON.stringify(cart));
            });

            catalogue.append(div);
            div.append(img, name, price, addToCart);

            img.addEventListener("mouseenter", function () {
                img.src = el.img2;
            });
        });
    }
});
