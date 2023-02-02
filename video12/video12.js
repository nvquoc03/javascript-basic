console.log("Hello World From HTML");
alert("Hello MyFriend");

let arrTop3 = ['JS','Python','C++'];
for(let i=0; i<arrTop3.length; i++){ 
    console.log("Top",i+1,":",arrTop3[i]) 
} //Hàm for -> Nên dùng


let i = 0;
while(i<arrTop3.length){
    console.log("Top",i+1,":",arrTop3[i]);
    i++;
}   // Hàm while


//    let i = 0;
//    do {
//    console.log("Top",i+1,":",arrTop3[i]);
//    i++;
//    } while(i<0)                              // Hàm do while


// Hàm while: nếu đk sai thì k chạy
// Hàm do while: nếu đk sai thì chạy ít nhất 1 lần

// Hàm for: khởi tạo giá trị trong hàm (let i=0)
// Hàm while: khởi tạo giá trị ngoài hàm

// Dùng for khi biết rõ số lần cần lặp
// Dùng while khi muốn vòng lặp lặp đến giá trị cần (Chưa biết số lần lặp) (true or false,...). VD:While(true) -> sẽ lặp đến khi nào có giá trị false thì dừng