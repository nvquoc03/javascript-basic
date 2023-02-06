alert("Hello Bros");
console.log("Hello World From HTML");

function checkout(x,y,i){
    console.log("1");
    console.log("2");  
    if(i === 5) return; // Vì i ở đây đúng = 5 nên sẽ thoát ra và không trả giá trị 3 và x+y
    console.log("3");
    return x + y;
   
   

}
console.log("Check sum: ", checkout(9,6,5)); // Check sum = undefined vì đã return ở phần if nên k thể return pần x+y

// Return chỉ dùng trong 1 {} cụ thể 
// Dùng return khi muốn thỏa mãn 1 đk j đó và muốn in ra kết quả đó, và nó sẽ bỏ qua phần dưới nếu phần trên đã return