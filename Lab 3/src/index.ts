// LAB 3 - WEB1043 

// Bài tập 1: Tính biểu thức của hai số
// Viết một chương trình sử dụng các hàm để tính tổng, hiệu, thương của hai số nhập từ người dùng và in ra kết quả
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


// Bài tập 2: Xác nhận đăng xuất
// Viết một chương trình JavaScript để yêu cầu người dùng xác nhận nếu họ muốn đăng xuất khỏi trang web. 
// Bước 1: Người dùng nhấp vào nút đăng xuất trên màn hình.
// Bước 2: Hiển thị hộp thoại xác nhận và in ra thông báo tương ứng sau khi người dùng đã xác nhận hoặc hủy bỏ.
function signOut() {
    let a = confirm("Bạn có muốn đăng xuất?")
    if (a) {
        alert("Đăng xuất thành công")
    } else {
        alert("Đăng xuất thất bại")
    }
}

// Bài tập 3: Tính tổng các số chẵn trong một dãy số
// Viết một hàm JavaScript để tính tổng của các số chẵn trong một dãy số được nhập từ người dùng.
const nums: number[] = []
function addNum() {
    const themSo = (document.getElementById("themSo") as HTMLInputElement).valueAsNumber;
    const array = (document.getElementById("array") as HTMLInputElement);
    if (isNaN(themSo)) {
        alert("Vui lòng nhập giá trị")
        return
    }
    nums.push(themSo)
    array.innerText = "[" + nums.toString() + "]"
}

function calNum() {
    const content = document.getElementById("content");
    let value: number = 0
    nums.forEach(num => {
        if (num % 2 === 0) {
            value += num
        }
    });
    content!.innerText = value.toString()
}

// Bài tập 4: Xác nhận đăng nhập
// Viết một chương trình JavaScript để mô phỏng quy trình đăng ký sự kiện. 
// Khi người dùng nhập thông tin của họ và nhấn nút "Đăng ký", 
// chương trình sẽ hiển thị một hộp thoại xác nhận để xác nhận việc đăng ký. 
// Nếu người dùng nhấn nút "OK", chương trình sẽ in ra một thông báo xác nhận việc đăng ký thành công. 
// Nếu người dùng nhấn nút "Cancel", chương trình sẽ in ra một thông báo cho biết việc đăng ký đã bị hủy bỏ.
function subcrise() {
    alert("Đăng ký")
    let ten = prompt("Mời nhập tên: ", "John")
    let tuoi = prompt("Mời nhập tên: ", "18")
    let choose = confirm("Xác nhận đăng ký")
    if (choose) {
        alert(`Đăng ký thành công: ${ten}, ${tuoi} tuổi`)
    } else {
        alert("Hủy bỏ đăng ký")
    }
}
