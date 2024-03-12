"use strict";
//BT 1
var ten = "Định";
var age = 21;
var hienThi = "Xin ch\u00E0o, t\u00F4i l\u00E0 ".concat(ten, " v\u00E0 t\u00F4i ").concat(age, " tu\u1ED5i.");
// console.log(hienThi);
//BT 2
var num = 0.873457689;
if (isNaN(num)) {
    console.log("a không phải là số");
}
var convertNum = num.toFixed(3);
// console.log(convertNum, typeof convertNum);
var convertNum1 = num.toFixed(5);
// console.log(num.toFixed(2), num.toFixed(5));
//BT 3
var sinhVien = "Sinh viên Công nghệ thông tin";
var truongHoc = "FPT Polytechnic";
// console.log(sinhVien.substring(0, 4), truongHoc.substring(0, 4));
// console.log(sinhVien.concat(" - ", truongHoc));
//BT 4
var tinhTongHop = function () {
    var so1 = document.getElementById("num1").valueAsNumber;
    var so2 = document.getElementById("num2").valueAsNumber;
    var content = document.getElementById("content");
    console.log(so1, so2);
    content.innerHTML +=
        "T\u1ED5ng: ".concat(so1 + so2, " <br> Hi\u1EC7u: ").concat(so1 - so2, " <br>\n        T\u00EDch: ").concat(so1 * so2, " <br> Th\u01B0\u01A1ng: ").concat(so1 / so2, " <br>\n       ");
};
//BT 5
var diemWEB1 = [6, 7, 9, 10, 5];
var diemTb = function (diems) {
    var tong = 0;
    for (var _i = 0, diems_1 = diems; _i < diems_1.length; _i++) {
        var diem = diems_1[_i];
        tong += diem;
    }
    console.log("Điểm trung bình của lớp là: ", tong);
};
diemTb(diemWEB1);
//# sourceMappingURL=index.js.map