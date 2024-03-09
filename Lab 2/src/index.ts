//BT 1
let ten: string = "Định";
let age: number = 21;
let hienThi = `Xin chào, tôi là ${ten} và tôi ${age} tuổi.`

// console.log(hienThi);

//BT 2
const num = 0.873457689;
if (isNaN(num)) {
    console.log("a không phải là số");
}
const convertNum = (num.toFixed(3)).toString()
// console.log(convertNum, typeof convertNum);
const convertNum1 = (num.toFixed(5)).toString()
// console.log(num.toFixed(2), num.toFixed(5));

//BT 3
const sinhVien = "Sinh viên Công nghệ thông tin";
const truongHoc = "FPT Polytechnic";
// console.log(sinhVien.substring(0, 4), truongHoc.substring(0, 4));
// console.log(sinhVien.concat(" - ", truongHoc));

//BT 4
const tinhTongHop = () : void => {    
    const so1 = (document.getElementById("num1") as HTMLInputElement).valueAsNumber;
    const so2 = (document.getElementById("num2") as HTMLInputElement).valueAsNumber;
    const content = document.getElementById("content");
    console.log(so1, so2);
    
    content!.innerHTML += 
        `Tổng: ${so1+so2} <br> Hiệu: ${so1-so2} <br>
        Tích: ${so1*so2} <br> Thương: ${so1/so2} <br>
       `
}

//BT 5
const diemWEB1: number[] = [6,7,9,10,5];

const diemTb = (diems: number[]) => {
    let tong: number= 0
    for (const diem of diems) {
        tong += diem
    }
    console.log("Điểm trung bình của lớp là: ",tong);
}
diemTb(diemWEB1)