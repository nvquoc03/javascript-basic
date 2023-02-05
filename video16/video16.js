alert("Hello Bros");
console.log("Hello World From HTML");

// hàm function giúp tái sử dụng code và giúp code gọn hơn
// dấu () ở gần sum là tham số đầu vào (input parameter). sum ở đây là tên của hàm Function - và là động từ
function Sum(a, b){
    return a + b;

}
console.log("Sum: a + b =",Sum(21,9)); // a = 21 và b = 9

let c = Sum(6,9); // trường hợp này đang gán c = sum a + b. đang cho a = 6 và b = 9
console.log("Sum c =",c);