alert("Hello Bros");
console.log("Hello World From HTML");


let arr = [ // đây là 1 mảng chứa nhiều obj
    { name: 'VanQuoc', age: 20},
    { name: 'QuocVan', age: 15},
    { name: 'Blue', age: 30},
    { name: 'Lazy', age: 20},
]

let find = arr.find((items)=>{ // Cách gọi hàm filter vs find giống nhau 
    return items && items.age === 20 ;
});

console.log(find);



//Filter: bộ lọc, trả về nhiều phần tử (1 mảng - rỗng hoặc có phần tử). Bản thân filter tạo 1 mảng mới sau khi lọc xog
//Find: tìm kiếm, trả về 1 phần tử (nếu k cs thì là undefined). Find trả về phần tử được tìm thấy đầu tiên thỏa mãn đk.