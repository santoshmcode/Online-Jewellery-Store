let cart = document.getElementById('cart');

let cartArray = JSON.parse(localStorage.getItem('cart'));
let sum = 0
cartArray.forEach(function (el) {
     let div = document.createElement("div");
     let name = document.createElement("p");
     let price = document.createElement("p");
     let img = document.createElement("img");
     

     name.innerHTML = el.name;
     price.innerHTML = "₹" + el.price + "/-";
     img.src = el.img;
   
    sum += el.price
    cart.append(div);
    div.append(img, name, price);
})

let total = document.getElementById("total");
total.innerHTML = "₹" + sum + "/-";

let promoCode = document.getElementById("promo");
let pTotal = document.getElementById("total_p");

promoCode.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        if (promoCode.value === "MASAI30") {
            let del = document.createElement("del")
            del.innerHTML = "₹" + sum + "/-";
            pTotal.append(del)

            let discount = sum - (sum * 0.3)
            total.innerHTML = "₹" + discount + "/-";
        } else {
            alert("Invalid Promo Code")
        }
    }
    
})

function checkoutPage() {
    window.location.href = "checkout.html"
}