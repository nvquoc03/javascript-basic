console.log("Hello World");
alert("Keep Going Bro");

//key: value (Không dùng dấu cách ở key, có thể thêm dấu ' ở key)
let obj = {
    name : "VanQuoc",
    address : "NinhHiep", 
};

let b = 'name';
// obj[b] = 'Hi'; (Dữ liệu động - Thay đổi liên tục)
obj.name = 'Hello' //Dữ liệu tĩnh - Đã biết

console.log(`What is your name?`,`My name is:`, obj.name);
// console.log(`What is your name?`,`My name is:`, obj['name']); (Dùng khi là dữ liệu động)
console.log(`Where are you from?`,`I am from:`,obj.address);

