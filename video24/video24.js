alert("Hi!");
console.log("Hi HTML");

let arr = [1,30,4,21,1000];
let sorter = arr.sort((previousValue,currentValue)=>{ //previousValue là phần tử đầu tiên dùng để so sánh, tương tự currentValue thứ 2
    return previousValue - currentValue; //Dùng phép trừ để sắp xếp true và false 
})
// nếu a>0 -> b trước a ... nếu a<0 -> a trước b =>> Dùng để xác định xem số vào là previous và số nào là current, xog đó mới tính a-b (Không chắc chắn, chỉ là suy luận cá nhân, nên bám theo bài cũ)

// VD: a = previousValue, b = currentValue 
//---> a-b<= thì a trước b, a-b>0 thì a sau b
console.log("Check sort: ",sorter); // Đây là hàm sort sắp xếp các số lớn dần theo giá trị


//--------------------Đây là hàm sort thường---------------------------//
// -->Hàm sort là sắp xếp, nó sắp xếp từ đầu đến cuối theo bảng chữ cái A-Z
// -->Nếu có số 4 và 30 thì 30 vẫn xếp trước vì 3 < 4
