// Bài tập 1: Xây dựng một trang web cho phép người dùng nhập tên của họ vào một ô văn bản và 
// hiển thị lời chào theo định dạng "Xin chào, [tên người dùng]!" khi họ nhấn nút "Submit".

const bt1 = () => {
    const param = document.getElementById("param") as HTMLParagraphElement
    param!.innerText = (document.getElementById("user") as HTMLInputElement).value
}

// Bài tập 2: Xây dựng một trang web cho phép người dùng nhập một số từ bàn phím vào một ô văn
// bản và hiển thị bình phương của số đó khi họ nhấn nút "Kết quả".
const bt2 = () => {
    const param = document.getElementById("param") as HTMLParagraphElement
    param.textContent = `Kết quả bình phương của số trên: ${((document.getElementById("num") as HTMLInputElement).valueAsNumber ** 2).toString()}`
}

// Bài tập 3: Xây dựng một sản phẩm có Tên, giá, hình ảnh và một hộp điền số lượng cần mua. Sau 
// khi người dùng nhập số lượng và nhấn nút “Mua hàng”, hãy trả về màn hình tổng số lượng và tổng giá trị đơn hàng của sản phẩm đó.
const bt3 = () => {
    const param = document.getElementById("param") as HTMLParagraphElement
    const num = document.getElementById("num") as HTMLInputElement
    param.innerHTML = `Sản phẩm Mèo <br>
    Số lượng: ${num.valueAsNumber} <br>
    Tổng tiền cần trả: 
    ${num.valueAsNumber * 200}`
}