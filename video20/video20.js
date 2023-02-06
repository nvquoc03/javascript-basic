alert("Hello Bros");
console.log("Hello World part n From HTML");

let sum = (a, b, callback) => {
   
    let tong = a + b;
   // setTimeout(()=>{ 
   //     callback(tong);
   // },3000)     // khi chạy thì 3s sau code ms xuất hiện 3000 miliseconds = 3 seconds


let i = 0;
let timer = setInterval(()=>{
    callback(tong);
    i++;
    if(i === 5){ // phải dùng if i ==== 5 để dừng code khi i++ tới 5 k thì hàm sẽ lặp vô hạn
        clearInterval(timer) //hàm clear để xóa hàm setinterval
    }
},1000);// mỗi 1s lặp 1 lần

}


let printSum = (message) => {
    console.log(">>>Check value a + b: ", message); 
}

sum(21,9,printSum);//printSum có thể hiểu là callback ở trên và lấy kết quả là a+b -> xog rồi khai báo ở phần message

//Callback: gọi lại sau. để xử lý bất đồng bộ
//SetTimeOut: thời gian chờ để thực hiện code
//SetInterval: khoảng thời gian. giống settimeout nhưng lặp vô hạn