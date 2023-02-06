alert("Hello Bros");
console.log("Hello World From HTML");

//  function hello (){
//      return "This is Function Arrow";
// } ---> Đây là function thường (k cs dấu '=' sau từ 'hello' và k cs dấu '=>' sau dấu '()')

let hello = () => {
    return "This is Function Arrow";
}
console.log("Check Arrow: ",hello());

// Arrow: Mũi tên
// Dùng hàm arrow k cần khai báo function giống function thường (let khai báo hay k cũng đc) -> gọn hơn


let obj = {
    name: 'VanQuoc',
    address: 'HaNoi',
    getName: function(){
        return this.name;
    }
}
console.log(">>>get name obj: ",obj.getName());

// Function → Free (Free means it can be anywhere, no need to be in an object or class)
// Method → Member (A member of an object or class)

//Function: K cs 'this', đứng 1 mình
//Method: Nằm trong 1 class or 1 obj, công cụ của class or obj, k đứng 1 mình
//Cả 2 đều là hàm và đều cs nghĩa tái sử dụng (reuse)

