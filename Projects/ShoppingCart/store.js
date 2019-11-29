if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready); //when all the elements of DOM are loaded
} else {
    ready();
}

function ready() {

    // basic user interface intractions and event listener : remove item
    var removeCartItemButtons = document.getElementsByClassName('btn-remove');
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    // basic user interface intractions and event listener: changing number of items
    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    // basic user interface intractions and event listener : add items to cart
    var addToCartButtons = document.getElementsByClassName('shop-item-button');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }

    // purchasing items from cart
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
}

// purchasing items from cart
function purchaseClicked() {
    alert('Thank you for your purchase');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }

    document.getElementsByClassName("side-cart")[0].classList.add("hide");
    document.getElementsByClassName("cart")[0].classList.add("hide");
    updateCartTotal();  // empty the cart after purchase
}

// remove item from cart : btn-remove
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

// update the number of specific items : quantity.
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

// add items to cart
function addToCartClicked(event) {

    // dropping down animation.
    var hideClass = document.getElementsByClassName("container");
    for (var i = 0; i < hideClass.length; i++) {
        // unhide the cart, when user adds and item to cart
        if (hideClass[i].classList.contains("hide")) {
            hideClass[i].classList.remove("hide");
        }
    }
    // jquery clone method to make a copy of object
    console.log(document.getElementsByClassName("side-cart-img")[0].classList.add("roll-cart"));
    $(this).parent().parent().find("img").clone().addClass("zoom").appendTo(".side-bar-cart");

    setTimeout(function () {
        // $(".roll-cart").remove();
        $(".zoom").remove();
    }, 1500);

    // adding the items to cart
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

// adding all the details to cart, when add to cart is clicked
function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart');
            return;
        }
    }

    var orderDate = new Date();
    // updating innerHTML with all the details, image of item, price of item, etc
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
            <span class="order-date">(${orderDate.toLocaleDateString()})</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-remove" type="button">REMOVE</button>
        </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}

// updating the total bill amount
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}