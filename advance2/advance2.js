
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
           // const dataString = JSON.stringify(data); // Chuyển từ Obj sang JSON

         // Phải dùng JSON để chuyển dạng Text-String sang Obj để lấy dữ liệu chuẩn
         // Vì phía Server chỉ cs thể hiểu đc dạng Text-String

        //    callback(undefined,data);
        resolve(data)

          //  callback(undefined,dataString);
        }
        if(this.readyState === 4 && this.status !== 200) {
            // callback('Something Wrongs',undefined);
            reject('Something Wrongs with data:' + id)
        }

    }; 

    request.open("GET",`https://jsonplaceholder.typicode.com/todos/${id}`, true);  
    request.send(); 
    
})
}    

getTodos(1)
.then(data1=>{
    console.log(">>>data1: ",data1)
    return getTodos(2);

}).then(data2=>{
    console.log(">>>data2: ",data2)
    return getTodos('1231231212')

}).then(data3=>{
    console.log(">>>data3: ",data3)

})
.catch(error=>{ // chỉ cần 1 cái lỗi là thoát luôn k chạy code ở dưới nữa 
    console.log(">>>error: ",error)
})
//---> Chaining promise
            


// getTodos(1,callback); 
// getTodos(2,callback);
// getTodos(3,callback); 

// Promise: dùng cho bất đb, giúp code chạy theo từng dòng, tránh tốn time. Là 1 function nhưng phải có return
// ---------------------------------------------------------------------------------------------------
// Ví Dụ
// const promiseExp = () =>{
//     return new Promise((resolve,reject)=>{
//         resolve('Get some date'); // Thành công, k có lỗi - ưu tiên lấy resolve 
//         reject('Something wrongs'); // Có lỗi
//     })
// }
// promiseExp() 
//     .then(value =>{  // value ở đây là kết quả của biến resolve trả về ở trên
//         console.log(value)  
//     })
//     .catch(error =>{ // error ở đây là kết quả của biến reject trả về ở trên
//         console.log(error); // Để bắt lỗi dùng hàm '.catch()' - dùng để lấy biến của reject

//     })

//-----------------------------------------------------------------------------------------------------







//JSON giống Text, Có { } ở đầu và cuối data, Là chuẩn giao tiếp giữa Client và Server (FrontE và BackE)
//JSON: muốn xử lý đc thì phải chuyển về dạng Obj