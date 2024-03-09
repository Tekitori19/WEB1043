let num = 10

//set num value of 10

console.log(num);
alert("Num: "+ num);

let x = prompt("Input n: ")

while(isNaN(x)) {
    alert("Vui lòng nhập số nguyên");
    x = prompt("Input n: ");
}

// Cách 1
// document.getElementsByTagName("p")[0].innerText = x;

//Cách 2
let arr = Array.from(document.getElementsByTagName("p"));
arr.forEach(e => e.innerText = x)

