const arr = ["hello",4,6,null,11,22,1,0,0,0,5,8];
function diffNumber() {
  let even = 0;
  let odd = 0;
  let count0 = 0;
  arr.forEach(function(item,index,array) {
  if(typeof(item) == "number") {
    if (item ===0) {
    count0++
  } else if(item %2 == 0) {
    even++
  } else if (item %2 !=0) {
    odd++
  } 
 }
}) 
  console.log (`Количество четных - ${even}\;` + ` Количество нечетных - ${odd}\;` + ` Количество нулей - ${count0}`);
// console.log ("Количество четных - "+even);
// console.log ("Количество нечетных - "+odd);
// console.log ("Количество нулей - "+count0);
};
diffNumber();