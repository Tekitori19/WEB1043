const theList = ['Lauren', 'Kevin',true,35,null,undefined,['one', 'two']];

//xóa phần tử cuối cùng
theList.pop()
console.log(theList);

//xóa phần tử đầu tiên
theList.shift()
console.log(theList);

//thêm 'hello world' vào vị trí thứ 4 của mảng
theList.splice(3,0,'hello world')
console.log(theList);

//thêm 'middle' vào vị trí thứ 3 của mảng
theList.splice(2, 0, 'middle')
console.log(theList);

//thêm 'LAST' vào cuối mảng
theList.push('LAST')

console.log("Kết quả", theList);