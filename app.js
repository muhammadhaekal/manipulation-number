//----------------------------lovel 0-------------------
var numberA = 10
let numberB = 099
const numberC = 0.02

console.log("----------------------------lovel 0-------------------");
console.log(numberA);
console.log(numberB);

//----------------------------lovel 1-------------------
var numberD = numberA + numberB

console.log("----------------------------lovel 1-------------------");
console.log(numberD);
numberD = numberA - numberB
console.log(numberD);
numberD = numberA * numberD
console.log(numberD);
numberD = numberB / numberD
console.log(numberD);
numberD = numberB % numberA
console.log(numberD);

//----------------------------lovel 2-------------------
console.log("----------------------------lovel 2-------------------");

var boolean = true;
numberD = numberA - numberA
//use boolean, string, number data type
if(boolean){
  var string = `${numberB} minus ${numberA} equals ${numberD} `
}
console.log(string);
//use of negative and big number
numberA = 25500020
numberB = -239320.2323
numberD = numberA + numberB
console.log(numberD);

//----------------------------lovel 3-------------------
console.log("----------------------------lovel 3-------------------");
var arrDataType = [2,32,-3,0,12,24]
console.log(`----------store numbers--------------`);
console.log(arrDataType);

arrDataType.push(2);
arrDataType.push(true);
arrDataType.push("string");
arrDataType.pop();
var newArr = ["A","b"];
arrDataType = arrDataType.concat(newArr);
console.log(`----------push, pop array--------------`);
console.log(arrDataType);

console.log(`----------loop array--------------`);
for(i=0;i<arrDataType.length;i++){
  console.log(`array[${i}] = ${arrDataType[i]}`);
}
