const sumPower = function (result) {
   let suma = 0;
   for (let i = 0; i < result.length; i++) {
      suma = suma + Math.pow(array[i],2);
   }
   return suma;
}
let array = [0, 1, 2, 3, 4, 5];
console.log(sumPower(array));