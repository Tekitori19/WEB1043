let productsData = [
    { id: 1, name: "Product 1", price: 10, img: "anh1.png" },
    { id: 2, name: "Product 2", price: 20, img: "anh2.png" },
    { id: 3, name: "Product 3", price: 30, img: "anh3.png" },
    { id: 4, name: "Product 4", price: 40, img: "anh4.png" },
    { id: 5, name: "Product 5", price: 50, img: "anh5.png" }
];

let cartItems = [];

document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.querySelector('.products');
    const cartItemsList = document.querySelector('.cart-items');

    renderProducts();

    function renderProducts() {
        productsContainer.innerHTML = '';
        productsData.forEach(product => {
            productsContainer.innerHTML += `
                <div class="product w-[300px] flex flex-col items-center p-4 bg-teal-100 rounded">
                    <div class='w-full'>
                        <img class='w-full h-[200px] object-cover rounded' src="./images/${product.img}">
                    </div>
                    <div class='hidden'>
                        <h3 class='text-2xl font-bold'>${product.name}</h3>
                        <p>Price: $${product.price}</p>
                        <input type="number" step="1" min="1" value="1" disabled class='number-product'>
                    </div>
                    <button class="show-detail w-full rounded mt-1 p-2 bg-green-400">Xem thêm</button>
                    <button class="add-to-cart w-full rounded mt-1 p-2 bg-green-400" data-id="${product.id}">Thêm vào giỏ hàng</button>
                </div>
            `;
        });
    }

    function renderCart() {
        cartItemsList.innerHTML = '';
        cartItems.forEach(item => {
            cartItemsList.innerHTML += `
                <li class="cart-item">
                    <span>${item.name}</span> |
                    <span>Số lượng: ${item.quantity}</span>
                    <span>Giá tiền: $${item.price * item.quantity}</span>
                    <button class="remove-btn px-2 py-1 rounded bg-red-400" data-id="${item.id}">Xóa</button>
                </li>
            `;
        });
    }

    const showDetails = document.querySelectorAll('.show-detail')

    showDetails.forEach( button => {
        button.addEventListener('click', function (e) {
            const product = this.parentElement
            product.querySelector('.hidden').classList.remove('hidden')
            product.querySelector('.show-detail').classList.add('hidden')
        })
    })

    productsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            const product = productsData.find(item => item.id === productId);
            const cartItem = cartItems.find(item => item.id === productId);
            // const inputProduct = this.parentElement.querySelector('input')
            // let numberProduct
            // inputProduct.addEventListener('change', function() {
            //     numberProduct = inputProduct.value
            //     console.log(numberProduct);
            // });
            if (cartItem) {
                cartItem.quantity++;
            } else {
                cartItems.push({ id: productId, name: product.name, price: product.price, quantity: 1 });
            }
            renderCart();
        }
    });

    cartItemsList.addEventListener('click', function (event) {
        if (event.target.classList.contains('remove-btn')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            const index = cartItems.findIndex(item => item.id === productId);
            if (index !== -1) {
                cartItems.splice(index, 1);
                renderCart();
            }
        }
    });
});
