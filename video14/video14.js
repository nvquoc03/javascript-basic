alert("Hello MyFriend");
console.log("Hello World From HTML");

let day = '';
let a = 1;

switch (a) {
    case 0:
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday"
    default: 
      day = "UnKnown"
}
console.log("Today is:",day);

// Vì case 0 không có break nên switch chạy đến case 1 và dừng khi gặp break ở case 1.
// Dùng mẹo 'thác nước' với Switch khi muốn khác câu nhưng cùng 1 kết quả (như case 0 và 1)