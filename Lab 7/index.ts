const items: HTMLElement[] = []

function show() {
    const cards = document.querySelectorAll(".card")
    cards.forEach((el, id) => {
        let randomPrice: number
        const showBtn = el.querySelector(".showItem") as HTMLButtonElement
        const para = el.querySelector(".show") as HTMLDivElement
        const inputContainer = el.querySelector(".input-container") as HTMLDivElement

        randomPrice = ((id + Math.random())*10)
        showBtn?.addEventListener("click", () => {
            para.innerHTML = `
                <h2 class="SP">Sản phẩm ${id}</h2>
                <p class="Price">Giá: ${randomPrice.toPrecision(2)}</p>
            `

            inputContainer.innerHTML = `
            <input type="number" min="0" step="1" placeholder="Hộp chọn số lượng">
            `
        })
    })
}

function cart() {
    const cards = document.querySelectorAll(".card")
    cards.forEach((el) => {
        const title = el.querySelector("h2") as HTMLHeadingElement
        
        const price = el.querySelector("p") as HTMLParagraphElement
        const addToCart = el.querySelector(".addToCart") as HTMLButtonElement

        // addToCart.addEventListener("click", () => {
            const numberProduct = el.querySelector("input") as HTMLInputElement
            let inputValue = numberProduct.value

            console.log(inputValue, title.textContent, price.textContent);
            
            const elToCart = document.createElement('div');
            elToCart.innerHTML =`${title.textContent} ${price.textContent} ${numberProduct.value}`
            
            // console.log(elToCart);
            

            items.push(elToCart)
        // })
    })

    const checkout = document.querySelector(".cart") as HTMLDivElement

    items.map(el => 
        checkout.appendChild(el)
    )
}

window.addEventListener("load",()=>{
    show();
    // cart()
})