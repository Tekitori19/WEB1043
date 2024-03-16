"use strict";
// LAB 3 - WEB1043 
// Bài tập 1: Tính biểu thức của hai số
// Viết một chương trình sử dụng các hàm để tính tổng, hiệu, thương của hai số nhập từ người dùng và in ra kết quả
var tinhTongHop = function () {
    var so1 = document.getElementById("num1").valueAsNumber;
    var so2 = document.getElementById("num2").valueAsNumber;
    var content = document.getElementById("content");
    console.log(so1, so2);
    content.innerHTML +=
        "T\u1ED5ng: ".concat(so1 + so2, " <br> Hi\u1EC7u: ").concat(so1 - so2, " <br>\n        T\u00EDch: ").concat(so1 * so2, " <br> Th\u01B0\u01A1ng: ").concat(so1 / so2, " <br>\n       ");
};
// Bài tập 2: Xác nhận đăng xuất
// Viết một chương trình JavaScript để yêu cầu người dùng xác nhận nếu họ muốn đăng xuất khỏi trang web. 
// Bước 1: Người dùng nhấp vào nút đăng xuất trên màn hình.
// Bước 2: Hiển thị hộp thoại xác nhận và in ra thông báo tương ứng sau khi người dùng đã xác nhận hoặc hủy bỏ.
function signOut() {
    var a = confirm("Bạn có muốn đăng xuất?");
    if (a) {
        alert("Đăng xuất thành công");
    }
    else {
        alert("Đăng xuất thất bại");
    }
}
// Bài tập 3: Tính tổng các số chẵn trong một dãy số
// Viết một hàm JavaScript để tính tổng của các số chẵn trong một dãy số được nhập từ người dùng.
var nums = [];
function addNum() {
    var themSo = document.getElementById("themSo").valueAsNumber;
    var array = document.getElementById("array");
    if (isNaN(themSo)) {
        alert("Vui lòng nhập giá trị");
        return;
    }
    nums.push(themSo);
    array.innerText = "[" + nums.toString() + "]";
}
function calNum() {
    var content = document.getElementById("content");
    var value = 0;
    nums.forEach(function (num) {
        if (num % 2 === 0) {
            value += num;
        }
    });
    content.innerText = value.toString();
}
// Bài tập 4: Xác nhận đăng nhập
// Viết một chương trình JavaScript để mô phỏng quy trình đăng ký sự kiện. 
// Khi người dùng nhập thông tin của họ và nhấn nút "Đăng ký", 
// chương trình sẽ hiển thị một hộp thoại xác nhận để xác nhận việc đăng ký. 
// Nếu người dùng nhấn nút "OK", chương trình sẽ in ra một thông báo xác nhận việc đăng ký thành công. 
// Nếu người dùng nhấn nút "Cancel", chương trình sẽ in ra một thông báo cho biết việc đăng ký đã bị hủy bỏ.
function subcrise() {
    alert("Đăng ký");
    var ten = prompt("Mời nhập tên: ", "John");
    var tuoi = prompt("Mời nhập tên: ", "18");
    var choose = confirm("Xác nhận đăng ký");
    if (choose) {
        alert("\u0110\u0103ng k\u00FD th\u00E0nh c\u00F4ng: ".concat(ten, ", ").concat(tuoi, " tu\u1ED5i"));
    }
    else {
        alert("Hủy bỏ đăng ký");
    }
}
//# sourceMappingURL=index.js.map