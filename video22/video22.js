alert("Hello Bros part n");
console.log("Hello World From HTML part n");

let arr = [1,2,3,4,5];
// for(let i = 0; i<arr.length; i++){
//     arr[i] = arr[i] * arr[i]; 
// } 
// console.log("Check value arr: ",arr);
//---> Hàm For sẽ lấy dữ liệu ban đầu và biến thành dữ liệu khác

let mapArr = arr.map((item,index)=>{
    item = item * item;
    return item;
})

console.log("Check value mapArr: ",mapArr);
//---> Hàm Map sẽ copy và tạo mảng khác

let reducer = arr.reduce((previousValue,currentValue)=>{    
    return previousValue + currentValue;

},10) // chỗ số 10 ở đây là tham số khởi tạo - initValue, và có thể quy định kiểu trả về (vd: nếu ở chỗ số 10 có [ ] thì sẽ trả về 1 mảng)

console.log("Check Reducer: ",reducer); //---> Hàm reduce: lấy các giá trị cũ và customize initValue theo tùy thích.



// Map giống For là đều lặp qua các phần tử.  
// Tuy nhiên Map sẽ copy mảng ban đầu và tạo ra mảng mới (k ảnh hưởng đến dữ liệu mảng cũ)->Thao tác mà k cần quan tâm mảng ban đầu như thế nào
// Hàm For thay đổi dữ liệu, hàm map copy và tạo mảng mới 
