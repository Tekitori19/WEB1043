"use strict";
// Bài tập 1: Thay đổi định dạng trang web khi click button:
// Yêu cầu: sau khi thực hiện click vào button, trang web sẽ thay đổi như sau:
// Văn bản thay đổi:
// Font chữ từ Arial -> Time new roman 
// Màu đen -> màu xanh
// Nền thay đổi từ màu trắng -> hồng 
function changeFont() {
    const content = document.getElementById("content");
    content.classList.toggle("font");
}
// Bài tập 2: Cho danh sách sản phẩm (theo layout dưới đây), 
// dùng vòng lặp thực hiện thay đổi kích thước và màu sắc (tùy ý) 
// của sản phẩm nếu như bạn click vào nút “mua hàng” đi kèm trong mỗi sản phẩm.
function changeCard() {
    const card = document.querySelectorAll(".card");
    card.forEach(el => {
        let oldColor = "bg-blue-400";
        let newColor = "bg-green-400";
        let tmp = '';
        let isChoose = false;
        const btn = el.querySelector("button");
        const img = el.querySelector(".img");
        const product = el.querySelector(".product");
        btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
            btn.classList.remove(oldColor);
            btn.classList.add(newColor);
            img === null || img === void 0 ? void 0 : img.classList.remove(oldColor);
            img === null || img === void 0 ? void 0 : img.classList.add(newColor);
            product === null || product === void 0 ? void 0 : product.classList.toggle('font-serif');
            tmp = oldColor;
            oldColor = newColor;
            newColor = tmp;
            isChoose = !isChoose;
            if (isChoose) {
                el.classList.remove("w-1/4");
                el.classList.add("w-2/4");
            }
            else {
                el.classList.remove("w-2/4");
                el.classList.add("w-1/4");
            }
        });
    });
}
window.addEventListener('load', () => {
    changeCard();
});
