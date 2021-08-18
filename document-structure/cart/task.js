const products = document.querySelector('.products');
const cart = document.querySelector('.cart');
const cartProducts = document.querySelector('.cart__products');



products.addEventListener('click', (e) => {
    if(e.target.classList.contains('product__quantity-control_inc')) {
        e.target.closest('.product').querySelector('.product__quantity-value').textContent++;
    } else if (e.target.classList.contains('product__quantity-control_dec')) {
        if (e.target.closest('.product').querySelector('.product__quantity-value').textContent <= 1) {
            e.target.closest('.product').querySelector('.product__quantity-value').textContent = 1;
        } else {
            e.target.closest('.product').querySelector('.product__quantity-value').textContent--;
        }
    }

    else if (e.target.classList.contains('product__add')) {
       
        let arrCart = Array.from(cartProducts.children);
        let findCart = arrCart.find(item => item.dataset.id === e.target.closest('.product').dataset.id);
        if(findCart) {
            let productInCartCount = findCart.querySelector('.cart__product-count');
            let countInCartInNumber = Number(productInCartCount.textContent);
            let countNumber = Number(e.target.closest('.product').querySelector('.product__quantity-value').textContent);
            productInCartCount.textContent = countInCartInNumber + countNumber;
        } else {
            let productInCart = document.createElement('div');
            productInCart.classList.add('cart__product');
            productInCart.setAttribute('data-id', e.target.closest('.product').dataset.id);

            let productImg = document.createElement('img');
            productImg.classList.add('cart__product-image');
            productImg.setAttribute('src', e.target.closest('.product').querySelector('.product__image').src);
            productInCart.append(productImg);

            let productCount = document.createElement('div');
            productCount.classList.add('cart__product-count');
            productCount.textContent = e.target.closest('.product').querySelector('.product__quantity-value').textContent;
            productInCart.append(productCount);

            document.querySelector('.cart__products').append(productInCart);
        }
    }
});
