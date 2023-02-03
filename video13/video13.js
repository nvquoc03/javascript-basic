alert("Never Give Up");
console.log("Hello World From HTML");

let arrTop3 = ['JS','Python','C++'];

let i = 0;

while(i<arrTop3.length){
    i++;
    if(arrTop3[i] === 'Python'){
        console.log("Found it: ",arrTop3[i])
        continue;
    }
    console.log(">>Check i: ",i);   
   
    
}

// vì là vòng lặp nên sẽ xét i = 0 trước cho dù kết quả là trước hay sau 
// Lệnh break giúp thoát ra khỏi vòng lặp (khi đã tìm thấy giá trị cần tìm)
// Lệnh continue sẽ thoát (k thực hiện lệnh bên dưới) và quay trở lại vòng lặp khi gặp giá trị cần tìm (giá trị của if,...). Sau đó vòng lặp thực hiện bình thường