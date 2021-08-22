var array = [1, 2, 3, 4, 5, 6], suma=0, iloczyn=1;
const operacje = function () {
   for (let i = 0; i < array.length; i++) {
      suma = suma + array[i];
      iloczyn = iloczyn * array[i];
   }
   console.log("Suma w tablicy wynosi: " + suma);
   console.log("Iloczyn w tablicy wynosi: " + iloczyn);
}
operacje(array);