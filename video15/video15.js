alert("Hello Bros");
console.log("Hello World From HTML");

for(let i=0; i<10; i++){    
    if(i % 2 === 0){ //nếu dư 0 là chẵn, còn lại là lẻ
        console.log("i chan la: ",i);       
    } else {
        console.log("i le la: ",i);
    }
   
}



//Global Scope: phạm vi rộng, định nghĩa ở ngoài hàm or khối, và nó sẽ khai báo cho tất cả ở dưới (biến toàn cục)
//Block Scope: phạm vi hẹp, chỉ được định nghĩa và sử dụng ở mỗi khối { } (biến cục bộ)
//Function Scope: định nghĩa ở mỗi hàm (nhiều khối code - { }), 1 function có thể chứa nhiều khối code
