// Tạo một danh sách lớp theo những yêu cầu sau: 
// Danh sách 5 sinh viên
// Mỗi sinh viên có 5 đặc tính: Họ, Tên, ID, Quê quán, Học lực (Giỏi, Khá, Trung bình) 
// Tạo class và dùng mảng gán giá trị cho từng object 
// Thực hiện các yêu cầu sau: 
// Truy xuất tên của 5 sinh viên 
// Truy xuất tên và học lực của 5 sinh viên
// Truy xuất ra tên và học lực của những sinh viên có học lực Giỏi

enum HocLuc{
    Gioi = "Giỏi",
    Kha = "Khá",
    TrungBinh = "Trung Bình"
}

class SinhVien {
    constructor(
        public ho: string, 
        public ten: string, 
        private _ID: string,
        public queQuan: string,
        public hocLuc: HocLuc
        ) {}

    public getID() {
        return this._ID
    }

    // getHocLuc(){
    //     switch (this.hocLuc) {
    //         case HocLuc.Gioi:
    //             return "Học lực giỏi"
    //         case HocLuc.Kha:
    //             return "Học lực khá"
    //         case HocLuc.TrungBinh:
    //             return "Học lực trung Bình"

    //         default:
    //             return "Không tìm thấy học lực"
    //     }
    // }
}

const danhSachLop: SinhVien[] = [
    new SinhVien("ho 1", "ten 1", "1", "Que quan 1", HocLuc.Gioi),
    new SinhVien("ho 2", "ten 2", "2", "Que quan 2", HocLuc.Kha),
    new SinhVien("ho 3", "ten 3", "3", "Que quan 3", HocLuc.TrungBinh),
    new SinhVien("ho 4", "ten 4", "4", "Que quan 4", HocLuc.Kha),
    new SinhVien("ho 5", "ten 5", "5", "Que quan 5", HocLuc.TrungBinh),
]

danhSachLop.map(sv => {
    console.log(sv.ten, sv.hocLuc);
})

danhSachLop.filter(sv => sv.hocLuc === HocLuc.Gioi).map(sv => {
    console.log("\n", sv.ten, sv.hocLuc);
})


