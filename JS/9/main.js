// Własna Funkcja
//function iloczyn() {
//     let p1 = prompt("Wprowadź pierwszy parametr:");
//     let p2 = prompt("Wprowadź drugi parametr: ");
//     let p3 = prompt("Wprowadź trzeci parametr: ");
//     let iloczyn = p1*p2*p3;
//     return iloczyn;
// }
// iloczyn();

//Funkcja zrobiona w ES5
// function iloczyn(num1, num2, num3) {
//     let result = num1*num2*num3;
//     return result;
// } 
// let wynikIloczynu = iloczyn(2,3,4);
// console.log(wynikIloczynu);

//Funkcja zrobiona w ES6
// const iloczyn = (num1, num2, num3) => {
//     let result = num1*num2*num3;
//     return result;
// } 
// let wynikIloczynu = iloczyn(2,3,4);
// console.log(wynikIloczynu);

const iloczyn = (num1, num2, num3) => num1*num2*num3;
let wynikIloczynu = iloczyn(2,3,4);
console.log(wynikIloczynu);