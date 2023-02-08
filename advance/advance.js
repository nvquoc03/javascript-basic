// Async - sự bất đồng bộ: Chạy tất cả, k chờ dòng code nào cả, k cs thứ  tự 
//--> Vì thường phải lấy dữ liệu dưới database (phải chờ) nên dùng Async cho nhanh 
//Sync - sự đồng bộ: Chạy từ đầu đến cuối (từng dòng code), cs thứ tự

// Request là API, API là 1 đg link URL để lấy data. Để lấy được đg link phải tạo request
// Thực hiện hành động và lấy được data thì là Request

//This: thực hiện trong 1 phạm của của Obj
//Status: trạng thái (vd: 200 nghĩa là thành công, 404 là k tìm thấy, 500 là lỗi bên server)
//Callback: Có thể hiểu là hàm trong hàm thì là callback


const callback = (error,data) => {
    if(error){
        console.log('>>> calling callback with error: ', error);
    }
    if(data){
        console.log('>>> calling callback with data: ', data);

    }
}

function getTodos (callback){
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() { //Ở trong hàm Function giống như callback vậy, vì phải chạy phần request.open xog mới quay lại chạy code
        if (this.readyState === 4 && this.status === 200) { 
           // Typical action to be performed when the document is ready:
           const data = request.responseText;
           callback(undefined,data);
        }
        if(this.readyState === 4 && this.status !== 200) {
            callback('Something Wrongs',undefined);
        }

    }; // ---> Lấy data từ request
    
    request.open("GET", "https://jsonplaceholder.typicode.com/todos", true);  //Khởi tạo request
    request.send(); // Truy cập-chạy request

}

getTodos(callback); 


