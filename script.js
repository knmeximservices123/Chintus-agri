// Chintus Agri Website

window.onload = function () {
    console.log("Welcome to Chintus Agri");
};

// Order confirmation
function orderNow(product) {
    alert("Thank you! You selected: " + product);

    window.open(
        "https://wa.me/919095652696?text=Hello, I want to order " +
        encodeURIComponent(product),
        "_blank"
    );
}
