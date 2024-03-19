// Bài tập 2: 
// Tạo một danh sách thú cưng của một cửa hàng theo những yêu cầu sau:
// Danh sách có 3 mèo, 3 chó
// Mỗi con vật có 4 đặc tính sau: Tên, chủng loại (chó/ mèo), màu sắc (trắng/ đen/ nâu), tuổi
// Tạo class và dùng mảng gán giá trị cho từng object 
// Thực hiện các yêu cầu sau: 
// Truy xuất thông tin danh sách mèo và chó riêng. 
// Truy xuất tên và tuổi của các con vật có màu nâu
// Truy xuất tên và màu của các con mèo có tuổi < 5
// Truy xuất tên và tuổi các con chó có màu đen 

enum Color{
    Trang = "Trắng",
    Den = "Đen",
    Nau = "Nâu"
}

abstract class Pet {
    constructor(
        public ten: string,
        public mauSac: Color,
        public tuoi: number
    ) {}
}

class Dog extends Pet{
    public chungLoai = "Chó"
    constructor(
        ten: string,
        mauSac: Color,
        tuoi: number
    )
    {
        super(ten, mauSac, tuoi)
    }
}

class Cat extends Pet{
    public chungLoai = "Mèo"
    constructor(
        ten: string,
        mauSac: Color,
        tuoi: number
    )
    {
        super(ten, mauSac, tuoi)
    }
}

const dogList: Dog[] = [
    new Dog("chó 1", Color.Den, 2),
    new Dog("chó 2", Color.Trang, 1),
    new Dog("chó 3", Color.Nau, 2),
    new Dog("chó 4", Color.Nau, 1),
    new Dog("chó 5", Color.Nau, 3)
]

const catList: Cat[] = [
    new Cat("mèo 1", Color.Den, 2),
    new Cat("mèo 2", Color.Trang, 1),
    new Cat("mèo 3", Color.Nau, 2),
    new Cat("mèo 4", Color.Nau, 1),
    new Cat("mèo 5", Color.Nau, 3)
]

const petList: Pet[] = [...dogList, ...catList]

// Truy xuất thông tin danh sách mèo và chó riêng.
console.log(dogList, catList);

// Truy xuất tên và tuổi của các con vật có màu nâu
petList.filter(pet => pet.mauSac === Color.Nau).map(pet =>{
    console.log("Tên pet:", pet.ten, "Tuổi pet:",pet.tuoi);
})

// Truy xuất tên và màu của các con mèo có tuổi < 5
catList.filter(cat => cat.tuoi < 5).map(({ten, tuoi}) => {
    console.log("Tên mèo:", ten, "Tuổi mèo:", tuoi);
})

// Truy xuất tên và tuổi các con chó có màu đen 
dogList.filter(dog => dog.mauSac === Color.Den ).map(({ten, tuoi}) => {
    console.log("Tên chó:", ten, "Tuổi chó:", tuoi);
})
