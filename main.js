// Function to add product to cart
function function_add_to_cart() {
    // Get product details
    var productName = document.querySelector('.product-name').innerText;
    var productPrice = document.querySelector('.product-price').innerText;
    var productSize = document.querySelector('.product-size').value;
    var productQuantity = document.querySelector('.product-quantity').value;
    var productImage = document.getElementById('MainImg').src;

    // Create an object with product information
    var product = {
        name: productName,
        price: productPrice,
        size: productSize,
        quantity: productQuantity,
        image: productImage
    };

    // Store product in cart (using localStorage for simplicity)
    var cart = localStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}

