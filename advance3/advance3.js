

const callback = (error,data) => {
    if(error){
        console.log('>>> calling callback with error: ', error);
    }
    if(data){
        console.log('>>> calling callback with data: ', data);

    }
}

function getTodos (id, callback){
    return new Promise((resolve,reject)=>{
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() { 
        if (this.readyState === 4 && this.status === 200) { 
         
            const data = JSON.parse(request.responseText); // Chuyển từ JSON sang Obj

         // Phải dùng JSON để chuyển dạng Text-String sang Obj để lấy dữ liệu chuẩn
         // Vì phía Server chỉ cs thể hiểu đc dạng Text-String

        //    callback(undefined,data);
        resolve(data)

        }
        if(this.readyState === 4 && this.status !== 200) {
            // callback('Something Wrongs',undefined);
            reject('Something Wrongs with data:')
        }

    }; 

    request.open("GET",`https://jsonplaceholder.typicode.com/todos/${id}`, true);  
    request.send(); 
    
})
}    

const getNewTodo = async(id) => {   // Dùng key async để hiểu rằng function này là 1 promise
   
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if(response.status !== 200){
        throw new Error('Something Wrongs: '+response.status) // Throw trả ra giá trị lỗi - reject
    }
    let data = await response.json(); // Vì là bất đồng độ nên phải dùng key await để lấy dữ liệu (Nếu k máy tính sẽ k chờ mà chạy luôn)
    return data; // Return trả ra giá trị đúng - resolve
}
getNewTodo('34345325r243').then(data => {
    console.log(">>>>Check data: ",data);1
})
.catch(err => {
    console.log(">>>Check error: ", err.message) // message là cái ở Trong throw new Error
})

// fetch("https://jsonplaceholder.typicode.com/todos")//--> Dùng Fetch Lấy API
// .then(response => { // Trả về luồng dữ liệu
//     return response.json() //Đối tượng response có phương thức json | return sẽ trả lại 1 promise
// }) // JSON.parse: JSON -> JavaScript | Response.json là đổi kiểu json về kiểu javascript types luôn
// .then(data => { // Để hứng kết quả từ return ở trên
//     console.log(">>> check data: ",data)
// })
// .catch(error => {
//     console.log("Something Wrongs",error)  // Nếu API sai thì hàm sẽ đc chạy
// }) 

// // Có thể hiểu fetch là 1 API, trả về 1 promise -> dùng hàm '.then'